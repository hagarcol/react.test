import React from "react";
import headerBG from '../../assets/background/tokenomics-bg.webp'

const IntroToken = () => {
  return (
    <header>
      <section 
        className="pb-[100px] pt-[200px] bg-cover bg-center" 
        style={{
          backgroundImage: `url(${headerBG})`,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center">
            {/* Left Column */}
            <div className="mb-10 md:mb-0 md:mr-5 w-full lg:w-5/12">
              <div className="flex flex-col items-center md:items-start mb-2">
                <h1 className="text-[64px] font-bold text-center md:text-left font-nav-veil leading-[1.2]">
                  <span className="text-gradient block">Introducing</span>
                  <span className="text-nav_hover">$Veil Token</span>
                </h1>
              </div>
              <h2 className="text-[20px] text-nav-text text-center md:text-left mb-6 leading-loose">
                Introducing our utility token to support the Veil exchange platform.
              </h2>
              <h3 className="text-[20px] text-nav-text text-center md:text-left mb-6 leading-loose">
                Contract:
                0xb244b3574a5627849fca2057e3854340def63071
              </h3>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
                <a
                  href="https://app.uniswap.org/swap?outputCurrency=0xB244b3574a5627849fca2057E3854340Def63071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bt_bg hover:bg-nav_hover text-nav-text font-bold py-3 px-6 rounded-lg mr-4 mb-3 md:mb-0 text-center font-home_header"
                >
                  Buy Token
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xac9ae0eb05daee73bd964eaa0153b762d6455667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav-text underline underline-offset-4"
                >
                  View Chart
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-full lg:w-5/12">
              <div className="flex justify-center items-center mb-6">
                <h1 className="text-[40px] font-bold text-gradient text-center font-nav-veil">
                  $Veil Tokenomics
                </h1>
              </div>
              <div className="flex flex-col bg-table-bg rounded-lg divide-y divide-gray-700 font-home_header">
                <div className="p-4 flex justify-between items-center">
                  <p className="text-[20px] text-gray-300">
                    Token Taxes: <span className="text-base opacity-50">(Buy/Sell)</span>
                  </p>
                  <p className="text-[20px] font-bold text-nav_hover">5% / 5%</p>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <p className="text-[20px] text-gray-300">Total Supply:</p>
                  <p className="text-[20px] font-bold text-nav_hover">1,000,000,000</p>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <p className="text-[20px] text-gray-300">CEX Allocation:</p>
                  <p className="text-[20px] font-bold text-nav_hover">80,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default IntroToken;
