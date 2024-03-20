import React from "react";
import Separator from "./Separator";

const LinkSection = ({ sectionTitle, items }) => {
  return (
    <div className="mt-8 flex flex-col justify-center gap-3 md:mt-0">
      <h2 className="text-lg font-bold capitalize">{sectionTitle}</h2>
      {items.map((item) => (
        <a
          key={item.text}
          href=""
          className="text-sm hover:text-[--hover-color]"
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default LinkSection;
