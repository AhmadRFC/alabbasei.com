import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import Title from "../Layouts/Title";
import Card from "./Card";

const WhatIDo = () => {
  return (
    <section
      id="WhatIDo"
      className="w-full pb-20 pt-16 px-5 border-b-[1px] border-b-black"
    >
      <Title title="What I Do" />
      <div className="grid grid-cols-3 gap-16">
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
    </section>
  );
};

export default WhatIDo;
