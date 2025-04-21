import { useState, useMemo, useEffect } from "react";

import { tools, Tool, fixedCategories } from "../data/tools";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import CategoryFilter from "../components/CategoryFilter";
import DottedBackground from "../components/DottedBackground";
import HeroSection from "../components/HeroSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../App.css";
import "../styles/notion-cards.css";

// Seeded random number generator
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

// Fisher-Yates shuffle with seed
const shuffleWithSeed = (array: Tool[], seed: number): Tool[] => {
  const shuffled = [...array];
  let currentSeed = seed;

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

function ToolboxHome() {
  // Get today's date as seed (year * 10000 + month * 100 + day)
  const todaySeed = useMemo(() => {
    const today = new Date();
    return (
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate()
    );
  }, []);

  // Initialize tools with seeded shuffle
  const [toolsList] = useState<Tool[]>(() => shuffleWithSeed(tools, todaySeed));

  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [customFilters, setCustomFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showAllItems, setShowAllItems] = useState<boolean>(false);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);

  // Filter tools based on both fixed categories and custom filters
  useEffect(() => {
    let filtered = [...toolsList]; // Use toolsList instead of tools

    // Apply fixed category filters (additive)
    if (activeFilters.length > 0) {
      filtered = filtered.filter((tool) =>
        activeFilters.some((filter) => tool.categories.includes(filter))
      );
    }

    // Apply custom filters (restrictive)
    if (customFilters.length > 0) {
      filtered = filtered.filter((tool) =>
        customFilters.every(
          (filter) =>
            tool.categories.some((cat) =>
              cat.toLowerCase().includes(filter.toLowerCase())
            ) ||
            tool.name.toLowerCase().includes(filter.toLowerCase()) ||
            tool.description.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }

    // Apply search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.categories.some((cat) => cat.toLowerCase().includes(searchLower))
      );
    }

    setFilteredTools(filtered);
  }, [activeFilters, customFilters, searchTerm, toolsList]);

  // Get displayed tools (limited to 6 initially, unless showAllItems is true)
  const displayedTools = useMemo(() => {
    return showAllItems ? filteredTools : filteredTools.slice(0, 6);
  }, [filteredTools, showAllItems]);

  // Check if we need to show the "More" button
  const hasMoreItems = filteredTools.length > 6;

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCustomFilterChange = (filters: string[]) => {
    setCustomFilters(filters);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setCustomFilters([]);
    setSearchTerm("");
  };

  return (
    <DottedBackground>
      <Header />

      <main className="max-w-6xl mx-auto py-4 sm:py-6 md:py-8 px-6">
        <HeroSection />

        <CategoryFilter
          categories={fixedCategories}
          activeFilters={activeFilters}
          customFilters={customFilters}
          onFilterChange={handleFilterChange}
          onCustomFilterChange={handleCustomFilterChange}
          onSearchChange={handleSearchChange}
        />

        {(activeFilters.length > 0 ||
          customFilters.length > 0 ||
          searchTerm) && (
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-400">
              Showing {filteredTools.length} of {toolsList.length} tools
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTools.length > 0 ? (
            displayedTools.map((tool: Tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl">
                No tools found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setActiveFilters([]);
                  setCustomFilters([]);
                  setSearchTerm("");
                  setShowAllItems(false);
                }}
                className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-opacity-90"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* "Show More" button - only shown if there are more than 6 items and not all are displayed */}
        {hasMoreItems && !showAllItems && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllItems(true)}
              className="group relative px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden hover:scale-105"
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

              {/* Button text */}
              <span className="relative z-10 flex items-center font-medium text-white">
                Show More ({filteredTools.length - 6} more)
              </span>
            </button>
          </div>
        )}

        {/* Show Less button - only shown when all items are displayed and there are more than 6 */}
        {hasMoreItems && showAllItems && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllItems(false)}
              className="group relative px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden hover:scale-105"
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

              {/* Button text */}
              <span className="relative z-10 flex items-center font-medium text-white">
                Show Less
              </span>
            </button>
            {/* Back to Top button */}
            <ScrollToTopButton className="ml-4" />
          </div>
        )}

        {/* <SubscribeForm /> */}
      </main>

      <Footer />
    </DottedBackground>
  );
}

export default ToolboxHome;
