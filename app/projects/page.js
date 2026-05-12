import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export const metadata = {
  title: "Projects | Ayesha Portfolio"
}

export default function ProjectsPage() {
  return (
    <section className="page">
      <h1 className="page-title">Projects</h1>
      <p className="page-text">
        Here are some projects from my React and Next.js learning journey.
      </p>

      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
   </section>

  )
}

