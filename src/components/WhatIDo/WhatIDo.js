import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import Card from "./Card";

const WhatIDo = () => {
  return (
    <div className="w-[100%] px-2">
        <h1 className="text-4xl font-bold font-titleFont text-gray-500 mb-4">What I Do</h1>
      <div className="grid grid-cols-1 gap-5">
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
