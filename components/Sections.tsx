import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Icon";

/** Eyebrow + large slash headline + optional intro paragraph. */
export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="head rv from-left">
      <div className="title">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}<span className="slash">/</span></h2>
      </div>
      {children && <p className="lede">{children}</p>}
    </div>
  );
}

export function Formula({ label = "The formula", children }: { label?: string; children: ReactNode }) {
  return (
    <div className="formula-card rv from-left">
      <p className="eyebrow">{label}</p>
      <p className="eq"><span>ETPS = Return % −</span> <em><span>(0.5 × Max Drawdown %)</span></em></p>
      {children}
    </div>
  );
}

export function EntryFee({ unit, children }: { unit: string; children: ReactNode }) {
  return (
    <div className="entry rv">
      <div className="fee">$5,000<small>Entry fee per {unit}</small></div>
      <p>{children}</p>
    </div>
  );
}

export type Prize = { place: string; amount: number };
const usd = (n: number) => "$" + n.toLocaleString("en-US");

/** Share-of-pool bar above the prize cards; the first card is the highlighted winner. */
export function PrizePool({ title, note, prizes }: { title: string; note: string; prizes: Prize[] }) {
  const total = prizes.reduce((s, p) => s + p.amount, 0);
  return (
    <div className="blk rv">
      <h3>{title} <span>{note}</span></h3>
      <div className="share" role="img" aria-label="Share of the prize pool by place">
        {prizes.map((p) => {
          const pct = (p.amount * 100) / total;
          return <u key={p.place} style={{ flex: `0 0 ${pct.toFixed(2)}%` }}>{Math.round(pct)}%</u>;
        })}
      </div>
      <div className="pool" data-stagger>
        {prizes.map((p, i) => (
          <div key={p.place} className={`prize${i === 0 ? " first" : ""}`}>
            <span className="rk">{p.place}</span>
            <span className="amt">{usd(p.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Podium() {
  const cols = [
    { cls: "p2", rank: "2nd place", amt: "$20,000", note: "Runner-up", n: 2 },
    { cls: "p1", rank: "1st place", amt: "$40,000", note: "Monthly champion · qualifies for Worlds", n: 1 },
    { cls: "p3", rank: "3rd place", amt: "$12,000", note: "Third", n: 3 },
  ];
  return (
    <div className="blk rv">
      <h3>Monthly awards <span>Paid every month</span></h3>
      <div className="pod" data-stagger>
        {cols.map((c) => (
          <div key={c.cls} className={`col ${c.cls}`}>
            <div className="top">
              <span className="rk">{c.rank}</span>
              <div className="amt">{c.amt}</div>
              <div className="pl">{c.note}</div>
            </div>
            <div className="blk2"><b>{c.n}</b></div>
          </div>
        ))}
      </div>
      <div className="pod-base" />
    </div>
  );
}

export function NextStrip({ text, href, label, primary = false }: { text: string; href: string; label: string; primary?: boolean }) {
  return (
    <div className="next rv">
      <p>{text}</p>
      <div>
        <Link className={`btn ${primary ? "primary" : "ghost"}`} href={href}>
          {label} {primary && <Arrow />}
        </Link>
      </div>
    </div>
  );
}
