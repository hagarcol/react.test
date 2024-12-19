import React, { useState, useEffect } from "react";
import TimerDisplay from "../../components/Token/Timer";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2023-12-25T00:00:00"); // Update with your desired date
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="my-4 lg:my-5 py-4 lg:py-5 relative container mx-auto text-center">
      <p className="text-2xl lg:text-3xl text-primary">Next Revenue Share Airdrop</p>
      <h2 className="text-4xl lg:text-5xl text-gradient mb-6">Countdown till next Payout</h2>
      <TimerDisplay time={timeLeft} />
    </section>
  );
};

export default Countdown;
