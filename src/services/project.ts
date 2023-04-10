import fs from "fs";
import matter from "gray-matter";
import {Project, Params, SingleProject} from "@/interfaces/ProjectInterface";

const getAllProjects = async (): Promise<Array<Project>> => {
  const projects = fs.readdirSync("./projects");

  const allProjects: Array<Project> = projects.map((slug: string) => {
    const source = fs.readFileSync('./projects/' + slug, 'utf-8');

    const { data } = matter(source);

    const time = fs.statSync('./projects/' + slug).mtime.getTime();

    const obj: Project = {
      title: data.title,
      slug: data.slug,
      image: data.image,
      description: data.description,
      time: time
    }

    return obj;
  }).sort((a: Project, b: Project) => b.time! - a.time!);

  return allProjects;
}

const getAmountOfProjects = async (amount: number): Promise<Array<Project>> => {
  const projects = await getAllProjects();

  return projects.slice(0, amount);
}

const getAllSlugs = (): Array<Params> => {
  const projects = fs.readdirSync('./projects');

  return projects.map((slug: string) => {
    const source = fs.readFileSync('./projects/' + slug, 'utf-8');

    const { data } = matter(source);

    return { slug: data.slug };
  });
}

const getProjectBySlug = (params: Params): SingleProject => {
  const source = fs.readFileSync('./projects/' + params.slug + '.mdx', 'utf-8');

  const { data, content } = matter(source);

  const obj: Project = {
    title: data.title,
    slug: data.slug,
    image: data.image,
    description: data.description,
  }

  return {
    data: obj, content
  }
}

export { getAllProjects, getAmountOfProjects, getAllSlugs, getProjectBySlug };
