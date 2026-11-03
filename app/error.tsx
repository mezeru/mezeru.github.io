"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-page container">
      <p className="eyebrow">An unexpected interruption</p>
      <h1>
        Let’s try
        <br />
        <span>that again.</span>
      </h1>
      <p>The page couldn’t finish loading.</p>
      <button onClick={reset} className="button button-primary">
        Try again
      </button>
      <Link href="/" className="text-link">
        Return home
      </Link>
    </main>
  );
}
