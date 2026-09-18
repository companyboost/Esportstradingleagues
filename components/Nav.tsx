"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/league", label: "League" },
  { href: "/league-payouts", label: "League Payouts" },
  { href: "/pvp", label: "PvP" },
  { href: "/pvp-payouts", label: "PvP Payouts" },
  { href: "/about", label: "About Us" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false); // close the mobile menu when a link is chosen

  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/" aria-label="Esports Trading home">
          <span className="logo-img" role="img" aria-label="Esports Trading" />
        </Link>
        <nav className={`menu${open ? " open" : ""}`} id="menu" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className={pathname === l.href ? "on" : undefined} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="btn primary sm cta-nav" href="#join" onClick={close}>Join the arena</a>
        <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
