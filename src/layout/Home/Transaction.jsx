import React from "react";
import GradientText from "../../components/Home/TextGradient";
import TransactionCard from "../../components/Home/TransactionCard";

const Transaction = () => {
  return (
    <div className=" flex flex-col justify-center bg-[#16161c]">
      <div className=" lg:my-12 lg:py-12 my-6 py-6 mx-auto px-4 max-w-screen-lg flex flex-col w-full">

        <div className="lg:mb-12 mb-6 font-nav-veil text-[40px] text-nav-text ">
          <GradientText text={"Recent Transaction"} />
        </div>

        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </div>
  )
}

export default Transaction;