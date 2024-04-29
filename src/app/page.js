"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
    initial={{ y:"-200vh" }}
    animate={{ y:"0%" }}
    transition={{ duration: 1 }}
    className="h-full">
      <div className="h-full flex flex-col px-4 text-xl lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/hero.png"
            alt="Hero Image"
            className="object-contain"
            fill
          />
          {/* width={616} height={768} */}
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Front End Dev</h1>
          {/* DESC */}
          <p className="md:text-5xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            fugit autem ex error ipsam assumenda.
          </p>
          {/* BUTTON */}
          <div className="flex w-full gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
