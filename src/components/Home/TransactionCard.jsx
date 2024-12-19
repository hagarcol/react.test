import React from "react";
import homebtn from '../../assets/icon/home-btc.svg';
import homeeth from '../../assets/icon/home-eth.svg';

const TransactionCard = () => {
  return (
    <div className="mb-2 p-0 border-0 w-full">
      <div className="card border-none rounded-lg shadow-sm bg-[#2d2d39]">
        <div className="card-body p-4">
          {/* Flex container */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Clock Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-nav-text"
              >
                <g
                  strokeWidth="1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="8" r="7.5"></circle>
                  <polyline points="8 3 8 8 13 8"></polyline>
                </g>
              </svg>
              <p className="mb-0 ml-2 text-nav-text">17/12/2024 - 08:22</p>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-end">
              {/* BTC Section */}
              <div className="flex items-center">
                <div className="w-6 h-6">
                  <img
                    src={homebtn}
                    alt="BTC"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <p className="mb-0 font-bold ml-2 text-nav-text">0.01</p>
              </div>

              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mx-3 text-nav-text"
              >
                <g
                  strokeWidth="1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
                  <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
                </g>
              </svg>

              {/* ETH Section */}
              <div className="flex items-center">
                <div className="w-6 h-6">
                  <img
                    src={homeeth}
                    alt="ETH"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <p className="mb-0 font-bold ml-2 text-nav-text">0.02</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
