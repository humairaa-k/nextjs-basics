import Link from "next/link";

export default function HomePage() {
  return (
    <section className="page hero">
      <div>
        <span className="badge">Frontend React + Next.js Student</span>
        <h1 className="page-title">I build clean and responsive web interfaces.</h1>
        <p className="page-text">
          Welcome to my portfolio. This website was built with Next.js App Router,
          reusable components, shared layouts, and modern responsive CSS.
        </p>

        <div className="actions">
          <Link className="button" href="/projects">
            View Projects
          </Link>
          <Link className="button secondary" href="/contact">
            Contact Me
          </Link>
        </div>
      </div>

      <aside className="hero-card">
        <div className="hero-avatar">A</div>
        <h2>About this website</h2>
        <p>
          This mini project demonstrates file-based routing, layouts, navigation,
          reusable UI components, and basic responsive design.
        </p>
        <ul className="hero-list">
          <li>Built with Next.js App Router</li>
          <li>Four main website pages</li>
          <li>Reusable card and layout components</li>
        </ul>
      </aside>
    </section>
  );
}
