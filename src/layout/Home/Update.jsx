import React from "react";
import GradientText from "../../components/Home/TextGradient";
import homecard1 from './../../assets/img/beer.webp';
import homecard2 from './../../assets/img/daddy.webp';
import homecard3 from './../../assets/img/cati.webp';

const Updates = () => {
  return (
    <div className="flex flex-col justify-center bg-[#16161c]">
      <div className="lg:my-12 lg:py-12 my-6 py-6 lg:mx-auto px-4 max-w-screen-xl">
        <div className="lg:mb-12 mb-6 font-nav-veil text-nav-text text-4xl lg:text-[40px] pb-2">
          <GradientText text={"Lastest Updates"} />
        </div>

        <div className="flex flex-col md:flex-row items-center w-full">

          <div className="md:w-1/3 px-3 w-full">
            <div className="card shadow-md rounded-lg overflow-hidden">
              {/* Card Header */}
              <div className="card-header bg-[#2d2d39] flex items-center justify-center px-4 py-2">
                <div className="contain my-6 mx-[92px]">
                  <img className="object-contain animate-move-up-down"
                    alt="Privacy Driven"
                    loading="lazy"
                    width={100}
                    // srcSet={homecard1}
                    src={homecard1}
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 pt-6 card-body text-center">
                <div className="border-none rounded-lg p-1 bg-[#8671ff] inline-block text-[15px] text-nav-text font-nav-veil font-bold mb-3">NEW RELEASE</div>
                <h3 className="text-[28px] font-bold font-nav-veil text-white mb-2">New Token Supported:</h3>
                <p className="text-[28px] font-bold text-nav_hover font-nav-veil mb-2">
                  BEERCOIN(SOL)
                </p> 
                <hr className="text-nav-text contrast-[0.01]"/>
                <div className="p-3 font-home_header text-base text-nav-text contrast-[.2]">Released: 04/12/24</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 px-3 w-full md:my-0 my-4">
            <div className="card shadow-md rounded-lg overflow-hidden">
              {/* Card Header */}
              <div className="card-header bg-[#2d2d39] flex items-center justify-center px-4 py-2">
                <div className="contain my-6 mx-[92px]">
                  <img className="object-contain animate-move-up-down"
                    alt="Privacy Driven"
                    loading="lazy"
                    // srcSet={homecard1}
                    src={homecard2}
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 pt-6 card-body text-center">
                <div className="border-none rounded-lg p-1 bg-[#8671ff] inline-block text-[15px] text-nav-text font-nav-veil font-bold mb-3">NEW RELEASE</div>
                <h3 className="text-[28px] font-bold font-nav-veil text-white mb-2">New Token Supported:</h3>
                <p className="text-[28px] font-bold text-nav_hover font-nav-veil mb-2">
                  Daddy Tate(SOL)
                </p> 
                <hr className="text-nav-text contrast-[0.01]"/>
                <div className="p-3 font-home_header text-base text-nav-text contrast-[.2]">Released: 04/12/24</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 px-3 w-full">
            <div className="card shadow-md rounded-lg overflow-hidden">
              {/* Card Header */}
              <div className="card-header bg-[#2d2d39] flex items-center justify-center px-4 py-2">
                <div className="contain my-6 mx-[92px]">
                  <img className="object-contain animate-move-up-down"
                    alt="Privacy Driven"
                    loading="lazy"
                    // srcSet={homecard1}
                    src={homecard3}
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 pt-6 card-body text-center">
                <div className="border-none rounded-lg p-1 bg-[#8671ff] inline-block text-[15px] text-nav-text font-nav-veil font-bold mb-3">NEW RELEASE</div>
                <h3 className="text-[28px] font-bold font-nav-veil text-white mb-2">New Token Supported:</h3>
                <p className="text-[28px] font-bold text-nav_hover font-nav-veil mb-2">
                  Catizen(TON)
                </p> 
                <hr className="text-nav-text contrast-[0.01]"/>
                <div className="p-3 font-home_header text-base text-nav-text contrast-[.2]">Released: 04/12/24</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Updates;