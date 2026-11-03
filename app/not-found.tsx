import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="error-page container">
      <p className="eyebrow">404 / A missing connection</p>
      <h1>
        This page
        <br />
        <span>isn’t here.</span>
      </h1>
      <p>Let’s get you back to the work.</p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={17} /> Back to portfolio
      </Link>
    </main>
  );
}
