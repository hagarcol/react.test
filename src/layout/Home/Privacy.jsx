import React from "react";
import GradientText from "../../components/Home/TextGradient";
import homecard1 from './../../assets/img/home-card-1.webp';
import homecard2 from './../../assets/img/home-card-2.webp';
import homecard3 from './../../assets/img/home-card-3.webp';

const Privacy = () => {
  return (
    <div className="lg:my-12 lg:py-12 my-6 py-6 px-4 flex flex-col max-w-screen-xl lg:mx-auto">
      <div className="lg:mb-12 mb-6 font-nav-veil text-nav-text lg:text-[40px] text-4xl pb-2">
        <GradientText text={"We are all about privacy and security"} />
      </div>

      <div className="flex items-center lg:justify-center lg:flex-row flex-col w-full">
        
        <div className="lg:w-1/3 px-3 w-full">
          <div className="card shadow-md rounded-lg overflow-hidden">
            {/* Card Header */}
            <div className="card-header bg-[#2d2d39] flex items-center justify-center px-4 py-2 h-full relative overflow-hidden">
              <div className="contain my-6 mx-[92px]">
                <img className="h-[170px] w-auto object-contain animate-move-up-down"
                  alt="Privacy Driven"
                  loading="lazy"
                  // srcSet={homecard1}
                  src={homecard1}
                />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 card-body">
              <h3 className="text-[28px] font-bold font-nav-veil text-white mb-2">Privacy-Driven</h3>
              <p className="text-base text-nav_hover font-home_header">
                Anonymized exchange with no sign-ups or limits.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 px-3 w-full lg:my-0 my-4">
          <div className="card shadow-md rounded-lg overflow-hidden">
            {/* Card Header */}
            <div className="card-header bg-[#2d2d39] flex items-center justify-center px-4 py-2 h-full relative overflow-hidden">
              <div className="contain my-6 mx-[92px]">
                <img className="h-[170px] w-auto object-contain animate-move-up-down"
                  alt="Privacy Driven"
                  loading="lazy"
                  // srcSet={homecard1}
                  src={homecard2}
                />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 card-body">
              <h3 className="text-[28px] font-bold font-nav-veil text-white mb-2">Seamless Exchange</h3>
              <p className="text-base text-nav_hover font-home_header">
                Fast and effective exchange between wallets and cryptocurrencies.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 px-3 w-full">
          <div className="card shadow-md rounded-lg overflow-hidden">
            {/* Card Header */}
            <div className="card-header bg-[#2d2d39] flex items-center justify-center px-4 py-2 h-full relative overflow-hidden">
              <div className="contain my-6 mx-[92px]">
                <img className="h-[170px] w-auto object-contain animate-move-up-down"
                  alt="Privacy Driven"
                  loading="lazy"
                  // srcSet={homecard1}
                  src={homecard3}
                />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 card-body">
              <h3 className="text-[28px] font-bold font-nav-veil text-white mb-2">Zero Wallet Limits</h3>
              <p className="text-base text-nav_hover font-home_header">
                No wallet or amount limitations on all exchanges through us!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>      
  )
}

export default Privacy;