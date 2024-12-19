import React from "react";
import homeeth from './../../assets/icon/home-eth.svg';

const TokenStats = () => {
  return (
    <div className="bg-[#16161c] py-6 lg:py-12">
      <div className="my-6 lg:my-12 mx-auto px-4 max-w-screen-xl">
        {/* Header div */}
        <div className="flex flex-col justify-center items-center mb-6 lg:mb-12">
          <h4 className="text-gradient text-center relative z-3 inline-block mb-6 text-[40px] font-bold font-nav-veil">
            $Veil Token Stats
          </h4>
          <a
            href="https://etherscan.io/address/0xb244b3574a5627849fca2057e3854340def63071"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-center underline-offset-3 underline font-home_header text-nav-text flex items-center hover:text-nav_hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 293.775 293.667"
              fill="currentColor"
            >
              <g transform="translate(-219.378 -213.333)">
                <path
                  d="M280.433 353.152a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11v-97.266a12.469 12.469 0 0 1 12.467-12.47h20.779a12.47 12.47 0 0 1 12.467 12.47v90.276s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577V290.9a12.466 12.466 0 0 1 12.465-12.467h20.779a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537 146.6 146.6 0 0 0-136.644-99.006c-81.439-1.094-148.744 65.385-148.736 146.834a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173 508.86 508.86 0 0 0 14.643-1.518 10.383 10.383 0 0 0 9.209-10.306v-77.824"
                  fill="currentColor"
                ></path>
              </g>
            </svg>{" "}
            View on Etherscan
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-nav-text font-nav-veil">
          {/* Total Holders */}
          <div className="card border rounded-md">
            <div className="card-header bg-[#2d2d39] py-3">
              <p className="text-2xl text-center font-bold">Total Holders</p>
            </div>
            <div className="card-body p-4 flex justify-center items-center gap-2 text-nav_hover ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2">
                  <circle cx="9" cy="15" r="4"></circle>
                  <path d="M9,22c-4.418,0-8,3.582-8,8v1H17v-1c0-4.418-3.582-8-8-8Z"></path>
                  <circle cx="20.5" cy="6.5" r="5.5"></circle>
                  <path d="M21,31h10v-6c0-5.523-4.477-10-10-10-1.422,0-2.775,.297-4,.832"></path>
                </g>
              </svg>
              <p className="text-[40px] font-bold">5,688</p>
            </div>
          </div>

          {/* Total Transactions */}
          <div className="card border rounded-md">
            <div className="card-header bg-[#2d2d39] py-3">
              <p className="text-2xl text-center font-bold">Total Transactions</p>
            </div>
            <div className="card-body p-4 flex justify-center items-center gap-2 text-nav_hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2">
                  <polyline points="3,12 29,12 19,2"></polyline>
                  <polyline points="29,20 3,20 13,30"></polyline>
                </g>
              </svg>
              <p className="text-[40px] font-bold">41,550</p>
            </div>
          </div>

          {/* Liquidity */}
          <div className="card border rounded-md">
            <div className="card-header bg-[#2d2d39] py-3">
              <p className="text-2xl text-center font-bold">Liquidity</p>
            </div>
            <div className="card-body p-4 flex justify-center items-center gap-2 text-nav_hover">
              <img src={homeeth} width={30} alt="Home-eth"/>
              <p className="text-primary text-[40px] font-bold">315.2K</p>
            </div>
          </div>

          {/* Market Cap */}
          <div className="card border rounded-md">
            <div className="card-header bg-[#2d2d39] py-3">
              <p className="text-2xl text-center font-bold">Market Cap</p>
            </div>
            <div className="card-body p-4 flex justify-center items-center gap-2 text-nav_hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
              >
                <rect x="4" y="19" width="6" height="12"></rect>
                <polygon points="21,2 12,13 18,13 18,31 24,31 24,13 30,13"></polygon>
              </svg>
              <p className="text-primary text-[40px] font-bold">1.0M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenStats;
