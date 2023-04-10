"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Button} from "@/components/Button";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if(open) {
      document.querySelector("html")!.classList.add("overflow-y-hidden");
      document.querySelector(".nav-overlay")!.classList.remove("pointer-events-none");
    } else {
      document.querySelector("html")!.classList.remove("overflow-y-hidden");
      document.querySelector(".nav-overlay")!.classList.add("pointer-events-none");
    }
  }, [open])

  useEffect(() => {
    const scroll = () => {
      if(window.scrollY > 50) {
        document.querySelector("nav")!.classList.add("bg-primary");
      } else {
        document.querySelector("nav")!.classList.remove("bg-primary");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    }
  }, [])

  return (
    <>
      <nav className="text-white py-8 fixed right-0 left-0 z-20">
        <div className="max-w-7xl mx-auto px-4 xl:px-0 flex justify-between md:grid md:grid-cols-3 items-center">
          <div>
            <Link href="/" className="text-[1.5rem]">
              Noah Taheij
            </Link>
          </div>
          <div className="hidden md:flex flex-row gap-6 justify-center">
            <Link href={"/about"} className="transition duration-300 hover:text-secondary">
              About
            </Link>
            <Link href={"/projects"} className="transition duration-300 hover:text-secondary">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:flex justify-end">
            <Button link={"/contact"} text={"Contact me"} type="secondary-black" />
          </div>
          <motion.div
            className="flex md:hidden"
            animate={open ? "open" : "closed"}
          >
            <MenuToggle toggle={() => setOpen(!open)} />
          </motion.div>
        </div>
      </nav>
      <div className="nav-overlay fixed bottom-0 top-0 left-0 right-0 max-w-full h-screen overflow-x-hidden z-[1] pointer-events-none">
        <motion.div
          animate={open ? "open" : "closed"}
          initial={"closed"}
          variants={{
            closed: {
              x: "100%",
              transition: {
                ease: "easeOut"
              },
              transitionEnd: {
                display: "none"
              }
            },
            open: {
              display: "flex",
              x: "0%",
              transition: {
                ease: "easeIn"
              }
            }
          }}
          className="absolute bg-primary top-0 bottom-0 w-screen h-screen z-[10] flex flex-col justify-center items-center text-white text-2xl gap-4"
        >
          <Link href={"/about"} className="transition duration-300 hover:text-secondary" onClick={() => setOpen(!open)}>
            About
          </Link>
          <Link href={"/projects"} className="transition duration-300 hover:text-secondary" onClick={() => setOpen(!open)}>
            Portfolio
          </Link>
          <Link href={"/contact"} className="transition duration-300 hover:text-secondary" onClick={() => setOpen(!open)}>
            Contact
          </Link>
        </motion.div>
      </div>
    </>
  )
}

const Path = (props: any) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="white"
      strokeLinecap="round"
      {...props}
    />
  )
}

const MenuToggle = ({ toggle }: { toggle: () => void }) => {
  return (
    <button aria-label="hamburger menu" onClick={toggle} className="relative z-20">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  )
}

export { Navigation };
