import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="text-center py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl mb-6  text-center sm:text-left md:text-center mt-10">
          Welcome to Soma's Toolbox
        </h1>
        <p className="text-xl text-gray-300 mb-10   text-left md:text-center">
          A carefully curated collection of the best tools for creatives,
          developers, and productivity enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black font-bold px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Browse Tools
          </button>
          <button className="bg-transparent border border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors">
            Submit a Tool
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
