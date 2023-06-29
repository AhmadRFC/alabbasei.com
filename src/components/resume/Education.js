import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-[50%]">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="h-[70%] border-l-[6px] border-l-black border-opacity-30">
          <div className="mt-6 lg:mt-5 w-full flex flex-col gap-10">
            <ResumeCard
              title="BSc in Information Technology"
              subTitle="King Abdulaziz University 2019 - 2024(Expected)"
              result="GPA: 4.91/5"
              des="Specializing in Software Engineering (First-Class Honours)"
            />
          </div>
        </div>
      </div>

      <div className="w-[50%]">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Relevant Experience
          </h2>
        </div>
        <div className="h-[70%] border-l-[6px] border-l-black border-opacity-30">
          <div className="mt-6 lg:mt-5 w-full flex flex-col gap-10">
            <ResumeCard
              title="KAU Innovators"
              subTitle="Tech Lead - (May 2021 – March 2022)"
              result="Jeddah, SA"
              des="Designed & implemented technology solutions, automated certification for 200+ participants, managed events & Zoom webinars, engaged with students, and maintained program documentation"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
