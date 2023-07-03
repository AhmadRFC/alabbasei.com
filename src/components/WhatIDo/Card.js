import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({ title, des, icon }) => {
  return (
    <div className="transform scale-y-100 hover:scale-y-105 transition-transform duration-300">
      <div className="w-50 h-36 ml-4 px-6 py-4 rounded-lg shadow-shadowOne flex items-center bg-bodyColor group hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#d1d5db] transition-colors duration-100 group">
        <div className="flex h-full gap-10">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex gap-8">
            <h2 className="text-xl md:text-xl font-titleFont font-bold text-[#000000b3]">
              {title}
            </h2>
            <p className="text-[#00000080] text-sm">{des}</p>
            <div className="flex justify-center items-end">
              <span className="text-designColor">
                <BsArrowRightShort size={44} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
