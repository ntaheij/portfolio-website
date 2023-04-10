import {Hero} from "@/components/Hero";
import {Metadata} from "next";
import {getAllSlugs, getProjectBySlug} from "@/services/project";
import {Params} from "@/interfaces/ProjectInterface";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

export const dynamic = 'error';
export const dynamicParams = false;

export async function generateStaticParams() {
 return getAllSlugs();
}

const getProject = (params: Params) => {
  return getProjectBySlug(params);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { data } = await getProject(params);

  return { title: data.title, description: data.description }
}


export default function Project({ params }: { params: Params }) {
  const { data, content } = getProject(params);

  const mdxOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    }
  }

  return (
    <>
      <Hero title={data.title} bgImage={data.image} />
      <section className="py-16 mx-auto max-w-7xl px-4 xl:px-0">
        <div className="max-w-none prose-p:text-black prose-li:text-black prose prose-headings:font-sans prose-p:mt-2 prose-p:mb-6 prose-headings:my-0 prose-p:leading-6 prose-p:text-[1rem] prose-base:font-sans prose-headings:font-bold prose-h1:text-[2rem] prose-h2:text-[1.5rem] prose-h3:text[1.25-rem] prose-strong:text-gray-600 prose-em:text-gray-600 prose-a:text-secondary prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-black prose-img:w-full prose-img:rounded-xl prose-li:my-0 prose-ul:mt-2 prose-blockquote:pl-4 prose-blockquote:py-0 prose-blockquote:text-black prose-blockquote:border-secondary prose-blockquote:font-light">
          {/* @ts-expect-error Server Component */}
          <MDXRemote compiledSource={content} source={content} options={mdxOptions} />
        </div>
      </section>
    </>
  )
}
