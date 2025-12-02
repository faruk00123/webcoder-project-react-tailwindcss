import React from "react";

const ComonCode = ({subheading, heading, description}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 space-y-4 w-full">
      <h5 className="text-blue-600 uppercase">{subheading}</h5>
      <h1 className="text-3xl font-bold font-sans">
        {heading}
      </h1>
      {
        description && <p className="text-gray-600 mt-4">{description}</p>
      }
    </div>
  );
};

export default ComonCode;
