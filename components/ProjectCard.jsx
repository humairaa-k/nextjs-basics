import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <Link href={`/projects/${project.id}`}>
        <h2>{project.title}</h2>
      </Link>
      <p>{project.description}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
           <li className="tag" key={tag}>
             {tag}
           </li>
        ))}
      </ul>
    </article>
  );
}
