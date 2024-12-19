import React from "react";

const IconBelt = ({ icons }) => {
  return (
    <div className="relative overflow-hidden py-4">
      
      <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-[#16161c] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-[#16161c] to-transparent pointer-events-none z-10"></div>

      <div className="flex items-center animate-marquee">
        {icons.concat(icons).map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            width={80}
            height={80}
            className="mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default IconBelt;
