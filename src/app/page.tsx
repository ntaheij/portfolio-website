import {Hero} from "@/components/Hero";
import {Button} from "@/components/Button";
import {Metadata} from "next";
import Image from "next/image";
import placeholder from "../../public/placeholder.webp";
import {Projects} from "@/components/Projects";
import {getPosts} from "@/services/blog";
import {Post} from "@/interfaces/BlogInterface";
import {Project} from "@/interfaces/ProjectInterface";
import {getAmountOfProjects} from "@/services/project";

export const metadata: Metadata = {
  title: 'Cloud Engineer - NTaheij.dev',
  description: 'I am Noah Taheij. A cloud engineer from the Netherlands.',
}

const getBlogPosts = async (): Promise<Array<Post>> => {
  return await getPosts();
}

const getProjects = async (): Promise<Array<Project>> => {
  return await getAmountOfProjects(8);
}

export default async function Home() {
  const posts: Array<Post> = await getBlogPosts();
  const projects: Array<Project> = await getProjects();

  return (
    <>
      <Hero
        title="Hey, I am Noah Taheij 👋"
        description="An Azure Cloud Engineer with interest in Automation."
        action={
          <div className="flex justify-center flex-row gap-4 mt-4">
            <Button link={"/projects"} text={"My projects"} type={"secondary-black"} />
            <Button link={"/contact"} text={"Contact me"} type={"tertiary"} />
          </div>
        }
      />

      <div className="-translate-y-1/2 w-11/12 md:w-1/2 xl:w-1/4 p-4 mx-auto bg-gray-900 rounded-lg shadow-sm">
        <p className="text-white"><span className="text-secondary">ntaheij@ubuntu ~ %</span> cd about</p>
        <p className="text-white"><span className="text-secondary">ntaheij@ubuntu about %</span> ls</p>
      </div>

      <section className="max-w-7xl mx-auto xl:px-0 px-4 grid grid-cols-12 pt-8 gap-8">
        <div className="order-2 md:order-1 col-span-12 md:col-span-6 lg:col-span-3 flex items-start lg:items-center">
          <Image src={'/img/me.webp'} width="300" height="300" alt={"Placeholder alt image"} className="rounded-lg" />
        </div>
        <div className="md:order-2 hidden lg:col-span-1 lg:flex justify-center">
          <div className="border-l border-stone-200 h-full"></div>
        </div>
        <div className="order-1 md:order-3 col-span-12 md:col-span-6 lg:col-span-8 flex justify-center flex-col">
          <h2>Cloud Engineer</h2>
          <p className="text-secondary">With a passion for Automation in the Cloud.</p>
          <p className="mt-4">I am Noah Taheij. A cloud engineer from the Netherlands. My expertise is with the Azure Cloud. Governance and Automation is what I enjoy doing. Currently, I am working at the HU University of Applied Sciences in Utrecht, creating an Azure Cloud environment.</p>
          <div className="flex flex-row gap-4 mt-6">
            <Button link={"/about"} text={"More about me"} type={"secondary-white"} />
            <Button link={"/contact"} text={"Contact me"} type={"tertiary-white"} />
          </div>
        </div>
      </section>

      <div className="py-16 md:py-32">
        <Projects projects={projects} />
      </div>

      <section className="max-w-7xl mx-auto px-4 xl:px-0 mb-16 md:mb-32">
        <div className="w-full lg:w-3/4 grid grid-cols-9 gap-8">
          <div className="col-span-9 md:col-span-4">
            <h2>My latest blogs</h2>
          </div>
          <div className="col-span-9 md:col-span-7 -mt-6 md:mt-0">
            <p></p>
          </div>
          {posts.map((blog: Post) =>
            <a href={`https://blog.ntaheij.dev/post/${blog.node.slug}`} key={blog.cursor} className="col-span-9 border border-stone-200 rounded-lg flex flex-col md:grid md:grid-cols-3 gap-8 post">
              <Image src={blog.node.featuredImage?.url !== undefined ? blog.node.featuredImage.url : placeholder} width="500" height="500" alt={"Main blog overview"} className="post-img rounded-t-lg md:rounded-tr-none md:rounded-tl-lg md:rounded-bl-lg col-span-1 w-full" />
              <div className="col-span-2 flex flex-col gap-2 justify-center post-content md:px-0 px-8 md:mb-0 mb-8">
                <h3>{blog.node.title}</h3>
                <p>{blog.node.excerpt}<span className="ml-1 underline text-secondary">read more</span></p>
              </div>
            </a>
          )}
        </div>
      </section>
    </>
  )
}
