import React from "react";
import GradientText from "../../components/Home/TextGradient";
import TrackOrderButton from "../../components/Home/TrackButton";

const TrackOrder = () => {
  return (
    <div className=" flex flex-col bg-[#16161c]">
      <div className="lg:my-12 lg:py-12 my-6 py-6 max-w-screen-lg sm:mx-auto px-4">

        <div className="mb-2 font-nav-veil text-[40px] text-nav-text ">
          <GradientText text={"Track your Order"} />
        </div>

        <div className="lg:mb-12 mb-6 font-home_header text-base text-home_text text-center">
          Already have an order number? Check the status of your order
        </div>

        <div className="px-3 flex font-bold">
          <div className="card shadow-md rounded-lg overflow-hidden bg-[#343445] contrast-[1] w-full">
            <div className="p-4 card-body flex sm:items-center flex-col sm:flex-row">
              <div className="rounded-lg px-4 py-4 bg-[#16161c]">
                {/* <img src={homebtn} width={50} height={50} /> */}
                <input 
                  name="send" 
                  placeholder="#6PCF012721" 
                  required="" 
                  type="text" 
                  id="exchangeForm.SendAmount" 
                  className="bg-transparent h4 fs-4 text-white mb-0 focus:outline-none font-nav-veil text-[24px] " 
                  value="" 
                  />
              </div>

              <div className="ml-4">
                <TrackOrderButton />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TrackOrder;