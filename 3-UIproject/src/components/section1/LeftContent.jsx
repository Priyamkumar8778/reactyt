import React from "react";
import { ArrowUpRight } from "lucide-react";
const LeftContent = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-7xl leading-[1.1] font-bold mb-5">
          Prospective <br />{" "}
          <span className="bg-gray-200 rounded-full px-3">customer</span> <br />{" "}
          segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          blanditiis tenetur nihil qui id ipsam ab inventore possimus sapiente
          iste.
        </p>
      </div>
      <div className="p-6">
        <ArrowUpRight size={100} />
      </div>
    </div>
  );
};

export default LeftContent;
