import React, { useState, useEffect, useRef } from "react";

interface CategoryFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onSearchChange?: (searchTerm: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeFilter,
  onFilterChange,
  onSearchChange,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen && searchTerm && onSearchChange) {
      // Reset search when closing
      setSearchTerm("");
      onSearchChange("");
    }
  };

  const handleSearch = () => {
    if (onSearchChange) {
      // Only apply search if there's actually something to search for
      // Otherwise, reset any existing search filter
      onSearchChange(searchTerm || "");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Filter by category</h2>
      <div className="flex flex-wrap gap-2 items-center">
        {searchOpen ? (
          <div className="flex items-center mb-2 sm:mb-0 w-full">
            {/* Back Button */}
            <button
              onClick={toggleSearch}
              className="px-4 py-2 rounded-full text-md border border-gray-500 hover:border-white flex items-center transition-all duration-300"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back
            </button>

            {/* Search Input */}
            <div className="relative flex items-center flex-1 ml-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                className="bg-black bg-opacity-20 text-white px-4 py-2 rounded-l-full w-full outline-none transition-all duration-300 ease-in-out"
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
                className="bg-white text-black px-4 py-2 rounded-r-full flex items-center font-medium hover:bg-opacity-90 transition-colors"
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
            </div>
          </div>
        ) : (
          // Custom Search Button with Rainbow outline
          <button
            onClick={toggleSearch}
            className="group relative px-4 py-2 rounded-full flex items-center transition-all duration-300 mb-2 sm:mb-0 overflow-hidden hover:scale-105"
            style={{ padding: "0.6rem 1.2rem" }}
          >
            {/* Rainbow border with glow effect - visible but more subtle in default state */}
            <span 
              className="absolute inset-0 rainbow-button-border opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "saturate(0.7)" }}
            ></span>
            <span 
              className="absolute inset-0 rainbow-button-border rainbow-button-glow opacity-30 group-hover:opacity-70 transition-opacity duration-300"
              style={{ filter: "saturate(0.5)" }}
            ></span>

            {/* Animated subtle gradient background */}
            <span
              className="absolute inset-0 rounded-full animate-pulse-slow"
              style={{
                margin: "2px",
                background: "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)"
              }}
            ></span>

            {/* Button Content */}
            <span className="relative z-10 flex items-center font-medium">
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
        )}

        {/* Category Filters */}
        {!searchOpen &&
          categories.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 mb-2 sm:mb-0 ${
                activeFilter === filter
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-gray-500 hover:border-white"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
