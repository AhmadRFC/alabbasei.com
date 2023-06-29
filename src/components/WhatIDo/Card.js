import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Card = ({ title, des, icon }) => {
  return (
    <div className="transform scale-y-100 hover:scale-y-105 transition-transform duration-300">
      <div className="w-[100%] h-40 px-12 py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-b from-bodyColor to-[#b5b5b5] group hover:bg-gradient-to-b hover:from-[#dedede] hover:to-[#b6b6b6] transition-colors duration-100 group">
        <div className="flex h-full gap-10">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex gap-8">
            <h2 className="text-2xl font-titleFont font-bold text-gray-600">
              {title}
            </h2>
            <p className="text-gray-600">{des}</p>
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
