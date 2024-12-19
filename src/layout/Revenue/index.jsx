import React from "react";
import Header from "./Intro";
import CountdownSection from "../Token/CountDown";
import RevenueSharingSection from "./Share";
import RevenueIncomeSection from "./Income";
import MonthlyRevenuePayouts from "./Payout";

const Revenue = () => {
  return (
    <>
      <Header />
      <CountdownSection />
      <RevenueSharingSection />
      <RevenueIncomeSection />
      <MonthlyRevenuePayouts />
    </>
  )
}

export default Revenue;