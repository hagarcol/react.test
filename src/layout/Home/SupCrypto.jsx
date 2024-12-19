import React from "react";
import GradientText from "../../components/Home/TextGradient";
import IconBelt from "../../components/Home/IconBelt";
import ico1 from '../../assets/icon/ico1.svg';
import ico2 from '../../assets/icon/ico2.svg';
import ico3 from '../../assets/icon/ico3.svg';
import ico4 from '../../assets/icon/ico4.svg';
import ico5 from '../../assets/icon/ico5.svg';
import ico6 from '../../assets/icon/ico6.svg';
import ico7 from '../../assets/icon/ico7.svg';
import ico8 from '../../assets/icon/ico8.svg';
import ico9 from '../../assets/icon/ico9.svg';
// import TransactionCard from "../../components/TransactionCard";

const SupportedCrypto = () => {

  const icons = [ico1, ico2, ico3, ico4, ico5, ico5, ico6, ico7, ico8, ico9];

  return (
    <div className=" flex flex-col justify-center bg-[#16161c]">
      <div className="lg:my-12 lg:py-12 my-6 py-6 lg:mx-auto px-4 max-w-screen-xl">

        <div className="lg:mb-12 mb-6 font-nav-veil text-[40px] text-nav-text ">
          <GradientText text={"Supported Crypto"} />
        </div>

          <IconBelt icons={icons} />

      </div>
    </div>
  )
}

export default SupportedCrypto;