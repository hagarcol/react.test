import React, { useState } from "react";
import NavLogo from './../assets/icon/nav-logo.svg'

const NavbarComponent = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="h-100 py-2 bg-nav-bg z-50 fixed top-0 backdrop-blur-[5px] border-b-[1px] border-b-[#343445] flex w-full">
        <div className="px-4 flex justify-between items-center mx-auto w-full">
          <div className="w-1/6 px-3 flex ">
            <a className=" py-5 mr-4 font-nav-veil text-nav-logo text-nav-text flex items-center cursor-pointer" href="/">
              <img src={NavLogo} width={45} color="transparent" alt="Veil Brand Icon" className="mr-2" />
              <span>Veil</span>
            </a>
          </div>

          <div className="hidden lg:flex w-2/3 py-3 items-center justify-center">
            <div className="flex font-home_header text-base text-nav-text items-center ">
              <a href="/" className="px-6 py-2 hover:text-nav_hover">Home</a>
              <a href="/faqs" className="px-6 py-2 hover:text-nav_hover">FAQs</a>
              <a href="/token" className="px-6 py-2 hover:text-nav_hover">Utility Token</a>
              <a href="/revenue" className="px-6 py-2 hover:text-nav_hover">Revenue Share</a>
              <a href="/" className="px-6 py-2 hover:text-nav_hover">How to use</a>
            </div>
          </div>

          <div className=" px-3 flex justify-end items-center">
            <button className="border-nav_hover bg-bt_bg flex px-6 py-4 flex-row float-right rounded-lg cursor-pointer hover:bg-[#8671ff] mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-nav-text me-2"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10"><polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline><path d="M23,12A11,11,0,0,1,2.237,17.073" stroke-linecap="butt"></path><polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline><path d="M1,12A11,11,0,0,1,21.763,6.927" stroke-linecap="butt"></path></g></svg>
              <a className="font-nav-veil text-nav-text text-center text-base font-bold" href="#Exchange">Exchange</a>
            </button>

            {/* Menu Icon (Visible on small screens) */}
            <div
              className="lg:hidden cursor-pointer text-nav-text p-3 border border-slate-700 rounded-md"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>

          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#202029] fixed top-[100px] left-0 w-full z-40 ">
          <div className="flex flex-col items-center py-4 space-y-4 font-home_header text-base text-nav-text">
            <a href="/" className="px-6 py-2 hover:text-nav_hover">
              Home
            </a>
            <a href="/faqs" className="px-6 py-2 hover:text-nav_hover">
              FAQs
            </a>
            <a href="/token" className="px-6 py-2 hover:text-nav_hover">
              Utility Token
            </a>
            <a href="/revenue" className="px-6 py-2 hover:text-nav_hover">
              Revenue Share
            </a>
            <a href="/" className="px-6 py-2 hover:text-nav_hover">
              How to use
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default NavbarComponent;
