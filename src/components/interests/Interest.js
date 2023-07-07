import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { PiInfinityBold } from "react-icons/pi";
import Card from "./Card";

const Interest = () => {
  return (
    <div className="w-[100%] px-2">
      <div className="flex justify-center mb-2">
        <h1 className="text-4xl font-bold font-titleFont text-[#000000b3] my-4">
          My Interests 🍤
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
        <Card
          title="Web Development"
          des="I am passionate about full-stack web development. I enjoy building modern and dynamic web applications. I thrive in creating engaging web solutions. I believe in leveraging the power of robust databases, flexible server-side frameworks, and rich front-end libraries to craft efficient and scalable full-stack solutions."
          icon={<FaGlobe />}
        />
        <Card
          title="DevOps"
          des="I am fascinated by the role of DevOps in bridging the gap between development and operations. With a strong focus on automation, collaboration, and continuous improvement. I am driven by the desire to optimize workflows, streamline infrastructure, and enhance the overall software development lifecycle."
          icon={<PiInfinityBold />}
        />
        <Card
          title="IT Project Management"
          des="IT Project Management holds a special place in my journey, shaped by my experiences in diverse technology projects during my courses. The opportunity to lead teams, and deliver impactful results is what drives my passion for IT Project Management."
          icon={<AiFillAppstore />}
        />
      </div>
    </div>
  );
};

export default Interest;
