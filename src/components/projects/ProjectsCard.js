import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-l from-bodyColor to-[#b5b5b5] group hover:bg-gradient-to-l hover:from-[#dedede] hover:to-[#b6b6b6] transition-colors duration-1000">
      <div className="w-full h-[80%] rounded-lg">
        <img
          className="w-auto h-60 ml-4 object-cover group-hover:scale-95 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
        <div className="w-full mt-5 flex flex-col gap-5">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-titleFont">
                {" "}
                {title}{" "}
              </h3>
              <div className="flex  gap-2">
                <span className="text-lg w-10 h-10 rounded-full bg-bodyColor inline-flex justify-center items-center text-[#848484] hover:text-designColor hover:scale-95 duration-300 cursor-pointer">
                  <BsGithub size={20} />
                </span>
                <span className="text-lg w-10 h-10 rounded-full bg-bodyColor inline-flex justify-center items-center text-[#848484] hover:text-designColor hover:scale-95 duration-300 cursor-pointer">
                  <FaGlobe size={20} />
                </span>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-[#848484] duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
