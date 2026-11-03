"use client";

import { useEffect, useRef } from "react";
import { animate, inView } from "motion";

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Content stays visible in SSR and without JavaScript. Animate only once it enters view.
    return inView(
      element,
      () => {
        const animation = animate(
          element,
          { opacity: [0.65, 1], transform: ["translateY(18px)", "translateY(0px)"] },
          { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        );
        return () => animation.stop();
      },
      { margin: "0px 0px -40px 0px" },
    );
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
