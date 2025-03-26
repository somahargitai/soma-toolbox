import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="text-center py-2 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl mb-6  text-center sm:text-left md:text-center">
          Welcome to Soma's Toolbox
        </h1>
        <p className="text-xl text-gray-300 mb-10   text-left md:text-center">
          A carefully curated collection of the best tools for creatives,
          developers, and productivity enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
