import type { CSSProperties } from "react";

/**
 * A grid of the whole field. Survivors stay lit; eliminated cells dim in
 * sequence once the surrounding `.rv` element is revealed (see globals.css).
 */
export function Cells({ total, alive, className = "" }: { total: number; alive: number; className?: string }) {
  const step = total / alive;
  const outCount = Math.max(total - alive, 1);
  let k = 0;
  return (
    <div className={`cells ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: total }, (_, i) => {
        if (i % step === 0) return <i key={i} />;
        const delay = 500 + (k++) * (900 / outCount);
        return <i key={i} className="out" style={{ transitionDelay: `${Math.round(delay)}ms` }} />;
      })}
    </div>
  );
}

export type Stage = { week: string; round: string; alive: number; unit: string; final?: boolean };

/** Week-by-week bracket tracker: one card per stage with the field grid and the head count. */
export function Bracket({ stages, total, label }: { stages: Stage[]; total: number; label: string }) {
  return (
    <div className="bracket" data-stagger style={{ "--n": stages.length } as CSSProperties} role="img" aria-label={label}>
      {stages.map((s) => (
        <div key={s.week} className={`stage${s.final ? " final" : ""}`}>
          <span className="wk">{s.week}</span>
          <span className="rd">{s.round}</span>
          <Cells total={total} alive={s.alive} />
          <div className="count"><b>{s.alive}</b><span>{s.unit}</span></div>
        </div>
      ))}
    </div>
  );
}
