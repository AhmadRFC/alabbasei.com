import React from "react";

const Title = ({title}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h1 className="flex flex-col text-5xl text-lightText font-bold capitalize">
        {title}
      </h1>
    </div>
  );
};

export default Title;
