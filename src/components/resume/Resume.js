import React, { useState } from "react";
import Title from "../Layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="w-full px-5 py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false)
            }
            className={`${
              educationData
                ? "border-designColor"
                : "border-transparent"
            } resumeLi`}
          >
            Education & Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true)
            }
            className={`${
              skillData ? "border-designColor" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
};

export default Resume;
