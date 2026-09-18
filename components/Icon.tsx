export type IconName =
  | "team" | "user" | "ticket" | "trophy" | "chart" | "cal"
  | "bolt" | "build" | "star" | "coins" | "brief" | "scout";

/** Draws one icon from the SVG sprite rendered once in the root layout. */
export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={`ic ${className}`.trim()} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M2 8h11M9 3l5 5-5 5" />
    </svg>
  );
}

/** Hidden sprite holding every icon symbol. Render once, near the top of <body>. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="i-team" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17.5" cy="9" r="2.4" /><path d="M17 14.2a5 5 0 0 1 4.5 5" /></symbol>
        <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /></symbol>
        <symbol id="i-ticket" viewBox="0 0 24 24"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" /><path d="M14 6.5v11" strokeDasharray="2 2.5" /></symbol>
        <symbol id="i-trophy" viewBox="0 0 24 24"><path d="M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5M12 14v4M8.5 20h7" /></symbol>
        <symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 17l5-5 4 3 8-9" /><path d="M15 6h5v5" /></symbol>
        <symbol id="i-cal" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></symbol>
        <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 3L5 14h6l-1 7 8-11h-6z" /></symbol>
        <symbol id="i-build" viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-4 7 4v13M9.5 21v-5h5v5" /></symbol>
        <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" /></symbol>
        <symbol id="i-coins" viewBox="0 0 24 24"><circle cx="9" cy="9" r="5.5" /><path d="M14.5 9.6a5.5 5.5 0 1 1-5 5" /></symbol>
        <symbol id="i-brief" viewBox="0 0 24 24"><rect x="3.5" y="7.5" width="17" height="12" rx="2" /><path d="M9 7.5V5.5h6v2M3.5 13h17" /></symbol>
        <symbol id="i-scout" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5.5 5.5" /><circle cx="10.5" cy="9" r="1.8" /><path d="M7.3 13.6a3.3 3.3 0 0 1 6.4 0" /></symbol>
      </defs>
    </svg>
  );
}
