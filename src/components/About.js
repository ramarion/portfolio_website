// src/components/About.js
import React from "react";

    export default function About() {
        return (
          <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
                  Hi, I'm Raoulex Nurse.
                  <br className="hidden lg:inline-block" />I am a Web Developer
                </h1>
                <p className="mb-8 leading-relaxed">
                  Let me show you why you should hire me.
                </p>
                <div className="flex justify-center">
                  <a
                    href="#contact"
                    className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 hover:text-black rounded text-lg">
                    Work With Me
                  </a>
                  <a
                    href="#projects"
                    className="ml-4 inline-flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white rounded text-lg">
                    See My Past Work
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full  ">
                <img
                  className="object-cover mr-500"
                  alt="hero"
                  src="./bg.svg"
                />
              </div>
            </div>
          </section>
        );
      
}

// repeat the same basic structure for all 6 components