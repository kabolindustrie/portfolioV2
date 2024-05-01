"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CV from "../../public/CV_AmineK_frontend.pdf"
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div className="h-full flex flex-col px-4 text-xl lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/hero4.png"
            alt="Hero Image"
            className="object-contain"
            fill
          />
          {/* width={616} height={768} */}
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="w-full text-4xl font-bold md:text-6xl">
            Front-end Developer
          </h1>
          {/* DESC */}
          <p className="md:text-2xl">
            Cultivate an understanding of my work in web development. Explore my
            projects and skills. Are you ready to collaborate?
          </p>
          <p className="md:text-2xl">
            {" "}
            Cultivez une vision de mon travail en développement web. Explorez
            mes projets et compétences. Êtes-vous prêt à collaborer ?
          </p>
          {/* BUTTON */}
          <div className="flex w-full gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View my work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact me
              </button>
            </Link>
            <Link download href={CV}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                CV/Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
