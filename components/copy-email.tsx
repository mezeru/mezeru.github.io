"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { person } from "@/content/portfolio";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 3500);
  };
  return (
    <div className="copy-wrap">
      <button className="copy-email" onClick={copy} aria-label="Copy email address">
        {status === "copied" ? <Check size={17} /> : <Copy size={17} />}
      </button>
      <span role="status" className="copy-status">
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? "Use the email link to get in touch"
            : ""}
      </span>
    </div>
  );
}
