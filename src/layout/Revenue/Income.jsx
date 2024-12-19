import React from "react";

const RevenueIncomeSection = () => {
  return (
    <div className="bg-[#16161c] lg:py-12 py-6 px-4">
      <section className="my-6 lg:my-12 lg:mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-start sm:items-center justify-start sm:justify-center mb-6">
          <h3 className="text-3xl lg:text-4xl text-gradient font-bold leading-tight mb-6 text-left sm:text-center font-nav-veil">
            Our Revenue Income
          </h3>
          <p className="text-nav_hover text-left sm:text-center font-home_header">
            Overview for Revenue generated from Veil Exchange & Token Fees
          </p>
        </div>

        {/* Revenue Cards */}
        <div className="flex flex-wrap items-center justify-center mb-3 lg:mb-4 gap-y-3 lg:gap-y-0">
          {/* Card 1: Revenue from Exchange */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="w-full bg-[#202029] border border-gray-800 rounded-lg">
              <div className="px-4 py-3 border-b border-gray-700 bg-gray-300 bg-opacity-10 ">
                <p className="text-[20px] font-bold text-center text-gray-300 font-nav-veil">
                  Revenue from Exchange
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center gap-2 ">
                <p className="text-4xl font-bold text-nav_hover text-center font-nav-veil">
                  3.38 ETH
                </p>
                <p className="text-[20px] font-semibold text-gray-400 text-center font-home_header">
                  $ USD
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Revenue from Token Fees */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="w-full bg-[#202029] border border-gray-800 rounded-lg">
              <div className="px-4 py-3 border-b border-gray-700 bg-gray-300 bg-opacity-10">
                <p className="text-[20px] font-bold text-center text-gray-300 font-nav-veil">
                  Revenue from Token Fees
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center gap-2">
                <p className="text-4xl font-bold text-nav_hover font-nav-veil text-center">
                  ETH
                </p>
                <p className="text-[20px] font-semibold text-gray-400 text-center font-home_header">
                  $ USD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="flex items-center justify-center">
          <div className="lg:w-2/3 w-full px-4">
            <div className="w-full bg-[#202029] border border-gray-800 rounded-lg">
              <div className="px-4 py-3 border-b border-gray-700 bg-gray-300 bg-opacity-10">
                <p className="text-[20px] font-bold text-center text-gray-300">
                  Total Revenue
                </p>
              </div>
              <div className="p-4 flex flex-col items-center justify-center gap-2">
                <p className="text-4xl font-bold text-nav_hover text-center font-nav-veil">
                  3.38 ETH
                </p>
                <p className="text-[20px] font-semibold text-gray-400 text-center font-home_header">
                  $ USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevenueIncomeSection;
