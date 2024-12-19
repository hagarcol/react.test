import React from "react";
import headBG from '../../assets/background/tokenomics-bg.webp'

const Header = () => {
  return (
    <header 
      className="mb-0 border-b border-gray-700 lg:pb-[100px] lg:pt-[200px] pb-[60px] pt-[160px] bg-cover"
      style={{
        backgroundImage: `url(${headBG})`,
      }}
    >
      <div className="relative mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-start">
              <p className="text-[32px] text-nav_hover font-nav-veil font-bold mb-2">Introducing our</p>
              <h1 className="text-4xl lg:text-[40px] text-gradient font-bold leading-tight mb-6 font-nav-veil">
                Revenue Share Program
              </h1>
              <p className="text-base text-gray-300 mb-4 lg:mb-6 font-home_header">
                Join our revenue-sharing program and earn a share of our
                exchange and token fee profits based on your $Veil Token
                ownership.
              </p>
              <div className="flex flex-wrap gap-4 font-home_header">
                <a
                  href="/token"
                  className="px-6 py-4 text-base font-bold text-white bg-bt_bg rounded-md hover:bg-nav_hover transition"
                >
                  About Token
                </a>
                <a
                  href="https://etherscan.io/address/0x4406D9D8Eb6acF6A90c13C0977C21D290dC6c8F2"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="px-6 py-4 text-base font-bold text-white bg-bt_bg rounded-md hover:bg-nav_hover transition"
                >
                  View RevShare Wallet
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 w-full">
            <div className="w-full bg-[#202029] border border-gray-800 rounded-lg">
              {/* Card Header */}
              <div className="p-4 border-b border-gray-600 text-center">
                <p className="text-2xl font-bold text-nav-text font-nav-veil">Total Paid Out So Far</p>
              </div>
              {/* Card Body */}
              <div className="p-6 flex flex-col items-center justify-center gap-2 bg-[#16161c]">
                <p className="text-[40px] text-nav_hover font-nav-veil font-bold">79.71 ETH</p>
                <p className="text-xl text-gray-400 font-bold font-home_header">$310.0K USD</p>
              </div>
              {/* Card Footer */}
              <div className="p-4 border-t border-gray-600 text-center bg-[#16161c]">
                <p className="text-sm text-gray-400 uppercase font-home_header">
                  Last Payout:{" "}
                  <a
                    href="/revenue-share#payouts"
                    className="text-gray-400 hover:text-nav_hover inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="0.5" y1="8" x2="15.5" y2="8"></line>
                      <polyline points="10.5 3 15.5 8 10.5 13"></polyline>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
