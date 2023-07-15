import React from "react";
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, github }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-bodyColo group hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#d1d5db] transition-colors duration-1000">
      <div className="w-full h-[80%] rounded-lg">
        <div className="flex justify-center">
          <img
            className="w-auto xl:h-60 h-auto z-10 object-cover group-hover:scale-95 duration-300"
            src={src}
            alt="src"
          />
        </div>
        <div className="w-full mt-5 flex flex-col gap-5">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-titleFont">
                {" "}
                {title}{" "}
              </h3>
              <div className="flex gap-2">
                <a href={github} target="_blank" rel="noreferrer">
                  <span className="text-lg w-14 h-14 rounded-full bg-[#c8ccd2] inline-flex justify-center items-center text-[#848484] hover:text-designColor hover:scale-95 duration-300 cursor-pointer">
                    <BsGithub size={20} />
                  </span>
                </a>
              </div>
            </div>
            <p className="text-sm font-bodyFont tracking-wide mt-3">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
