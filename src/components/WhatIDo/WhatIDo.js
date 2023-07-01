import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import Card from "./Card";

const WhatIDo = () => {
  return (
    <div className="w-[100%] px-2">
      <div className="flex justify-center mb-2">
        <h1 className="text-4xl font-bold font-titleFont text-[#000000b3] my-4">
          What I Do
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
        <Card
          title="Bus Strat"
          des="a bunch of text over here to acoomdeitanj fja fuf wejg sjdnsdfjbsgjsd gwehjgbwhje sd"
          icon={<AiFillAppstore />}
        />
        <Card
          title="Bus Strat"
          des="a bunch of text over here to acoomdeitanj fja fuf wejg sjdnsdfjbsgjsd gwehjgbwhje sd"
          icon={<FaMobile />}
        />
        <Card
          title="Bus Strat"
          des="a bunch of text over here to acoomdeitanj fja fuf wejg sjdnsdfjbsgjsd gwehjgbwhje sd"
          icon={<FaGlobe />}
        />
      </div>
    </div>
  );
};

export default WhatIDo;
