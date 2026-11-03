"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type BackgroundMotion = { x: number; y: number; progress: number };

export function SiteBackground() {
  const root = useRef<HTMLDivElement>(null);
  const motion = useRef<BackgroundMotion>({ x: 0, y: 0, progress: 0 });
  const [allowed, setAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const moving = allowed && !paused;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowed(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = root.current;
    if (!element || !moving) return;
    let frame = 0;
    let previous = 0;
    const target = { x: 0, y: 0, scroll: window.scrollY };
    const current = { ...target };

    const render = (time: number) => {
      const delta = previous ? Math.min((time - previous) / 1000, 0.05) : 1 / 60;
      previous = time;
      const damping = 1 - Math.exp(-5 * delta);
      current.x += (target.x - current.x) * damping;
      current.y += (target.y - current.y) * damping;
      current.scroll += (target.scroll - current.scroll) * damping;
      const strength = window.innerWidth < 768 ? 0.5 : 1;
      element.style.setProperty("--parallax-x", `${current.x * 26 * strength}px`);
      element.style.setProperty("--parallax-y", `${current.y * 20 * strength}px`);
      // The grid repeats every 88px, so wrapping keeps an unlimited scroll range seamless.
      element.style.setProperty("--grid-drift", `${-(current.scroll * 0.085 * strength) % 88}px`);
      element.style.setProperty("--depth-drift", `${motion.current.progress * -100 * strength}px`);
      const pending =
        Math.abs(target.x - current.x) +
        Math.abs(target.y - current.y) +
        Math.abs(target.scroll - current.scroll);
      if (pending > 0.05 && document.visibilityState === "visible")
        frame = requestAnimationFrame(render);
      else {
        frame = 0;
        previous = 0;
      }
    };
    const schedule = () => {
      if (!frame && document.visibilityState === "visible") frame = requestAnimationFrame(render);
    };
    const updateScroll = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      motion.current.progress = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      target.scroll = window.scrollY;
      schedule();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      motion.current.x = target.x = event.clientX / window.innerWidth - 0.5;
      motion.current.y = target.y = event.clientY / window.innerHeight - 0.5;
      schedule();
    };
    const resetPointer = () => {
      motion.current.x = target.x = 0;
      motion.current.y = target.y = 0;
      schedule();
    };
    const resize = new ResizeObserver(updateScroll);
    resize.observe(document.body);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetPointer);
    document.addEventListener("visibilitychange", updateScroll);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", updateScroll);
    };
  }, [moving]);

  return (
    <>
      <div ref={root} className="site-background" aria-hidden="true">
        <div className="parallax-grid" />
      </div>
      {allowed && (
        <button
          className="motion-toggle"
          aria-label={paused ? "Resume background animation" : "Pause background animation"}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "Resume motion" : "Pause motion"}</span>
        </button>
      )}
    </>
  );
}
