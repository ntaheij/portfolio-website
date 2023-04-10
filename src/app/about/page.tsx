import {Hero} from "@/components/Hero";
import {Metadata} from "next";
import Image from "next/image";
import placeholder from "../../../public/placeholder.webp";
import placeholderPhoto from "../../../public/img/placeholder.JPG"

export const metadata: Metadata = {
  title: 'About - NTaheij.dev',
  description: 'I am Noah Taheij. A cloud engineer from the Netherlands.',
}

export default function About() {
  return (
    <>
      <Hero
        title={"About me"}
      />

      <section className="max-w-7xl mx-auto px-4 xl:px-0 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        <div className="col-span-1 md:col-span-3">
          <h2>Hi, I am Noah Taheij.</h2>
          <p className="mt-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          <p className="mt-4">Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum…</p>
          <h3 className="mt-4">Cybersecurity</h3>
          <p className="mt-1">Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum…</p>
        </div>
        <div className="col-span-1">
          <Image className="rounded-md" src={placeholderPhoto} alt={"A picture of me"}/>
        </div>
      </section>

      <section className="max-w-7xl mx-auto xl:px-0 border-t border-stone-200"></section>

      <section className="max-w-7xl mx-auto px-4 xl:px-0 pt-16 pb-32 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
      <div className="col-span-1">
          <h3>Work</h3>
          <p className="mt-1">What I am currently working on and for.</p>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ol className="mx-4 md:mx-0 relative border-l border-stone-200">
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
              </div>
              <time className="little-text opacity-50">sep 2022 - now</time>
              <h4>Hogeschool Utrecht</h4>
              <p className="mt-1">Working with the Cloud Services team to use Infrastructure as Code (Bicep) to deploy and manage Cloud Governance using CI/CD. Also helping to bring the cloud as a service to staff of the university.
              </p>
            </li>
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary">
                </div>
              </div>
              <time className="little-text opacity-50">april 2022 - now</time>
              <h4>Veroxo — Cloud Specialist</h4>
              <p className="mt-1">Working as a freelancer on Cloud projects. I am responsible for the design and implementation of cloud solutions, within Azure, using Automation and Infrastructure as Code.
              </p>
            </li>
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary">
                </div>
              </div>
              <time className="little-text opacity-50">june 2022 - now</time>
              <h4>Racesquare — Race Marshall</h4>
              <p className="mt-1">Helping guests with getting the most out of their F1 Racing Experience. I am responsible for guidance through the workings of the simulators and entertainment of the guests.
              </p>
            </li>
            <li className="ml-12 work-last-item">
              <div className="absolute w-8 h-8 z-[2] rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary">
                </div>
              </div>
              <div className="absolute bg-stone-50 z-[1] w-8 bottom-0 -left-4 h-24"></div>
              <time className="little-text opacity-50">february 2021 - april 2022</time>
              <h4>Lokalized — Full-Stack Developer</h4>
              <p className="mt-1">Full-Stack Developer at Lokalized. Working on software that solves social problems. Primarily worked on haalnuaf.nl, which was a service for local business to sell their products online for pick-up during Covid-19.
              </p>
            </li>
          </ol>
        </div>

        <div className="col-span-1">
          <h3>Education</h3>
          <p className="mt-1">My current and previous education.</p>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ol className="mx-4 md:mx-0 relative border-l border-stone-200">
            <li className="mb-8 ml-12">
              <div className="absolute w-8 h-8 rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary">
                </div>
              </div>
              <time className="little-text opacity-50">2021 - 2025</time>
              <h4 className="">HU University of Applied Sciences Utrecht, BSc HBO-ICT (leerroute Open-ICT)</h4>
              <p className="mt-1">Working on my Bachelor&apos;s degree in ICT at Hogeschool Utrecht. I&apos;m currently in my 2nd year and working at the HU University of Applied Sciences Utrecht as a Cloud Engineer on Azure Governance &amp; Automation.
              </p>
            </li>
            <li className="ml-12 school-last-item">
              <div className="absolute w-8 h-8 z-[2] rounded-full -left-4 border border-stone-200 bg-stone-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary">
                </div>
              </div>
              <div className="absolute bg-stone-50 z-[1] w-8 bottom-0 -left-4 h-24"></div>
              <time className="little-text opacity-50">2023</time>
              <h4 className="">Professional Scrum Master I (PSM I)</h4>
              <p className="mt-1">Earned my Professional Scrum Master I (PSM I) certification from Scrum.org. This is a certification that shows that I have a good understanding of Scrum and can apply it in a team and as a Scrum Master if needed.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}
