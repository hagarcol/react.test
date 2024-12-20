import React from "react";
import HeaderBG from './../../assets/background/herobackground.webm'

const Header = () => {

  const GradientText = () => {
    return (
      <div className="flex items-center justify-center">
        <h1 className="lg:text-[64px] text-5xl font-bold text-gradient">
          Crypto Exchange
        </h1>
      </div>
    );
  };

  return (
    <div className=" w-full overflow-hidden text-center lg:pt-[240px] sm:pb-[100px] pt-[140px]">
      {/* Background Video */}

      <div className="relative z-[3] px-4 mx-auto max-w-screen-sm ">
        <div className="mb-6 font-nav-veil lg:text-[64px] font-bold text-5xl">
          <div className="text-nav_hover">Privacy Driven</div>
          <GradientText />
        </div>
        <div className="font-home_header text-home_text font-normal text-xl leading-loose">
          Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless security and privacy. No sign-up or limits.
        </div>
        <a className="font-home_header text-home_text font-normal text-xl leading-loose" href="/token">Powered by our Veil utility token.</a>
        <div className="mt-6 mb-2">
          <a class="h5 mt-3 mt-lg-4 text-white flex items-center justify-center font-nav-veil font-bold leading-tight text-xl" href="#Exchange">
            <span class="underline underline-offset-8">Try the Exchange Now </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10"><line x1="2" y1="12" x2="15" y2="12"></line><polygon points="15 17 15 7 22 12 15 17"></polygon></g></svg>
          </a>
        </div>
        <div className="lg:mt-[48px] mt-6 sm:mx-[-8px] w-full flex sm:flex-row flex-col ">
          <div className="mt-4 px-2 sm:w-2/4 ">
            <div className="p-4 rounded-lg border-nav-text border ">
              <div className="mb-2 font-home_header text-sm font-normal text-[#dedede]">LIFETIME VOLUME SWAPPED</div>
              <div className="font-nav-veil text-2xl text-nav_hover font-bold leading-normal">$NaN</div>
            </div>
          </div>

          <div className="mt-4 px-2 sm:w-2/4 ">
            <div className="p-4 rounded-lg border-nav-text border ">
              <div className="mb-2 font-home_header text-sm font-normal text-[#dedede]">PAST 24-HOUR VOLUME</div>
              <div className="font-nav-veil text-2xl text-nav_hover font-bold leading-normal">$NaN</div>
            </div>
          </div>
        </div>
      </div>

      <video
        className="absolute top-0 left-0 h-[850px] object-cover lg:h-[892px]"
        style={{ width: 'inherit' }}
        autoPlay
        loop
        muted
        playsInline
        poster={HeaderBG}
      >
        <source src={HeaderBG} type="video/webm" />
      </video>

    </div>
  );
};

export default Header;
