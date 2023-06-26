import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-b from-bodyColor to-[#737373] group hover:bg-gradient-to-b hover:from-[#737373] hover:to-[#919191] transition-colors duration-100 group">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-5xl text-designColor">{icon}</span>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-titleFont font-bold text-gray-600">
            {title}
          </h2>
          <p className="base text-gray-600">{des}</p>
          <span><BsArrowRightShort /></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
