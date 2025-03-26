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
  const [tagsModalOpen, setTagsModalOpen] = useState(false);
  const [modalMounted, setModalMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Manage modal mounting/unmounting with a slight delay on close
  useEffect(() => {
    if (tagsModalOpen) {
      setModalMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      // Small delay to allow for exit animation
      const timer = setTimeout(() => {
        setModalMounted(false);
      }, 300);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [tagsModalOpen]);

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

  const toggleTagsModal = () => {
    setTagsModalOpen(!tagsModalOpen);
  };

  const handleTagSelect = (filter: string) => {
    onFilterChange(filter);
    setTagsModalOpen(false);
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
          <>
            {/* Buttons Container for Mobile */}
            <div className="flex flex-col w-full gap-2 md:hidden">
              {/* Custom Search Button with Rainbow outline - Mobile Full Width */}
              <button
                onClick={toggleSearch}
                className="group relative px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300 mb-2 sm:mb-0 overflow-hidden hover:scale-105 w-full"
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
                    background:
                      "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                    boxShadow:
                      "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
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
  
              {/* Tag Filter Button for Mobile - Full Width */}
              <button
                onClick={toggleTagsModal}
                className="group relative px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300 mb-2 sm:mb-0 overflow-hidden hover:scale-105 w-full"
                style={{ padding: "0.6rem 1.2rem" }}
              >
                {/* Gradient border with glow effect */}
                <span
                  className="absolute inset-0 rounded-full z-0"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(130, 100, 255, 0.6), rgba(70, 130, 255, 0.4))",
                    opacity: 0.6,
                  }}
                ></span>
  
                {/* Inner background */}
                <span
                  className="absolute inset-0 rounded-full animate-pulse-slow"
                  style={{
                    margin: "2px",
                    background:
                      "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                    boxShadow:
                      "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
                  }}
                ></span>
  
                {/* Button Content */}
                <span className="relative z-10 flex items-center font-medium">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    ></path>
                  </svg>
                  <span
                    style={{
                      background: "linear-gradient(to right, #a5cbff, #ffffff)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Tag Search{" "}
                    {activeFilter !== "all" && (
                      <span className="ml-1 font-semibold">({activeFilter})</span>
                    )}
                  </span>
                </span>
              </button>
            </div>

            {/* Custom Search Button for Desktop Only */}
            <button
              onClick={toggleSearch}
              className="hidden md:flex group relative px-4 py-2 rounded-full items-center transition-all duration-300 mb-2 sm:mb-0 overflow-hidden hover:scale-105"
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
                  background:
                    "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                  boxShadow:
                    "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
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

            {/* Category Filters - Desktop Only */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((filter) => (
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
          </>
        )}
      </div>

      {/* Full-Screen Tag Modal for Mobile - Conditionally rendered */}
      {modalMounted && (
        <div
          ref={modalRef}
          className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col md:hidden transition-opacity duration-300 ease-in-out ${
            tagsModalOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-300 to-white text-transparent bg-clip-text">
                Choose a Tag
              </span>
            </h3>
            <button
              onClick={toggleTagsModal}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <svg
                className="w-6 h-6"
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
          </div>

          <div className="p-6 overflow-auto flex-1">
            <p className="text-gray-400 mb-6">
              Selected tag:{" "}
              <span className="text-white font-medium">{activeFilter}</span>
            </p>

            <div className="grid grid-cols-2 gap-4 h-auto">
              {categories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleTagSelect(filter)}
                  className={`p-4 rounded-lg border text-center transition-colors duration-200`}
                  style={{
                    background:
                      activeFilter === filter
                        ? "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1))"
                        : "linear-gradient(145deg, rgba(30, 30, 40, 0.4), rgba(15, 15, 25, 0.6))",
                    borderColor:
                      activeFilter === filter
                        ? "white"
                        : "rgba(100, 100, 150, 0.3)",
                    color: activeFilter === filter ? "black" : "white",
                    boxShadow:
                      activeFilter === filter
                        ? "0 4px 12px rgba(255, 255, 255, 0.3)"
                        : "none",
                  }}
                >
                  <div className="flex items-center justify-center">
                    {activeFilter === filter && (
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
