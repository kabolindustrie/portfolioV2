"use client";
import Brain from "@/components/brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef()
  const {scrollYProgress} = useScroll({container:containerRef});

console.log(scrollYProgress);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col p-4 gap-24 sm:p-8 md:p-12 lg:p-20 xl:-48 md:gap-32 lg-gap-48 xl:gap-64 w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* DESC TITLE */}
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              sequi fugit velit et odit ut ad dolore labore rem aliquid.
            </p>
            {/* QUOTE TITLE */}
            <span className="italic">Lorem ipsum dolor sit amet.</span>
            {/* SIGN SVG CONTAINER */}
            <div className="self-end">
              <svg
                width="185"
                height="111"
                viewBox="0 0 400 333"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120 180C127.71 179.229 131.294 161.887 132.667 155.889C134.596 147.456 136.534 137.005 134.778 128.222C133.633 122.497 126.112 120 121 120C110.573 120 103.031 125.159 97.1111 133.5C86.3785 148.623 82.6926 173.627 94.0555 189C97.6833 193.908 105.195 203.377 112 203.944C124.025 204.947 133.7 195.02 138.222 184.444C143.011 173.245 147.619 161.562 151.444 150C158.02 130.125 159.473 109.686 162.444 89.1111C165.938 64.9216 171.158 41.0689 174.556 16.8889C175.221 12.1519 177 6.72792 177 2C177 -0.815787 176.985 7.63629 176.778 10.4444C176.04 20.4408 174.005 30.3115 172.944 40.2778C170.325 64.9038 165.586 89.3451 162.556 113.944C160.222 132.884 161.743 151.888 159.5 170.833C158.481 179.438 155.836 187.648 154.611 196.222C153.602 203.286 153.256 210.369 152.444 217.444C152.283 218.852 151 235.817 151 229"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M128 111C128.546 108.818 136.233 109.286 137.556 109.222C156.587 108.299 175.528 109.179 194.556 107.389C207.343 106.186 219.349 104.054 231.667 100.667C233.981 100.03 236.037 100.308 238 99"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M157 204C157 207.833 157 211.667 157 215.5C157 224.987 167.21 210.476 168.778 208.444C172.349 203.815 176.329 198.816 181 195.222C184.931 192.198 184 198.611 184 201C184 204.741 184 208.481 184 212.222C184 212.859 184.773 211.207 185.111 210.667C187.263 207.234 189.445 203.86 191.444 200.333C191.704 199.876 197.012 190.676 197.778 192.667C199.029 195.921 197.097 199.981 198.111 203.278C199.676 208.364 207.864 192.277 208 203.444C208.04 206.718 207.385 210.659 208 213.889C208.212 215 209.516 212.203 210.167 211.278C212.27 208.284 214.302 205.221 216.944 202.667C224.588 195.278 218.96 211.712 223.444 215.556C226.381 218.072 236.665 199.051 238 203.056C240.31 209.984 249.825 197.75 251.333 195.667C254.436 191.382 252.193 196.984 255.556 197.944C258.355 198.744 261.072 193.022 264.556 195.222C268.698 197.839 265.562 204.432 273 201.389C276.181 200.088 281.193 196.218 285 198.222C289.891 200.796 293.454 204.417 299.056 205.944C304.804 207.512 310.879 207 316.778 207C317.76 207 325.911 206.308 325.778 206.222C321.039 203.176 308.798 204.204 303.556 203.556C287.952 201.626 272.039 199.697 256.611 196.611C233.688 192.026 302.737 205.654 326.111 206C335.222 206.135 366.927 210.761 366 195C365.825 192.031 362.627 191.307 360.222 190.556C341.316 184.647 320.863 186 301.333 186C217.507 186 132.524 181.953 49.5555 196.222C34.48 198.815 15.9411 201.619 3.33332 211.333C2.3901 212.06 0.907882 214.612 2.94444 215C13.4187 216.995 24.3849 217.799 35 218.389C67.7015 220.206 100.714 219.048 133.444 219C163.997 218.955 195.24 220.419 224.667 210.778C245.421 203.978 266.968 194.58 283.5 179.944C300.079 165.268 306.465 146.505 314.556 126.333C323.059 105.132 342.267 39.2697 334.889 60.8889C321.135 101.192 302.345 140.515 285.611 179.611C269.495 217.264 252.523 254.726 246.778 295.556C245.201 306.765 243 318.571 243 329.889C243 333.803 243.944 327.476 244 326.889C244.772 318.783 248.061 311.511 251 304"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M292 181C295.186 178.149 299.114 176.124 302.5 173.5C317.469 161.899 331.615 149.33 345 135.944C357.263 123.682 369.822 112.03 383.111 100.889C388.92 96.0189 394.1 91.5008 398 85"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M285 193C288.371 201.147 289.606 209.731 291.222 218.333C293.864 232.395 299.749 245.882 303.556 259.667C306.638 270.829 309.704 282.009 313 293.111C314.119 296.882 315.309 300.309 318 303"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
             {/* BIOGRAPHY SCROLL SVG */}
             <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILL CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Javascript
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
             <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXP CONTAINER */}
          <div className="flex flex-col gap-12 justify-center bp-48">
            {/* EXP TITLE */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* EXP LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM FIRST PART*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rouded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 test-sm font-semibold">
                    2024-present
                  </div>
                  {/* JOB COMPAGNY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Samsung
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CERCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/6"></div>
              </div>
              {/* EXPERIENCE LIST ITEM SECOND PART*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">

                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CERCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/6">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rouded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 test-sm font-semibold">
                    2024-present
                  </div>
                  {/* JOB COMPAGNY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Samsung
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM PART 3*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rouded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 test-sm font-semibold">
                    2024-present
                  </div>
                  {/* JOB COMPAGNY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Samsung
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CERCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/6"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden sticky top-0 z-30 lg:block w-1/3 xl:1/2">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
