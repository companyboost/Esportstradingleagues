"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GLOW = ".arena,.prize:not(.first),.path,.slot,.formula-card,.live,.stat,.stage:not(.final),.entry,.bars,.season .ev:not(.final)";

function countUp(el: HTMLElement, still: boolean) {
  const to = Number(el.dataset.count);
  if (still) { el.textContent = String(to); return; }
  const t0 = performance.now(), d = 1100;
  const tick = (t: number) => {
    const p = Math.min((t - t0) / d, 1);
    el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Page-wide presentation effects that work on plain class names, so server
 * components stay free of client code: reveal on scroll (with stagger),
 * count-up numbers, cursor spotlight, magnetic buttons, card tilt, looping words.
 * Re-runs on every route change.
 */
export function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
    const ac = new AbortController();
    const on = { signal: ac.signal };
    const timers: number[] = [];

    // cards in a grid rise in one after another
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((g) => {
      const step = g.children.length > 8 ? 35 : 90;
      Array.from(g.children).forEach((c, i) => {
        c.classList.add("rv");
        (c as HTMLElement).style.setProperty("--d", `${i * step}ms`);
      });
    });

    // reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        e.target.querySelectorAll<HTMLElement>("[data-count]").forEach((n) => countUp(n, still));
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));

    // spotlight glow follows the cursor
    document.querySelectorAll<HTMLElement>(GLOW).forEach((c) => {
      c.classList.add("glow");
      if (!fine) return;
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", `${e.clientX - r.left}px`);
        c.style.setProperty("--my", `${e.clientY - r.top}px`);
      }, on);
    });

    if (fine && !still) {
      // magnetic primary buttons
      document.querySelectorAll<HTMLElement>(".btn.primary").forEach((b) => {
        b.addEventListener("pointermove", (e) => {
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px,${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px)`;
        }, on);
        b.addEventListener("pointerleave", () => { b.style.transform = ""; }, on);
      });
      // slight 3D tilt on the arena cards
      document.querySelectorAll<HTMLElement>(".arena").forEach((c) => {
        c.addEventListener("pointermove", (e) => {
          c.classList.add("tilt");
          const r = c.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          c.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-3px)`;
        }, on);
        c.addEventListener("pointerleave", () => { c.style.transform = ""; }, on);
      });
    }

    // looping words
    if (!still) {
      document.querySelectorAll<HTMLElement>(".loop").forEach((el) => {
        const words = (el.dataset.words ?? "").split(",");
        let i = 0;
        timers.push(window.setInterval(() => {
          el.classList.add("swap");
          window.setTimeout(() => {
            i = (i + 1) % words.length;
            el.textContent = words[i];
            el.classList.remove("swap");
          }, 360);
        }, 2200));
      });
    }

    return () => { io.disconnect(); ac.abort(); timers.forEach(clearInterval); };
  }, [pathname]);

  return null;
}
