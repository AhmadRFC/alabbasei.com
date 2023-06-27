import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-b from-bodyColor to-[#b5b5b5] group hover:bg-gradient-to-b hover:from-[#dedede] hover:to-[#b6b6b6] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-titleFont font-bold text-gray-600">
              {title}
            </h2>
            <p className="base text-gray-600">{des}</p>
            <span className="text-2xl text-designColor">
              <BsArrowRightShort size={44}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
