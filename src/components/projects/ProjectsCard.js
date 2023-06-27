import React from "react";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-l from-bodyColor to-[#b5b5b5] group hover:bg-gradient-to-l hover:from-[#dedede] hover:to-[#b6b6b6] transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <div className="w-full h-60 ">
        <img className="w-auto h-40 bg-orange-400 object-cover object-center group-hover:scale-110 duration-300 cursor-pointer" src={src} alt="src"></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
