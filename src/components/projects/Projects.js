import React from "react";
import Title from "../Layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { prjOne } from "../../assets";
import { prjTwo } from "../../assets";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-56 mx-24">
        <ProjectsCard 
          title='Pricegrab'
          des='this is a descriptiomajkscnjksfna asfija so jasn'
          src={prjOne}
        />
        <ProjectsCard 
          title='Processor Scheduler'
          des='this is a descriptiomajkscnjksfna asfija so jasn'
          src={prjTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
