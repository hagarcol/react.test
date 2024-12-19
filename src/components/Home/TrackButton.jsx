import React from "react";

const TrackOrderButton = () => {
  return (
    <button
      type="submit"
      value="Submit"
      className="mt-3 sm:mt-0 sm:ml-3 py-4 px-4 md:px-12 font-bold flex items-center bg-bt_bg hover:bg-[#8671ff] text-nav-text rounded-lg transition font-home_header"
    >
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="mr-2"
      >
        <g fill="currentColor">
          <path d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 
          c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 
          C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z"></path>
        </g>
      </svg>
      Track Order
    </button>
  );
};

export default TrackOrderButton;
