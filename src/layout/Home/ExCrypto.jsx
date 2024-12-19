import React from "react";

const ExchangeCrypto = () => {
  return (
    <section id="exchange" className="my-4 lg:my-5 py-4 lg:py-5">
      {/* Section Header */}
      <div className="flex justify-center items-center mb-4 lg:mb-5">
        <h3 className="text-gradient text-center relative z-3 inline-block text-3xl font-bold">
          Exchange Crypto
        </h3>
      </div>

      
      <form id="exchangeForm" className="relative mx-auto container-md mb-4 lg:mb-5">
        <div className="relative z-2 row gy-4 mb-3 md:mb-4">
          {/* Swap Button */}
          <button
            type="button"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full z-3 flex items-center justify-center p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10.787,8.09A.5.5,0,0,0,10,8.5V11H3a1,1,0,0,0,0,2h7v2.5a.5.5,0,0,0,.787.41l5-3.5a.5.5,0,0,0,0-.82Z" />
              <path d="M5.5,8A.5.5,0,0,0,6,7.5V5h7a1,1,0,0,0,0-2H6V.5A.5.5,0,0,0,5.213.09l-5,3.5a.5.5,0,0,0,0,.82l5,3.5A.5.5,0,0,0,5.5,8Z" />
            </svg>
          </button>

          {/* You Send */}
          <div className="col-12 md:col-6">
            <div className="card">
              <div className="flex justify-between items-center p-3 card-header">
                <p className="text-lg font-medium">You Send</p>
              </div>
              <div className="p-3 lg:p-4 card-body">
                {/* Send Token */}
                <button
                  type="button"
                  className="text-gray-800 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full flex items-center justify-between mb-2"
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/tokens/btc.svg"
                      alt="Bitcoin"
                      width="50"
                      height="50"
                      className="mr-3"
                    />
                    <div>
                      <p className="text-lg font-medium mb-1">Bitcoin</p>
                      <p className="text-sm text-gray-500">BTC</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z" />
                  </svg>
                </button>
                {/* Send Amount */}
                <div className="bg-white border border-gray-300 rounded-lg p-3">
                  <input
                    type="text"
                    placeholder="0.0000"
                    className="bg-transparent w-full text-xl font-medium text-gray-800 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* You Receive */}
          <div className="col-12 md:col-6">
            <div className="card">
              <div className="flex justify-between items-center p-3 card-header">
                <p className="text-lg font-medium">You Receive</p>
              </div>
              <div className="p-3 lg:p-4 card-body">
                {/* Receive Token */}
                <button
                  type="button"
                  className="text-gray-800 bg-white border border-gray-300 rounded-lg px-3 py-2 w-full flex items-center justify-between mb-2"
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/tokens/eth.svg"
                      alt="Ethereum"
                      width="50"
                      height="50"
                      className="mr-3"
                    />
                    <div>
                      <p className="text-lg font-medium mb-1">Ethereum</p>
                      <p className="text-sm text-gray-500">ETH</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z" />
                  </svg>
                </button>
                {/* Receive Amount */}
                <div className="bg-white border border-gray-300 rounded-lg p-3">
                  <input
                    type="text"
                    placeholder="0.0000"
                    className="bg-transparent w-full text-xl font-medium text-gray-800 outline-none"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Receiving Wallet Address */}
        <div className="card">
          <div className="flex justify-between items-center p-3 card-header">
            <p className="text-lg font-medium">Receiving Wallet Address</p>
          </div>
          <div className="p-3 lg:p-4 card-body">
            <input
              type="text"
              placeholder="Enter Wallet Address"
              className="bg-white border border-gray-300 rounded-lg w-full p-3 text-xl font-medium text-gray-800 outline-none"
            />
          </div>
        </div>

        {/* Terms and Submit Button */}
        <div className="flex items-center my-3 lg:my-4">
          <input type="checkbox" required className="mr-2" />
          <p className="text-sm text-gray-500">
            By using the site and creating an exchange, you agree to our{" "}
            <a href="/tos" className="text-primary">Terms of Services</a>.
          </p>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full py-3 text-lg font-bold"
        >
          Exchange
        </button>
        <p className="text-center text-sm text-gray-500 mt-3 lg:mt-4">
          Already have an order number?{" "}
          <a href="/#track" className="text-primary underline">Track your order</a>
        </p>
      </form>
    </section>
  );
};

export default ExchangeCrypto;
