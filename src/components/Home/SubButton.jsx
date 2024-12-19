import React from "react";

const SubmitButton = () => {
  return (
    <button
      type="submit"
      value="Submit"
      className="w-full py-3 text-lg font-bold flex items-center justify-center bg-bt_bg hover:bg-[#8671ff] text-white rounded-lg"
    >
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="mr-2 animate-rotatePause"
      >
        <g
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
        >
          <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
          <path d="M23,12A11,11,0,0,1,2.237,17.073" strokeLinecap="butt"></path>
          <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
          <path d="M1,12A11,11,0,0,1,21.763,6.927" strokeLinecap="butt"></path>
        </g>
      </svg>
      Exchange
    </button>
  );
};

export default SubmitButton;
