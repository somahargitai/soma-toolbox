import React, { useState, useEffect, useRef } from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  isMobile?: boolean;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = "",
  isMobile,
}) => {
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update scroll button visibility
  useEffect(() => {
    const updateScrollButtons = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const hasOverflow = container.scrollWidth > container.clientWidth;
        // const isDesktop = window.innerWidth >= 960;
        const isDesktop = !isMobile;

        if (hasOverflow && isDesktop) {
          setShowLeftScroll(container.scrollLeft > 0);
          setShowRightScroll(
            container.scrollLeft < container.scrollWidth - container.clientWidth
          );
        } else {
          setShowLeftScroll(false);
          setShowRightScroll(false);
        }
      }
    };

    // Update on load and resize
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);

    // Update on scroll
    scrollContainerRef.current?.addEventListener("scroll", updateScrollButtons);

    return () => {
      window.removeEventListener("resize", updateScrollButtons);
      scrollContainerRef.current?.removeEventListener(
        "scroll",
        updateScrollButtons
      );
    };
  }, []);

  return (
    <div className={`w-full max-w-[960px] mx-auto relative group ${className}`}>
      {/* Left Scroll Button */}
      {!isMobile && (
        <button
          onClick={() => {
            const container = scrollContainerRef.current;
            if (container) {
              container.scrollBy({ left: -200, behavior: "smooth" });
            }
          }}
          className={`
          hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10
          hover:bg-black hover:bg-opacity-10 rounded-full p-2 transition-all duration-300
          hover:border hover:border-white
          hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:rounded-full
          hover:before:bg-black hover:before:bg-opacity-10 hover:before:animate-pulse ${
            showLeftScroll ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Scrollable Container */}
      <div className={`${!isMobile ? "mx-12" : "mx-0"}`}>
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Left fade effect */}
          {!isMobile && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r to-transparent pointer-events-none"></div>
          )}
          {/* Right fade effect */}
          {!isMobile && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l to-transparent pointer-events-none"></div>
          )}

          {/* Container content */}
          <div className="flex gap-2 min-w-max">{children}</div>
        </div>
      </div>

      {/* Right Scroll Button */}
      {!isMobile && (
        <button
          onClick={() => {
            const container = scrollContainerRef.current;
            if (container) {
              container.scrollBy({ left: 200, behavior: "smooth" });
            }
          }}
          className={`
          hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10
          hover:bg-black hover:bg-opacity-10 rounded-full p-2 transition-all duration-300
          hover:border hover:border-white
          hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:rounded-full
          hover:before:bg-black hover:before:bg-opacity-10 hover:before:animate-pulse ${
            showRightScroll ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
