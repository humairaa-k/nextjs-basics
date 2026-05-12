import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <h1 className="page-title">404 - Page not found</h1>
        <p className="page-text">
          The page you are looking for does not exist.
        </p>
        <Link className="button" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}