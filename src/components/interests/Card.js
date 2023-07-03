import React from "react";

const Card = ({ title, des, icon }) => {
  return (
    <div className="transform scale-y-100 hover:scale-y-105 transition-transform duration-300">
      <div className="w-auto lgl:h-40 h-fit px-6 pt-3 rounded-lg shadow-shadowOne flex items-center bg-bodyColor group hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#d1d5db] transition-colors duration-100 group">
        <div className="w-auto lgl:flex grid grid-flow-row grid-rows-2 h-full lgl:gap-4">
          <div className="w-auto lgl:grid grid-cols-1 mr-6">
            <span className="text-5xl text-designColor">{icon}</span>

            <h2 className="w-20 mt-3 lgl:mt-0 text-xl md:text-lg font-titleFont font-bold text-[#000000b3]">
              {title}
            </h2>
          </div>

          <p className="text-[#00000080] text-sm overflow-hidden lgl:pl-20">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
