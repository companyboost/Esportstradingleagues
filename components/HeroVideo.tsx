"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted looping background video for the home hero. The still image underneath
 * (set in CSS) shows instantly and remains the fallback; the video is skipped
 * entirely for visitors who prefer reduced motion.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- media query is only known in the browser
    setEnabled(!matchMedia("(prefers-reduced-motion:reduce)").matches);
  }, []);

  useEffect(() => {
    if (enabled) ref.current?.play().catch(() => {});
  }, [enabled]);

  return (
    <div className="hero-bg" role="img" aria-label="Traders competing on a circular stage in a packed arena, with market charts and a tournament bracket on the screens above">
      <i />
      {enabled && (
        <video
          ref={ref}
          className={playing ? "on" : undefined}
          src="/media/hero.mp4"
          muted loop playsInline autoPlay preload="auto" aria-hidden="true" tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onTimeUpdate={(e) => {
            // soften the loop point: dip to the still image for a moment
            const v = e.currentTarget;
            if (!v.duration) return;
            v.style.opacity = v.currentTime < 0.35 || v.duration - v.currentTime < 0.45 ? "0" : "";
          }}
        />
      )}
    </div>
  );
}
