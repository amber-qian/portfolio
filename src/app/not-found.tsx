
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 — PAGE NOT FOUND</p>

      <h1>Looks like this page doesn't exist.</h1>

      <p>
        The page you're looking for may have moved
        or is no longer available.
      </p>

      <Link href="/" className="button button-primary">
        Back to Homepage →
      </Link>
    </main>
  );
}
