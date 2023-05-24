"use client";

import {Button} from "@/components/Button";
import Image from "next/image";
import erasmusbrug from "../../public/img/erasmusbrug.webp";
import {usePathname} from "next/navigation";

const Footer = () => {
  const path = usePathname();

  return (
    <>
      {path !== "/contact" ?
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 xl:px-0 mb-4">
            <div className="flex flex-col gap-2 items-start px-16 py-16 lg:py-0 justify-center border border-stone-200 rounded-lg">
              <h2>Lets get in touch 👉</h2>
              <p className="mb-4">Interested in hiring or getting to know me? You can get in touch with me below.</p>
              <Button link={"/contact"} text={"Get in touch"} type={"secondary-white"} />
            </div>
            <div>
              <Image className="rounded-lg" src={erasmusbrug} alt={"Placeholder for footer"} />
            </div>
          </section>
        :
          null
      }
      <footer className="opacity-70 px-4 xl:px-0 py-8 text-center">
        Copyright 2016 - 2023 | <a className="footer-link" href="https://github.com/ntaheij">GitHub</a> | <a className="footer-link" href="https://linkedin.com/in/ntaheij">LinkedIn</a> | <a className="footer-link" href="https://blog.ntaheij.dev">Blog</a>
      </footer>
    </>
  )
}

export { Footer };
