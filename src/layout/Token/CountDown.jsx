import React, { useState, useEffect } from "react";
// import TimerDisplay from "../../components/Token/Timer";

const calculateTimeLeft = (totalSeconds) => {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

// TimerDisplay Component: A reusable component for displaying the countdown
const TimerDisplay = ({ time }) => {
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
            {unit.value.toString().padStart(2, "0")}
          </p>
          <p className="text-base lg:text-[20px] text-white/50 mb-0 text-center font-home_header">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
};

const CountdownSection = () => {

  const INITIAL_DURATION = 5 * 24 * 60 * 60; // 5 days in seconds

  // State to track the remaining time in seconds
  const [timeLeft, setTimeLeft] = useState(INITIAL_DURATION);

  // Countdown logic with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Stop the timer when it reaches zero
          return 0;
        }
        return prev - 1; // Decrease by 1 second
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Convert seconds into a time object
  const time = calculateTimeLeft(timeLeft);

  return (
    <div className="bg-[#16161c] py-6 lg:py-12">
      <section className="my-6 lg:mb-12 relative px-4 mx-auto">
        <div className="flex items-center justify-center mx-auto text-center">

          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl lg:text-[32px] text-nav_hover font-nav-veil text-center font-bold mb-2">
              Next Revenue Share Airdrop
            </p>
            <h2 className="text-4xl lg:text-[40px] text-gradient text-center relative z-10 inline-block mb-6 font-nav-veil font-bold">
              Countdown till next Payout
            </h2>
            
            <TimerDisplay time={time} />

          </div>
        </div>
      </section>
    </div>
  );
};

export default CountdownSection;
