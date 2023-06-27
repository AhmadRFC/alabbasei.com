import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-l from-bodyColor to-[#b5b5b5] group hover:bg-gradient-to-l hover:from-[#dedede] hover:to-[#b6b6b6] transition-colors duration-1000">
      <div className="w-full h-[80%] rounded-lg">
        <img className="w-full h-60 bg-orange-400 object-cover group-hover:scale-95 duration-300 cursor-pointer" src={src} alt="src"/>
        <div className="w-full mt-5">
          <h3>
            <div>
            {title}
            <div>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:scale-95 duration-300 cursor-pointer">
                <BsGithub size={24}/>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor hover:scale-95 duration-300 cursor-pointer">
                <FaGlobe size={24}/>
              </span>
            </div>
            </div>
            <div>

            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
