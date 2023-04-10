import Image from "next/image";
import {FaEye} from "react-icons/fa";
import Link from "next/link";
import {Project} from "@/interfaces/ProjectInterface";

const Projects = ({ projects }: { projects: Array<Project>}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0">
      <h2 className="mb-6">My projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project: Project) =>
          <Link href={`/projects/${project.slug}`} className="group" key={project.slug}>
            <Image className="rounded-lg" src={project.image} width="500" height="500" alt={"Project placeholder image"} />
            <h3 className="mt-4">{project.title}</h3>
            <p className="mt-1">{project.description}</p>
            <div className="flex flex-row gap-4 items-center mt-4">
              <div className="p-2 bg-stone-200 rounded-full transition duration-300 group-hover:bg-secondary group-hover:text-white group-focus:bg-secondary group-focus:text-white">
                <FaEye />
              </div>
              <p className="little-text">View project</p>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}

export { Projects };
