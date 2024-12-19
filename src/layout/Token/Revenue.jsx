import React from "react";
import ChartComponent from "../../components/Token/Chart";

const RevenueAllocation = () => {

  return (
    <div className="bg-[#16161c] py-6 lg:py-12">
      <section className="my-6 lg:my-12 relative px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-5/12 w-full">
            <div className="flex flex-col justify-start items-start mb-8 lg:mb-12">
              <p className="text-[32px] text-nav_hover font-nav-veil font-bold">Breakdown</p>
              <h2 className="text-[40px] font-bold text-gradient text-start relative z-10 mb-6 font-nav-veil">
                Our Revenue Allocation
              </h2>
              <p className="mb-6 lg:mb-8 font-home_header text-nav-text text-opacity-80">
                Our Veil revenue is generated from the exchange processes & fees
                from the $Veil token. This is distributed to certain allocations
                for the upkeep of the platform, and distributed sharing. Here is
                the list of our allocations for each category.
              </p>

              {/* Revenue Breakdown Cards */}
              <div className="w-full mt-6 lg:mt-8">
                {[
                  { label: "Marketing", percentage: "30%", color: "text-red-500" },
                  { label: "Revenue Share", percentage: "20%", color: "text-green-500" },
                  { label: "Team", percentage: "20%", color: "text-blue-500" },
                  { label: "Development", percentage: "15%", color: "text-cyan-500" },
                  { label: "Treasury", percentage: "15%", color: "text-yellow-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-full mt-2 card border rounded-lg border-gray-500 bg-[#2d2d39] "
                  >
                    <div className="p-4 flex flex-col sm:flex-row justify-between items-center font-home_header text-[20px]">
                      <p className="text-nav-text">{item.label}:</p>
                      <p className={`font-bold ${item.color}`}>{item.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ChartComponent />
          
        </div>
      </section>
    </div>
  );
};

export default RevenueAllocation;
