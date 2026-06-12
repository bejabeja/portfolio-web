import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaHome,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./CommandPalette.module.css";

const CommandPalette = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") close();
    };
    const onOpen = () => setIsOpen(true);
    document.addEventListener("keydown", onKey);
    document.addEventListener("open-command-palette", onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 30);
  }, [isOpen]);

  const goTo = (id) => { navigate(`/#${id}`); close(); };

  const commands = [
    { id: "hero",       group: "nav",      label: t.cmd.home,           icon: FaHome,          action: () => goTo("hero") },
    { id: "about",      group: "nav",      label: t.nav.about,          icon: FaUser,          action: () => goTo("about") },
    { id: "experience", group: "nav",      label: t.nav.experience,     icon: FaBriefcase,     action: () => goTo("experience") },
    { id: "projects",   group: "nav",      label: t.nav.projects,       icon: FaCode,          action: () => goTo("projects") },
    { id: "contact",    group: "nav",      label: t.nav.contact,        icon: FaEnvelope,      action: () => goTo("contact") },
    { id: "github",     group: "links",    label: "GitHub",              icon: FaGithub,        action: () => { window.open("https://github.com/bejabeja", "_blank", "noopener,noreferrer"); close(); } },
    { id: "linkedin",   group: "links",    label: "LinkedIn",            icon: FaLinkedin,      action: () => { window.open("https://www.linkedin.com/in/miriamabella/", "_blank", "noopener,noreferrer"); close(); } },
    { id: "resume",     group: "links",    label: t.hero.btn2,          icon: FaExternalLinkAlt, action: () => { window.open("https://resume.mabella.dev", "_blank", "noopener,noreferrer"); close(); } },
    { id: "lang",       group: "settings", label: t.cmd.toggleLang,     icon: FaGlobe,         action: () => { toggleLanguage(); close(); } },
  ];

  const filtered = query.trim()
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  const groups = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  const flat = Object.values(groups).flat();

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % flat.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + flat.length) % flat.length);
    } else if (e.key === "Enter" && flat[selectedIndex]) {
      flat[selectedIndex].action();
    }
  };

  useEffect(() => { setSelectedIndex(0); }, [query]);

  useEffect(() => {
    listRef.current?.querySelector("[data-selected='true']")?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const groupLabels = {
    nav: t.cmd.groups.nav,
    links: t.cmd.groups.links,
    settings: t.cmd.groups.settings,
  };

  if (!isOpen) return null;

  let idx = 0;

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={close}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className={styles.palette}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.inputWrapper}>
          <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M14.5 14.5L18 18" />
          </svg>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder={t.cmd.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t.cmd.placeholder}
            autoComplete="off"
            spellCheck="false"
          />
          <kbd className={styles.escHint}>esc</kbd>
        </div>

        <div className={styles.list} ref={listRef} role="listbox">
          {flat.length === 0 ? (
            <p className={styles.noResults}>{t.cmd.noResults}</p>
          ) : (
            Object.entries(groups).map(([groupKey, cmds]) => (
              <div key={groupKey} className={styles.group}>
                <span className={styles.groupLabel}>{groupLabels[groupKey]}</span>
                {cmds.map((cmd) => {
                  const itemIdx = idx++;
                  const isSelected = itemIdx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      className={`${styles.item} ${isSelected ? styles.itemSelected : ""}`}
                      data-selected={isSelected}
                      onMouseEnter={() => setSelectedIndex(itemIdx)}
                      onClick={() => cmd.action()}
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={-1}
                    >
                      <cmd.icon className={styles.itemIcon} aria-hidden="true" />
                      <span>{cmd.label}</span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CommandPalette;
