import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiGit,
  SiVisualstudiocode,
  SiFigma,
  SiReact,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Passionate Learner", "Software Engineer", "Tech Savvy"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });
  return (
    <div className="w-1/7 flex flex-col gap-5">
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold font-titleFont text-gray-500">
          Hi, I'm
          <span className="text-designColor capitalize"> Ahmad Alabbasei</span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-500">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="_"
            cursorColor="#b88ae6"
          />
        </h2>
        <p className="text-base font-bodyFont w-90">
          Senior Information Technology Student At King Abdulaziz University
        </p>

        <p className="text-base font-bodyFont w-full">
          with a Specialization in Software Engineering | First Class-Honours
        </p>
        <p className="w-20 flex justify-center text-designColor font-bodyFont capitalize ml-1">
          GPA 4.91/5.0
        </p>
      </div>
      <div className="flex flex-col ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-3 ml-3">
            Find me in
          </h2>
          <div className="flex gap-4 ml-3">
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <FaTwitter size={25} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <BsLinkedin size={25} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne transform hover:bg-opacity-40 hover:-translate-y-2 transition-all hover:text-designColor cursor-pointer duration-300">
              <FaGithub size={25} />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont my-3 ml-3">
            Technologies I Use
          </h2>
          <div className="flex gap-4 ml-3">
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiJavascript size={40} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiHtml5 size={40} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiReact size={40} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiTailwindcss size={40} />
            </span>
          </div>
          <div className="flex gap-4 ml-3 mt-5">
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiPostgresql size={40} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiVisualstudiocode size={40} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiFigma size={40} />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-30 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiGit size={40} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
