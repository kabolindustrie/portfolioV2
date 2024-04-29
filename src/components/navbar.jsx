"use client";
import Link from "next/link";
import { v4 as uuid4 } from "uuid";
import { useState } from "react";
import Image from 'next/image';
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={uuid4()} link={link}>
            {link.title}
          </NavLink>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className="text-sm font-semibold bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Amine</span>
          <span className="w-12 h-8 flex justify-center items-center rounded bg-white text-black ">
            .Kabol
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className='hidden md:flex gap-4 w-1/3'>
        <Link href="https://github.com/kabolindustrie">
        <Image src="/github.png" alt="GithubLogo" width={24} height={24}/>
        </Link>
        <Link href="https://www.linkedin.com/in/amine-kabol-b2a92b24a/">
        <Image src="/linkedin.png" alt="LinkedinLogo" width={24} height={24}/>
        </Link>
        <Link href="https://github.com/kabolindustrie">
        <Image src="/instagram.png" alt="InstaLogo" width={24} height={24}/>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BTN */}
        <button
          className="relative w-10 h-8 flex flex-col justify-between z-50"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 h-screen w-screen flex flex-col items-center justify-center gap-8 text-4xl bg-black text-white">
            {links.map((link) => (
              <Link key={uuid4()} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
