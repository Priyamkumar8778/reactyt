import React from "react";
import RightCard from "./RightCard";
const RightContent = (props) => {
  return (
    <div className="overflow-x-auto w-2/3 h-full p-6 flex flex-nowrap gap-10">
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            img={elem.img}
            text={elem.intro}
            idx={idx}
            tag={elem.tag}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
