import React from "react";
import Title from "../Layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { prjOne } from "../../assets";
import { prjTwo } from "../../assets";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black text-[#000000b3]">
      <div className="flex justify-center items-center text-center">
        <Title title="Projects" />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20 mx-10">
        <ProjectsCard 
          title='Pricegrab'
          des='this is a descriptiomajkscnjksfna asfija so jasn'
          src={prjOne}
          github={"https://github.com/AhmadRFC/process_scheduling_solver"}
        />
        <ProjectsCard 
          title='Processor Scheduler'
          des='this is a descriptiomajkscnjksfna asfija so jasn'
          src={prjTwo}
          github={'https://github.com/PriceGrab/pricegrab'}
        />
      </div>
    </section>
  );
};

export default Projects;
