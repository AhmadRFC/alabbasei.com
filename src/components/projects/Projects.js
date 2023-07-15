import React from "react";
import Title from "../Layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { prjOne } from "../../assets";
import { prjTwo } from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black text-[#000000b3]"
    >
      <div className="flex justify-center font-titleFont items-center text-center">
        <Title title="Projects 🔨" />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20 mx-10">
        <ProjectsCard
          title="Pricegrab"
          des="'Pricegrab' is an online shopping tool that helps you find products by searching various websites. It provides you with a convenient sorted list of prices for the same product, starting from the cheapest option to the most expensive. Pricegrab aims to save users both time and money by simplifying the product comparison process."
          src={prjOne}
          github={"https://github.com/AhmadRFC/process_scheduling_solver"}
        />
        <ProjectsCard
          title="Processor Scheduler"
          des="'Processor Scheduler' is a scheduling processing solver that takes process details from a text file and performs various calculations to generate an optimal schedule. It also includes a GUI built with Swing that displays the Gantt chart of the generated schedule.
          This project was a collaborative effort among myself and my friends."
          src={prjTwo}
          github={"https://github.com/PriceGrab/pricegrab"}
        />
      </div>
    </section>
  );
};

export default Projects;
