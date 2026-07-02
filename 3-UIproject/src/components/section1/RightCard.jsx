import React from "react";
import { ArrowRight } from "lucide-react";
const RightCard = (props) => {
  return (
    <div className="shrink-0 h-full w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="Description"
      />
      <div className="absolute left-0 top-0 h-full w-full p-8 flex flex-col">
        <h1 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-bold">
          {props.idx + 1}
        </h1>
        <p className="text-xl leading-normal text-white mt-auto mb-4">
          {props.text}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="mt-0 flex items-center justify-center bg-blue-600 text-white font-medium px-2 py-2 rounded-full">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
