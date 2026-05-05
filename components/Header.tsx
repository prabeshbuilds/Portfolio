"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────
interface NavItem {
  label: string;
  href: string;
  key: string;
}

// ── Styles ────────────────────────────────────────────────────
const headerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Sans:wght@300;400&display=swap');

  .header-wrap {
    font-family: 'DM Sans', sans-serif;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid #f3f4f6;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 50;
    transition: box-shadow 0.2s;
  }
  .header-wrap.scrolled {
    box-shadow: 0 1px 16px rgba(0, 0, 0, 0.06);
  }
  .header-inner {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.5px;
    text-decoration: none;
  }
  .header-logo span { color: #1D9E75; }

  .header-nav {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .header-link {
    font-size: 14px;
    color: #6b7280;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 6px;
    transition: background 0.15s, color 0.15s;
  }
  .header-link:hover { background: #f9fafb; color: #111827; }
  .header-link.active { color: #1D9E75; background: #E1F5EE; }

  .header-cta {
    font-size: 13px;
    color: #ffffff;
    background: #1D9E75;
    text-decoration: none;
    padding: 7px 18px;
    border-radius: 8px;
    margin-left: 10px;
    transition: background 0.15s, transform 0.1s;
  }
  .header-cta:hover { background: #0F6E56; }
  .header-cta:active { transform: scale(0.97); }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    background: none;
    transition: background 0.15s;
  }
  .hamburger:hover { background: #f9fafb; }
  .hamburger .bar {
    width: 20px;
    height: 1.5px;
    background: #111827;
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s;
    transform-origin: center;
  }
  .hamburger.open .bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger.open .bar:nth-child(2) { opacity: 0; }
  .hamburger.open .bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  .mobile-menu {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease, padding 0.3s ease;
    border-top: 1px solid transparent;
  }
  .mobile-menu.open {
    max-height: 300px;
    border-top-color: #f3f4f6;
    padding-bottom: 1rem;
  }
  .mobile-menu-inner {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0.5rem 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .mobile-link {
    font-size: 14px;
    color: #6b7280;
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 8px;
    transition: background 0.15s, color 0.15s;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mobile-link:hover { background: #f9fafb; color: #111827; }
  .mobile-link .arrow { font-size: 12px; opacity: 0.4; }
  .mobile-divider { height: 1px; background: #f3f4f6; margin: 6px 0; }
  .mobile-cta {
    font-size: 14px;
    color: #1D9E75;
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 8px;
    font-weight: 500;
    transition: background 0.15s;
  }
  .mobile-cta:hover { background: #E1F5EE; }

  @media (max-width: 768px) {
    .header-nav { display: none; }
    .hamburger { display: flex; }
  }
`;

// ── Logo ──────────────────────────────────────────────────────
function HeaderLogo() {
  return (
    <Link href="/" className="header-logo">
      Prabesh<span>.dev</span>
    </Link>
  );
}

// ── Desktop nav link ──────────────────────────────────────────
function NavLink({ href, label, isActive, onClick }: {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`header-link${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

// ── Hire me CTA ───────────────────────────────────────────────
function HireMeButton({ href, onClick, className = "header-cta" }: {
  href: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      Hire me →
    </Link>
  );
}

// ── Hamburger toggle ──────────────────────────────────────────
function Hamburger({ isOpen, onToggle }: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className={`hamburger${isOpen ? " open" : ""}`}
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  );
}

// ── Mobile drawer ─────────────────────────────────────────────
function MobileMenu({ isOpen, navItems, hireMeHref, onLinkClick }: {
  isOpen: boolean;
  navItems: NavItem[];
  hireMeHref: string;
  onLinkClick: (key: string) => void;
}) {
  return (
    <div className={`mobile-menu${isOpen ? " open" : ""}`}>
      <div className="mobile-menu-inner">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="mobile-link"
            onClick={() => onLinkClick(item.key)}
          >
            {item.label}
            <span className="arrow">↗</span>
          </Link>
        ))}
        <div className="mobile-divider" />
        <HireMeButton
          href={hireMeHref}
          className="mobile-cta"
          onClick={() => onLinkClick("")}
        />
      </div>
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const navItems: NavItem[] = [
    { label: "Home",     href: isHomePage ? "#home"               : "/",                key: "home" },
    { label: "Projects", href: isHomePage ? "/My_works/Project"  : "/My_works/Project", key: "/My_works/Project" },
    { label: "Contact",  href: isHomePage ? "/My_works/Contact"  : "/My_works/Contact", key: "/My_works/Contact" },
    { label: "About",    href: isHomePage ? "/My_works/About"    : "/My_works/About",    key: "/My_works/About" },
    { label: "Community", href: isHomePage ? "/My_works/Community" : "/My_works/Community", key: "/My_works/Community" },

  ];

  const hireMeHref = isHomePage ? "#contact" : "/#contact";

  const handleLinkClick = (key: string) => {
    setActiveKey(key);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{headerStyles}</style>
      <header className={`header-wrap${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <HeaderLogo />

          <nav className="header-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                label={item.label}
                isActive={activeKey === item.key}
                onClick={() => handleLinkClick(item.key)}
              />
            ))}
            <HireMeButton href={hireMeHref} />
          </nav>

          <Hamburger isOpen={menuOpen} onToggle={() => setMenuOpen((p) => !p)} />
        </div>

        <MobileMenu
          isOpen={menuOpen}
          navItems={navItems}
          hireMeHref={hireMeHref}
          onLinkClick={handleLinkClick}
        />
      </header>
    </>
  );
}