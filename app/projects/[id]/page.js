import { notFound } from "next/navigation"
import { projects } from "@/data/projects"

export default async function ProjectDetailsPage({ params }) {
 const { id } = await params;
 const project = projects.find((item) => item.id === id);

 if(!project){
    notFound();
 }
 
 return(
    <section className="page">
      <h1 className="page-title">{project.title}</h1>
      <p className="page-text">{project.description}</p>
    </section>
 );
}