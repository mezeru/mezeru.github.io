"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, person } from "@/content/portfolio";

export function Navigation() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        const current = [...navigation].reverse().find(({ id }) => {
          const element = document.getElementById(id);
          return element && element.getBoundingClientRect().top <= window.innerHeight * 0.36;
        });
        setActive(current?.id ?? "");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        const first = menuButton.current;
        const last = links?.[links.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
    >
      <nav className="nav-shell container" aria-label="Main navigation">
        <a
          href="#home"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label="Yash Chaudhari, home"
        >
          <span className="monogram">
            y<span>c</span>
            <i />
          </span>
          <span>
            Yash Chaudhari<span className="wordmark-period">.</span>
          </span>
        </a>
        <div className="desktop-links">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-resume" href={person.resume} download>
          Résumé <ArrowDownToLine size={14} />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div ref={panel} id="mobile-navigation" className="mobile-navigation" hidden={!open}>
          <span className="eyebrow">Explore</span>
          {navigation.map(({ id, label }, index) => (
            <a key={id} href={`#${id}`} onClick={close}>
              <span className="mono">0{index + 1}</span>
              {label}
              <ArrowUpRight size={24} />
            </a>
          ))}
          <a className="mobile-resume" href={person.resume} download onClick={close}>
            Download résumé <ArrowDownToLine size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
