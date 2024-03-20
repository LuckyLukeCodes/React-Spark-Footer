import React from "react";
import Separator from "./Separator";

const LinkSection = ({ sectionTitle, items }) => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-0 lg:items-start">
      <h2 className="text-xl font-bold capitalize">{sectionTitle}</h2>
      {items.map((item) => (
        <a
          key={item.text}
          href=""
          className="text-lg text-slate-300 hover:text-[--hover-color] lg:text-base"
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default LinkSection;
