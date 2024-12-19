import React from "react";
import IntroToken from "./Intro";
import TokenStats from "./TokenState";
import RevenueAllocation from "./Revenue";
import CountdownSection from "./CountDown";

const VeilToken = () => {
  return (
    <>
      <IntroToken />
      <TokenStats />
      <RevenueAllocation />
      <CountdownSection />
    </>
  )
}

export default VeilToken;