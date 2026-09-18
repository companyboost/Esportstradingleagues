"use client";

import { useState } from "react";

type Side = { ret: number; dd: number };

// The worked example from the rules: Alpha 15% / 4% beats Bravo 20% / 16%.
const EXAMPLE: [Side, Side] = [{ ret: 15, dd: 4 }, { ret: 20, dd: 16 }];

const fmt = (n: number) => (Math.round(n * 10) / 10).toString().replace(/\.0$/, "");
const etps = (s: Side) => s.ret - 0.5 * s.dd;

/** Illustrative equity path that ends at `ret` and contains one `dd` sized dip. */
function curve({ ret, dd }: Side) {
  const peak = ret * 0.62 + dd * 0.35;
  const pts: [number, number][] = [[0, 0], [0.16, peak * 0.45], [0.3, peak * 0.8], [0.42, peak], [0.5, peak - dd * 0.55], [0.58, peak - dd], [0.7, peak - dd * 0.45], [0.84, ret * 0.9], [1, ret]];
  const ys = pts.map((p) => p[1]);
  const lo = Math.min(...ys, 0), hi = Math.max(...ys, 1), k = 50 / (hi - lo || 1);
  return "M" + pts.map((p) => `${(p[0] * 200).toFixed(1)},${(55 - (p[1] - lo) * k).toFixed(1)}`).join(" L");
}

export function EtpsCalculator({ names }: { names: [string, string] }) {
  const [sides, setSides] = useState<[Side, Side]>(EXAMPLE);
  const scores = sides.map(etps);
  const tie = scores[0] === scores[1];
  const w = scores[0] >= scores[1] ? 0 : 1, l = 1 - w;

  const set = (i: number, key: keyof Side, value: number) =>
    setSides((prev) => prev.map((s, j) => (j === i ? { ...s, [key]: value } : s)) as [Side, Side]);

  const verdict = tie ? (
    <><b>Tied on ETPS.</b> Both sides score {fmt(scores[0])}.</>
  ) : (
    <>
      <b>Winner: {names[w]}.</b>{" "}
      {sides[l].ret > sides[w].ret
        ? `${names[l]} earned a higher return, but ${names[w]} showed superior risk-adjusted performance.`
        : `ETPS ${fmt(scores[w])} beats ${fmt(scores[l])}.`}
    </>
  );

  const side = (i: number) => {
    const s = sides[i], win = !tie && i === w;
    return (
      <div className={`side${win ? " winner" : ""}`}>
        <div className="who">{names[i]} <span className="pill">{tie ? "Tied" : win ? "Advances" : "Eliminated"}</span></div>
        <label className="ctl">
          <span>Return <b>{s.ret}%</b></span>
          <input type="range" min={0} max={40} step={1} value={s.ret} onChange={(e) => set(i, "ret", +e.target.value)} aria-label={`${names[i]} return percent`} />
        </label>
        <label className="ctl">
          <span>Max Drawdown <b>{s.dd}%</b></span>
          <input type="range" min={0} max={40} step={1} value={s.dd} onChange={(e) => set(i, "dd", +e.target.value)} aria-label={`${names[i]} max drawdown percent`} />
        </label>
        <dl><div><dt>Deduction (0.5 × DD)</dt><dd>−{fmt(0.5 * s.dd)}</dd></div></dl>
        <p className="spark-l">Equity curve · illustrative</p>
        <svg className="spark" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true"><path pathLength={1} d={curve(s)} /></svg>
        <div className="score"><small>ETPS</small><b>{fmt(scores[i])}</b></div>
      </div>
    );
  };

  return (
    <div className="vs rv from-right">
      {side(0)}
      <div className="mid">VS</div>
      {side(1)}
      <div className="reset">
        <span aria-live="polite">{verdict}</span>
        <button type="button" onClick={() => setSides(EXAMPLE)}>Reset to the example</button>
      </div>
    </div>
  );
}
