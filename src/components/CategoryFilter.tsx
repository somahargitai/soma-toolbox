import React, { useState, useEffect, useRef } from "react";
import HorizontalScroll from "./HorizontalScroll";

interface CategoryFilterProps {
  categories: string[];
  activeFilters: string[];
  customFilters: string[];
  onFilterChange: (filters: string[]) => void;
  onCustomFilterChange: (filters: string[]) => void;
  onSearchChange?: (searchTerm: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeFilters,
  customFilters,
  onFilterChange,
  onCustomFilterChange,
  onSearchChange,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] =
    useState(-1);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Update recommendations based on search term
  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = categories
        .filter(
          (cat) =>
            cat.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !customFilters.includes(cat)
        )
        .slice(0, 5);
      setRecommendations(filtered);
    } else {
      setRecommendations([]);
    }
  }, [searchTerm, categories, customFilters]);

  // Update scroll button visibility
  useEffect(() => {
    const updateScrollButtons = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const hasOverflow = container.scrollWidth > container.clientWidth;
        const isDesktop = window.innerWidth >= 768;
        
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
    window.addEventListener('resize', updateScrollButtons);
    
    // Update on scroll
    scrollContainerRef.current?.addEventListener('scroll', updateScrollButtons);

    return () => {
      window.removeEventListener('resize', updateScrollButtons);
      scrollContainerRef.current?.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen && searchTerm && onSearchChange) {
      setSearchTerm("");
      onSearchChange("");
    }
  };

  const handleSearch = () => {
    if (onSearchChange) {
      onSearchChange(searchTerm || "");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (selectedRecommendationIndex >= 0 && recommendations.length > 0) {
        // Add the selected recommendation as a custom filter
        const selectedCategory = recommendations[selectedRecommendationIndex];
        addCustomFilter(selectedCategory);
      } else if (searchTerm.trim()) {
        // Add the typed text as a new custom filter
        addCustomFilter(searchTerm.trim());
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedRecommendationIndex((prev) =>
        prev < recommendations.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedRecommendationIndex((prev) => (prev > 0 ? prev - 1 : -1));
    }
  };

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      onFilterChange([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    onFilterChange(activeFilters.filter((f) => f !== filter));
  };

  const addCustomFilter = (filter: string) => {
    if (!customFilters.includes(filter)) {
      onCustomFilterChange([...customFilters, filter]);
    }
    setSearchTerm("");
    setRecommendations([]);
    setSelectedRecommendationIndex(-1);
  };

  const removeCustomFilter = (filter: string) => {
    onCustomFilterChange(customFilters.filter((f) => f !== filter));
  };

  const handleRecommendationClick = (category: string) => {
    addCustomFilter(category);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center hidden md:block">
        Categories
      </h2>
      <div className="flex flex-col gap-4">
        {/* Category Filters - Always visible and horizontally scrollable */}
        <HorizontalScroll>
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                if (activeFilters.includes(filter)) {
                  removeFilter(filter);
                } else {
                  addFilter(filter);
                }
              }}
              className={`px-4 py-2 rounded-full border transition-all duration-200 mb-2 sm:mb-0 ${
                activeFilters.includes(filter)
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-gray-500 hover:border-white"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </HorizontalScroll>

        {/* Search Section */}
        {searchOpen ? (
          <div className="flex flex-col w-full gap-2">
            <div className="flex items-center justify-center w-full">
              {/* Back Button */}
              <button
                onClick={toggleSearch}
                className="px-4 py-2 rounded-full text-md border border-gray-500 hover:border-white flex items-center transition-all duration-300 shrink-0"
              >
                <svg
                  className="w-4 h-4 md:mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
                <span className="hidden md:inline">Back</span>
              </button>

              {/* Search Input with Recommendations */}
              <div className="relative flex items-center ml-4 max-w-[400px] w-full">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  className="bg-black bg-opacity-20 text-white px-4 py-2 rounded-l-full outline-none transition-all duration-300 ease-in-out max-w-[400px] w-full"
                  style={{
                    border: `1px solid ${
                      inputFocused
                        ? "rgba(255, 255, 255, 0.8)"
                        : "rgba(255, 255, 255, 0.1)"
                    }`,
                    boxShadow: inputFocused
                      ? "0 0 0 1px rgba(255, 255, 255, 0.2)"
                      : "none",
                    backdropFilter: "blur(4px)",
                  }}
                />

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-white text-black px-4 py-2 rounded-r-full flex items-center font-medium hover:bg-opacity-90 transition-colors shrink-0"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  Go
                </button>

                {/* Recommendations Dropdown */}
                {recommendations.length > 0 && (
                  <div
                    ref={recommendationsRef}
                    className="absolute top-full left-0 max-w-[400px] w-full mt-2 bg-gray-900 bg-opacity-95 rounded-lg shadow-lg z-50"
                    style={{
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    {recommendations.map((category, index) => (
                      <button
                        key={category}
                        onClick={() => handleRecommendationClick(category)}
                        className={`w-full px-4 py-2 text-left hover:bg-white hover:bg-opacity-10 transition-colors ${
                          index === selectedRecommendationIndex
                            ? "bg-white bg-opacity-20"
                            : ""
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Custom Filters Display */}
            {customFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {customFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => removeCustomFilter(filter)}
                    className="px-4 py-2 rounded-full bg-red-500 text-white border-red-500 flex items-center group"
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    <svg
                      className="w-4 h-4 ml-2 group-hover:text-red-800 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Buttons Container for Mobile */}
            <div className="flex flex-col w-full gap-2 md:hidden">
              {/* Custom Search Button with Rainbow outline - Mobile Full Width */}
              <button
                onClick={toggleSearch}
                className="group relative px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300 mb-2 sm:mb-0 overflow-hidden hover:scale-105 w-full border-0"
                style={{ padding: "0.6rem 1.2rem" }}
              >
                {/* Rainbow border with glow effect - visible but more subtle in default state */}
                <span
                  className="absolute inset-0 rainbow-button-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "saturate(0.7)" }}
                ></span>
                <span
                  className="absolute inset-0 rainbow-button-border rainbow-button-glow opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ filter: "saturate(0.5)" }}
                ></span>

                {/* Animated subtle gradient background */}
                <span
                  className="absolute inset-0 rounded-full animate-pulse-slow"
                  style={{
                    margin: "2px",
                    background:
                      "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                    boxShadow: "none",
                  }}
                ></span>

                {/* Button Content */}
                <span className="relative z-10 flex items-center font-medium text-lg">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="text-gradient group-hover:opacity-100 opacity-90 transition-opacity duration-300 text-lg">
                    Custom Search
                  </span>
                </span>
              </button>

              {/* Custom Filters Display */}
              {customFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {customFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => removeCustomFilter(filter)}
                      className="px-4 py-2 rounded-full bg-red-500 text-white border-red-500 flex items-center group"
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      <svg
                        className="w-4 h-4 ml-2 group-hover:text-red-800 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Custom Search Button for Desktop Only */}
            <div className="hidden md:flex flex-col items-center gap-2 mt-2">
              <button
                onClick={toggleSearch}
                className="group relative px-4 py-2 rounded-full items-center mb-2 sm:mb-0 overflow-hidden border-2 border-blue-500 group-hover:border-transparent hover:scale-105 hover:border-transparent transition-colors duration-500"
                style={{ padding: "0.6rem 1.2rem" }}
              >
                {/* Rainbow border with glow effect - visible but more subtle in default state */}
                <span
                  className="absolute inset-0 rainbow-button-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: "saturate(0.7)" }}
                ></span>
                <span
                  className="absolute inset-0 rainbow-button-border rainbow-button-glow opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ filter: "saturate(0.5)" }}
                ></span>

                {/* Animated subtle gradient background */}
                <span
                  className="absolute inset-0 rounded-full animate-pulse-slow"
                  style={{
                    margin: "2px",
                    background:
                      "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                    boxShadow: "none",
                  }}
                ></span>

                {/* Button Content */}
                <span className="relative z-10 flex items-center font-medium ">
                  <svg
                    className="w-4 h-4 mr-2 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="text-gradient group-hover:opacity-100 opacity-90 transition-opacity duration-300">
                    Custom Search
                  </span>
                </span>
              </button>

              {/* Custom Filters Display */}
              {customFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {customFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => removeCustomFilter(filter)}
                      className="px-4 py-2 rounded-full bg-red-500 text-white border-red-500 flex items-center group"
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      <svg
                        className="w-4 h-4 ml-2 group-hover:text-red-800 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
