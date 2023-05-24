import {Hero} from "@/components/Hero";
import {Metadata} from "next";
import {FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaHeadphones} from "react-icons/fa";
import {Button} from "@/components/Button";

export const metadata: Metadata = {
  title: 'Contact - NTaheij.dev',
  description: 'If you have any questions about one of my projects or hiring me, feel free to contact me',
}

export default function Contact() {
  return (
    <>
      <Hero title={"Contact"} />

      <section className="max-w-7xl mx-auto px-4 xl:px-0 py-16 grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 md:col-span-1">
          <h2>Contact</h2>
        </div>
        <div className="col-span-1 md:col-span-5">
          <p>Excited by my profile? Want to connect with me and ask some questions? I am always open for new opportunities. You can contact me via mail or the form below. I will get back to you as soon as possible!</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 xl:px-0 pb-16 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <label htmlFor="name">First name</label>
              <input required className="rounded-md border-none bg-stone-100 py-3 px-4 focus:ring-2 focus:ring-secondary" type="text" name="name" placeholder="Your first name..." />
            </div>
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <label htmlFor="lastName">Last name</label>
              <input required className="rounded-md border-none bg-stone-100 py-3 px-4 focus:ring-2 focus:ring-secondary" type="text" name="lastName" placeholder="Your last name..." />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="mail">Mail</label>
              <input required className="rounded-md border-none bg-stone-100 py-3 px-4 focus:ring-2 focus:ring-secondary" type="email" name="mail" placeholder="Your mail..." />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="message">Message</label>
              <textarea required className="rounded-md border-none bg-stone-100 py-3 px-4 focus:ring-2 focus:ring-secondary" name="message" placeholder="Your message..." rows={5} />
            </div>
            <div className="flex flex-row justify-end col-span-2">
              <button type="submit" className="button secondary-white">Send message</button>
            </div>
          </form>
        </div>

        <div className="hidden md:flex flex-row justify-center col-span-1">
          <div className="border-l border-stone-200"></div>
        </div>

        <div className="col-span-1 md:col-span-3">
          <h3>Contact information</h3>
          <a href="tel:+310853016035" className="group cursor-pointer flex flex-row gap-4 mt-4 items-center">
            <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
              <FaPhone className="text-secondary group-hover:text-primary transition duration-300" />
            </div>
            <p className="opacity-70">+31 085 301 6035</p>
          </a>
          <a href="mailto:noah@taheij.nl" className="group cursor-pointer flex flex-row gap-4 mt-4 items-center">
            <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
              <FaEnvelope className="text-secondary group-hover:text-primary transition duration-300" />
            </div>
            <p className="opacity-70">noah@taheij.nl</p>
          </a>
          <h3 className="mt-8">Socials</h3>
          <a href="https://github.com/ntaheij" className="group cursor-pointer flex flex-row gap-4 mt-4 items-center">
            <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
              <FaGithub className="text-secondary group-hover:text-primary transition duration-300" />
            </div>
            <p className="opacity-70">GitHub</p>
          </a>
          <a href="https://linkedin.com/in/ntaheij" className="group cursor-pointer flex flex-row gap-4 mt-4 items-center">
            <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
              <FaLinkedin className="text-secondary group-hover:text-primary transition duration-300" />
            </div>
            <p className="opacity-70">LinkedIn</p>
          </a>
          <a href="https://open.spotify.com/user/n2e84nui9bc8sjtfl80h2k98a" className="group cursor-pointer flex flex-row gap-4 mt-4 items-center">
            <div className="w-11 h-11 items-center flex justify-center border border-stone-200 rounded-md">
              <FaHeadphones className="text-secondary group-hover:text-primary transition duration-300" />
            </div>
            <p className="opacity-70">Spotify</p>
          </a>
        </div>
      </section>
    </>
  )
}
