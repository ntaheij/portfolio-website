import {Hero} from "@/components/Hero";
import {Metadata} from "next";
import {getAllProjects} from "@/services/project";
import {Projects} from "@/components/Projects";
import {Project} from "@/interfaces/ProjectInterface";

export const dynamic = 'error';

export const metadata: Metadata = {
  title: 'My projects - NTaheij.dev',
  description: 'A short overview of all the projects I worked on, for myself and for others.',
}

const getProjects = async (): Promise<Array<Project>> => {
  return await getAllProjects();
}

export default async function Portfolio() {
  const projects: Array<Project> = await getProjects();

  return (
    <>
      <Hero title={"My projects"} />
      <div className="py-16">
        <Projects projects={projects} />
      </div>
    </>
  )
}
