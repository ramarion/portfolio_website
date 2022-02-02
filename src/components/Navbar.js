// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { navbar } from "../data";

export default function Navbar() {
  return (
    <header className="bg-red-600 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
          {navbar.map((logo) => (
            <a
            key={logo.image}>
              <img
                  alt="logo"
                  className="absolute inset-0 w-20 h-full object-cover ml-3 mt-2"
                  src={logo.image}
                />
            </a>
          ))}
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-yellow-300	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:text-yellow-400">
            Works
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-yellow-400">
            Skills
          </a>
          <a href="#contact" className="mr-5 text-white hover:text-yellow-400">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-yellow-300 border-0 py-1 px-3 focus:outline-none hover:bg-white-200 rounded text-base mt-4 md:mt-2">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}