"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import { uuid4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import Mockup1 from "../../../public/Boxymockup.png";
import Mockup2 from "../../../public/Barber2.png";
import Mockup3 from "../../../public/SweetShopMockup.png";

const items = [
  {
    id: 1,
    color: "from-red-100 to-blue-100",
    title: "Ecommerce Sweet Shop",
    desc: "Sweet Shop est une plateforme Ecommerce développée en utilisant React, offrant une expérience utilisateur fluide et réactive pour les acheteurs en ligne. Le cœur du projet réside dans la création d'une interface intuitive permettant aux utilisateurs de naviguer facilement à travers une large gamme de produits, de les visualiser en détail et de les acheter en toute simplicité.",
    img: Mockup3,
    link: "https://sweet-eshop.web.app/",
  },
  {
    id: 2,
    color: "from-blue-100 to-violet-100",
    title: "The Barber Show App",
    desc: "Plateforme de réservation en ligne pour les salons de coiffure, construite avec React et stylisée avec Tailwind CSS pour une expérience utilisateur élégante et moderne. L'accent est mis sur la simplicité et l'efficacité, permettant aux clients de réserver des rendez-vous en quelques clics, de consulter les disponibilités des coiffeurs, et de découvrir les services proposés.",
    img: Mockup2,
    link: "https://the-barber-show.web.app/",
  },
  {
    id: 3,
    color: "from-violet-100 to-purple-100",
    title: "Boxy Generator App",
    desc: "Application web simplifiant la création de conteneurs HTML en générant automatiquement un code CSS complet. L'objectif principal est de fournir aux utilisateurs un outil convivial pour générer rapidement du code CSS personnalisé pour leurs conteneurs HTML, réduisant ainsi le temps de développement. Développée avec React, Redux et stylisée avec Tailwind CSS pour une expérience utilisateur intuitive et élégante.",
    img: Mockup1,
    link: "https://box-generator.web.app/", target: "_blank"
  },
  // {
  //   id: 4,
  //   color: "from-purple-100 to-red-100",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: { Mockup1 },
  //   link: "",
  // },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className='flex  h-[calc(100vh-6rem)] flex-col justify-center items-center gap-4'>
        <div className="w-screen flex items-center justify-center text-center sm:text-5xl md:text-7xl lg:text-8xl">
          My Projects
        </div>
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
        <div className="sticky top-0 flex h-screen gap-1 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-red-100" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-5 text-black m-8">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative w-96 h-96 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96  hidden md:block lg:w-[500px] lg:text-lg">
                    {item.desc}
                  </p>
                  <Link className="flex justify-end" href={item.link}>
                    <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white m-4 text-sm md:p-4 md:text-md lg:text-lg hover:bg-white hover:text-black font-semibold">
                      See demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you Have a project ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href={"/contact"}
            className="w-16 h-16 flex justify-center items-center md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full"
          >
            Hire me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
