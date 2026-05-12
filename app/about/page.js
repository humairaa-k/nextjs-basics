
export const metadata = {
  title: "About | Ayesha Portfolio"
}

export default function AboutPage() {
  return (
    <section className="page">
      <h1 className="page-title">About Me</h1>
      <p className="page-text">
        I am a frontend development student learning how to build professional
        web applications with React and Next.js. I enjoy turning ideas into
        simple, clean, and user-friendly interfaces.
      </p>

       <ul className="info-list">
        <li>
          <strong>Current focus:</strong> Next.js routing, layouts, and reusable
          components.
        </li>
        <li>
          <strong>Frontend skills:</strong> React, state management, forms,
          responsive design, and UI components.
        </li>
        <li>
          <strong>Goal:</strong> Build a strong portfolio and prepare for junior
          frontend developer interviews.
        </li>
      </ul>
    </section>
  )
}