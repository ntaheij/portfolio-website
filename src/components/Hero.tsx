'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string,
  description?: string,
  action?: JSX.Element,
  bgImage?: string,
}

const Hero = (props: HeroProps) => {
  return (
    <header className="px-4 xl:px-0 overflow-hidden relative bg-primary pt-48 pb-32 text-center flex items-center flex-col gap-2" style={{backgroundImage: props.bgImage ? `url(${props.bgImage})` : "none", backgroundSize: "cover", backgroundPosition: "bottom"}}>
      {props.bgImage ?
        <div className="bg-primary absolute w-full h-full top-0 bottom-0 opacity-50 -z-10" />
         :
        null
      }
      <div className="z-0">
        <h1 className="text-white">{props.title}</h1>
        {props.description ?
          <p className="text-[1.25rem] text-white">{props.description}</p>
          :
          null
        }
        {props.action ?
          props.action
          :
          null
        }
        {!props.bgImage ?
          <>
            <motion.img
              src="/blob.svg"
              alt={"Blob"}
              className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 2xl:hidden"
            />
            <Image src="/blob.svg" alt={"Blob"} width="320" height="320" className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2" />
          </>
          :
          null
        }
      </div>
    </header>
  )
}

export {Hero};
