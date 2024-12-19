import React from "react";
import Header from "./Header";
import Crypto from "./Crypto";
import Privacy from "./Privacy";
import Transaction from "./Transaction";
import SupportedCrypto from "./SupCrypto";
import Updates from "./Update";
import TrackOrder from "./TrackOrder";

const HomeMain = () => {
  return (
    <>
      <Header />
      
      <div className=" flex bg-gradient-home-main flex-col relative">
        <Privacy />
        <Crypto />
      </div>
      <Transaction />
      <SupportedCrypto />
      <Updates />
      <TrackOrder />

    </>
  )
}

export default HomeMain;