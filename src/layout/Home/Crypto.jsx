import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModal,
  setSelectedToken,
  setSearchQuery,
  initializeTokens,
  isModalClose,
} from "../../redux/store/CryptoSlice";
import SubmitButton from "../../components/Home/SubButton";
import GradientText from "../../components/Home/TextGradient";

const Crypto = () => {

  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const {
    isModalOpen,
    selectedToken,
    receiveToken,
    searchQuery,
    tokenList,
  } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(initializeTokens());
  }, [dispatch]);

  const filteredTokens = tokenList.filter((token) =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(isModalClose());
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div id="Exchange" className="lg:my-12 lg:py-12 my-6 py-6 max-w-screen-xl px-4 flex flex-col lg:mx-auto">
      <div className="lg:mb-12 mb-6 font-nav-veil lg:text-[40px] text-4xl text-nav-text">
        <GradientText className="mb-2" text={"Exchange Crypto"} />
      </div>
      
      {/* Exchange Form */}
      <form className="w-full flex md:flex-row flex-col justify-between">
        {/* You Send */}
        <div className="px-3 md:w-1/2 font-bold">
          <div className="shadow-md shadow-slate-700 rounded-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-[#2d2d39] flex items-center px-4 py-2 h-full relative">
              <p className="text-xl text-nav-text font-nav-veil font-bold">You Send</p>
            </div>

            {/* Card Body */}
            <div className="p-6 card-body">
              {/* Send Token */}
              <button
                type="button"
                className="rounded-lg px-6 py-4 bg-[#343445] flex mb-2 w-full items-center justify-between text-nav-text"
                onClick={() => dispatch(toggleModal('send'))}
              >
                <div className="flex items-center">
                  <img src={selectedToken?.icon} width={40} height={40} alt={selectedToken?.name} />
                  <div className="pl-4">
                    <div className="font-nav-veil text-[20px] font-bold mb-1">{selectedToken?.name}</div>
                    <div className="font-home_header text-[16px] font-semibold mb-1 contrast-[.3]">{selectedToken?.symbol}</div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z" />
                </svg>
              </button>

              {/* Send Amount */}
              <div className="rounded-lg px-6 py-4 bg-[#343445] flex mb-2">
                <div className="pl-4">
                  <input
                    placeholder="0.0000"
                    type="text"
                    id="exchangeForm.SendAmount"
                    className="bg-transparent h4 fs-4 text-white mb-0 focus:outline-none font-nav-veil text-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 md:w-2/4 font-bold md:mt-0 mt-[20px]">
          <div className="relative shadow-md shadow-slate-700 rounded-lg overflow-hidden">
            {/* Card Header */}
            <div className="card-header bg-[#2d2d39] flex items-center px-4 py-2 h-full relative">
              <p className="text-xl text-nav-text font-nav-veil font-bold">
                You Receive
              </p>
            </div>

            {/* Card Body */}
            <div className="p-6 card-body">
              
              {/* Receive Token */}
              <button
                type="button" 
                className="rounded-lg px-6 py-4 bg-[#343445] flex mb-2 w-full items-center justify-between text-nav-text"
                onClick={() => dispatch(toggleModal('receive'))}
              >
                <div className="flex items-center">
                  <img src={receiveToken?.icon} width={40} height={40} alt={receiveToken?.name}/>
                  <div className="pl-4">
                    <div className="font-nav-veil  text-[20px] font-bold mb-1">{receiveToken?.name}</div>
                    <div className="font-home_header  text-[16px] font-semibold mb-1 contrast-[.3]">{receiveToken?.symbol}</div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z" />
                </svg>                
              </button>

              {/* Receive Amount */}
              <div className="rounded-lg px-6 py-4 bg-[#343445] flex mb-2">
                <div className="pl-4">
                  <input 
                    placeholder="0.0000" 
                    type="text" 
                    id="exchangeForm.SendAmount" 
                    className="bg-transparent h4 fs-4 text-white mb-0 focus:outline-none font-nav-veil text-[24px]" 
                    readOnly
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </form>

      {/* Receiving Wallet Address */}
      <div className="px-3 mt-[20px]">
        <div className="card shadow-md shadow-slate-700 rounded-lg overflow-hidden w-full">
          {/* Card Header */}
          <div className="card-header bg-[#2d2d39] flex items-center px-4 py-2">
            <p className="text-xl text-nav-text font-nav-veil font-bold">
              Receiving Wallet Address 
            </p>
          </div>

          {/* Card Body */}
          <div className="p-6 card-body">

            <div className="rounded-lg px-6 py-4 bg-[#343445] flex">
              <div className="pl-4">
                <input 
                  placeholder="Enter Wallet Address" 
                  type="text" 
                  id="exchangeForm.SendAmount" 
                  className="bg-transparent h4 fs-4 text-white mb-0 focus:outline-none font-nav-veil text-[24px] font-bold" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="px-3 flex w-full my-6 items-center ">
        <input required="" type="checkbox" 
          className="form-check-input 
            w-4 h-4 
            border-[#16161c]
            border
            bg-[#16161c]
            checked:border-blue-500
            rounded" 
        />
        <p className="font-home_header text-[#dedede] font-medium ml-2 contrast-[.4]">By using the site and creating an exchange, you agree to our <span className="text-nav_hover"><a href="/">Terms of Services</a></span> </p>
      </div>

      {/* SubmitButtion */}
      <div className="px-3 w-full">
        <SubmitButton />
      </div>

      {/* Track */}
      <div className="flex w-full justify-center my-6">
      <p className="font-home_header text-[#dedede] font-medium ml-2 contrast-[.4]">Already have an order number? <span className="text-nav_hover underline"><a href="/">Track your order</a></span> </p>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2d2d39] rounded-lg max-w-screen-md px-6 w-full overflow-auto mx-4 h-2/3" ref={modalRef}>
            <div className="sticky top-0 bg-[#2d2d39] p-4 z-10">
              <div className="flex justify-between items-center mb-4 border-b border-gray-600">
                <h2 className="text-4xl font-bold text-nav-text font-nav-veil">Select Crypto to Send</h2>
                <button onClick={() => dispatch(isModalClose())} className="text-white text-5xl">&times;</button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="w-full px-4 py-4 rounded-md bg-[#343445] text-white placeholder-gray-400 focus:outline-none mb-4 font-nav-veil text-xl"
            />
            <div className="flex flex-col space-y-4">
              {( filteredTokens.length > 0) ? (
                filteredTokens.map((token) => (
                  <button
                    key={token.symbol}
                    className="flex items-center justify-between bg-[#343445] p-3 rounded-md text-white"
                    onClick={() => {
                      dispatch(setSelectedToken(token));
                      dispatch(isModalClose());
                    }}
                  >
                    <div className="flex items-center">
                      <img src={token.icon} width={50} height={50} alt={token.symbol} />
                      <div className="pl-4">
                        <div className="font-nav-veil text-[20px] font-bold">{token.name}</div>
                        <div className="font-home_header text-[16px] font-semibold mb-1 contrast-[.3]">{token.symbol}</div>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-400">No tokens found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crypto;
