import React from "react";

const RevenueSharingSection = () => {
  return (
    <div className="bg-[#16161c] lg:py-12 py-6 px-4">
      <section className="my-6 lg:my-12 mx-auto ">
        <div className="flex justify-center items-center text-center">
          <div className="xl:w-7/12 lg:w-2/3 w-full">
            <div className="flex flex-col justify-center items-center">
              {/* Title */}
              <p className="text-3xl lg:text-4xl font-bold text-nav_hover font-nav-veil text-center mb-2">
                Revenue Sharing
              </p>
              <h2 className="text-4xl lg:text-[40px] text-gradient font-bold leading-tight mb-6 font-nav-veil">
                How does it work?
              </h2>
              {/* Description */}
              <p className="mb-2 text-gray-300 font-home_header ">
                Our revenue sharing program comes from the distributed profits
                from our Veil Token taxes and our exchange processing. We allocate
                20% of all revenue back to our revenue sharing program. This
                program will airdrop holders* of the Veil Token every 72 hours,
                with the funds that are generated into the RevShare wallet.
              </p>
              <p className="mb-6 italic text-sm text-gray-400 font-home_header">
                *Eligibility: Veil Token Holders holding at least 1,000,000 Veil
                Tokens.
              </p>
              {/* Button */}
              <a
                href="https://etherscan.io/address/0xB9c1a0E52DaeeAf235f3FDFAE0119EAEcaADbd9D"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="px-4 lg:px-6 py-4 font-bold text-nav-text bg-bt_bg rounded-md hover:bg-nav_hover font-home_header transition"
              >
                View RevShare Wallet
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevenueSharingSection;
