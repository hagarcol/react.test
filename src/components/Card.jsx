import React from "react";
import homecard1 from './../assets/img/home-card-1.webp'

const Card = () => {
  return (
    <div className="card border border-gray-200 shadow-md rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="card-header bg-[#2d2d39] flex items-center justify-center">
        <div className="transform">
          <img
            alt="Privacy Driven"
            loading="lazy"
            width="auto"
            height="150px"
            // decoding="async"
            // className="m-auto block my-3 lg:my-4"
            srcSet={homecard1}
            // src={homecard1}
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3 lg:p-4 card-body text-center">
        <h3 className="text-lg font-semibold">Privacy-Driven</h3>
        <p className="text-muted text-gray-500 mb-0">
          Anonymized exchange with no sign-ups or limits.
        </p>
      </div>
    </div>
  );
};

export default Card;
