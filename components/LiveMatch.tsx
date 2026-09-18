"use client";

import { useEffect, useRef, useState } from "react";

type Sim = { eq: number[]; peak: number; dd: number; drift: number; vol: number };
type View = { a: string; b: string; ea: number; eb: number; ra: number; rb: number; da: number; db: number; done: boolean };

const N = 48; // ticks per round
const mk = (drift: number, vol: number): Sim => ({ eq: [0], peak: 0, dd: 0, drift, vol });
const last = (s: Sim) => s.eq[s.eq.length - 1];
const score = (s: Sim) => last(s) - 0.5 * s.dd;

function step(s: Sim) {
  const v = last(s) + s.drift + (Math.random() - 0.5) * 2 * s.vol;
  s.eq.push(v);
  s.peak = Math.max(s.peak, v);
  s.dd = Math.max(s.dd, s.peak - v);
}

function snapshot(A: Sim, B: Sim, t: number): View {
  const all = A.eq.concat(B.eq);
  const lo = Math.min(...all, -2), hi = Math.max(...all, 6), k = 90 / (hi - lo);
  const pts = (s: Sim) => s.eq.map((v, i) => `${((i * 300) / N).toFixed(1)},${(95 - (v - lo) * k).toFixed(1)}`).join(" ");
  return { a: pts(A), b: pts(B), ea: score(A), eb: score(B), ra: last(A), rb: last(B), da: A.dd, db: B.dd, done: t >= N };
}

const START: View = { a: "", b: "", ea: 0, eb: 0, ra: 0, rb: 0, da: 0, db: 0, done: false };

/** A demonstration matchup driven by simulated data. It is labelled as a demo in the UI. */
export function LiveMatch() {
  const [v, setV] = useState<View>(START);
  const sim = useRef<{ A: Sim; B: Sim; t: number } | null>(null);

  useEffect(() => {
    const fresh = () => ({ A: mk(0.34, 0.75), B: mk(0.46, 1.9), t: 0 });
    sim.current = fresh();
    const s = () => sim.current!;

    if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
      for (let i = 0; i < N; i++) { step(s().A); step(s().B); }
      s().t = N;
      setV(snapshot(s().A, s().B, N));
      return;
    }
    const id = window.setInterval(() => {
      const c = s();
      if (c.t >= N + 6) sim.current = fresh();
      else if (c.t < N) { step(c.A); step(c.B); }
      s().t++;
      setV(snapshot(s().A, s().B, s().t));
    }, 650);
    return () => clearInterval(id);
  }, []);

  const leader = v.ea >= v.eb ? "Team Alpha" : "Team Bravo";
  const mx = Math.max(v.ea, v.eb, 1);
  const bar = (e: number) => ({ width: `${Math.max((e / mx) * 100, 2)}%` });

  return (
    <div className="live beam rv from-right" aria-label="Demonstration of a live matchup using simulated data">
      <div className="live-h"><b>Live matchup</b><span>Demo · simulated data</span></div>
      <div className="live-b">
        <svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
          <g className="grid"><line x1="0" y1="25" x2="300" y2="25" /><line x1="0" y1="50" x2="300" y2="50" /><line x1="0" y1="75" x2="300" y2="75" /></g>
          <polyline className="lb" points={v.b} />
          <polyline className="la" points={v.a} />
        </svg>
        <div className="teams">
          <div className="team a">
            <span className="nm"><i />Team Alpha</span><span className="sc">{v.ea.toFixed(1)}</span>
            <span className="meta"><span>Return <b>{v.ra.toFixed(1)}%</b></span><span>Max DD <b>{v.da.toFixed(1)}%</b></span></span>
            <span className="bar"><u style={bar(v.ea)} /></span>
          </div>
          <div className="team b">
            <span className="nm"><i />Team Bravo</span><span className="sc">{v.eb.toFixed(1)}</span>
            <span className="meta"><span>Return <b>{v.rb.toFixed(1)}%</b></span><span>Max DD <b>{v.db.toFixed(1)}%</b></span></span>
            <span className="bar"><u style={bar(v.eb)} /></span>
          </div>
        </div>
      </div>
      <div className="live-f">
        <span>{v.a === "" ? "Round starting" : `${leader} ${v.done ? "advances" : "leads on ETPS"}`}</span>
        <span>ETPS = Return % − (0.5 × Max DD %)</span>
      </div>
    </div>
  );
}
