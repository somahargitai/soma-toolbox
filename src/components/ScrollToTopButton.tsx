import React from "react";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ className = "" }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <button
      onClick={handleScrollToTop}
      className={`group relative px-4 py-4 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden hover:scale-105 ${className}`}
      aria-label="Back to top"
    >
      {/* Button gradient border */}
      <span
        className="absolute inset-0 rounded-full z-0"
        style={{
          background:
            "linear-gradient(145deg, rgba(130, 100, 255, 0.6), rgba(70, 130, 255, 0.4))",
          opacity: 0.6,
        }}
      ></span>

      {/* Button inner background */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          margin: "2px",
          background:
            "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
          boxShadow:
            "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
        }}
      ></span>

      {/* Button icon */}
      <span className="relative z-10 flex items-center font-medium text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTopButton; 