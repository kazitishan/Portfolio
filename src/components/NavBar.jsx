"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import info from "@/data/info.json";

const { profile, links, pages } = info;

const linkClass = "flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition font-bold";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Close the menu when clicking/tapping outside of it
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, [menuOpen]);

  const socials = [
    { name: "LinkedIn", href: links.linkedin, icon: "/icons/linkedin.svg" },
    { name: "GitHub", href: links.github, icon: "/icons/github.svg" },
    { name: "Email", href: `mailto:${profile.email}`, icon: "/icons/email.svg" }
  ];

    return (
      <header ref={headerRef} className="sticky top-0 z-50 backdrop-blur-sm">
        <nav className="p-4 flex justify-between items-center">
          { /* Pages (wide screens) */ }
          <div className="hidden sm:flex gap-1 items-center">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className={linkClass}>
                {page.name}
              </Link>
            ))}
          </div>

          { /* Hamburger button (narrow screens) */ }
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="sm:hidden p-2 rounded hover:bg-white/10 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <img src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="" className="w-6 h-6" />
          </button>

          { /* Socials */ }
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </nav>

        { /* Mobile menu */ }
        {menuOpen && (
          <div id="mobile-menu" className="sm:hidden absolute top-full left-4 -mt-2 p-2 flex flex-col gap-1 text-left bg-card rounded-lg shadow-lg min-w-36">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} onClick={() => setMenuOpen(false)} className={linkClass}>
                {page.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    );
}

export default NavBar;
