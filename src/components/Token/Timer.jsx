import React from "react";

const TimerDisplay = ({ time }) => {
  // `time` is an object with properties { days, hours, minutes, seconds }
  const timeUnits = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 font-bold">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="p-4 flex flex-col items-center justify-center gap-2 bg-[#2d2d39] border rounded-lg border-gray-500"
        >
          <p className="text-3xl lg:text-[40px] text-nav_hover mb-0 text-center font-nav-veil">
            {unit.value}
          </p>
          <p className="text-base lg:text-[20px] text-white/50 mb-0 text-center font-home_header">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TimerDisplay;
