import { useState, useMemo, useEffect } from 'react'
import { tools, Tool } from './data/tools'
import Header from './components/Header'
import Footer from './components/Footer'
import ToolCard from './components/ToolCard'
import CategoryFilter from './components/CategoryFilter'
import DottedBackground from './components/DottedBackground'
import SubscribeForm from './components/SubscribeForm'
import HeroSection from './components/HeroSection'
import { getAssetPath } from './utils/path'
import './App.css'
import './styles/notion-cards.css'

function App() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAllItems, setShowAllItems] = useState<boolean>(false);
  
  // Log base path for debugging
  useEffect(() => {
    console.log('Base path test:', {
      placeholder: getAssetPath('/images/tools/placeholder.svg'),
      highQualityImage: getAssetPath('/images/tools/high-quality-image.avif'),
      testImage: getAssetPath('/images/tools/test.png')
    });
  }, []);
  
  // Filter tools based on the active category and search term
  const filteredTools = useMemo(() => {
    let filtered = tools;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(tool => tool.categories.includes(activeFilter));
    }
    
    // Apply search term filter only if there's a non-empty search term
    if (searchTerm && searchTerm.trim() !== '') {
      const lowercaseSearch = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        tool => 
          tool.name.toLowerCase().includes(lowercaseSearch) || 
          tool.description.toLowerCase().includes(lowercaseSearch) ||
          tool.categories.some(category => category.toLowerCase().includes(lowercaseSearch))
      );
    }
    
    return filtered;
  }, [activeFilter, searchTerm]);
  
  // Get unique categories from all tools
  const categories = useMemo(() => {
    const allCategories = tools.flatMap(tool => tool.categories);
    return ['all', ...Array.from(new Set(allCategories))];
  }, []);

  // Get displayed tools (limited to 6 initially, unless showAllItems is true)
  const displayedTools = useMemo(() => {
    return showAllItems ? filteredTools : filteredTools.slice(0, 6);
  }, [filteredTools, showAllItems]);

  // Check if we need to show the "More" button
  const hasMoreItems = filteredTools.length > 6;

  return (
    <DottedBackground> 
      <Header />

      <main className="max-w-6xl mx-auto py-4 sm:py-6 md:py-8 px-6">
        <HeroSection />
        
        <CategoryFilter 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onSearchChange={setSearchTerm}
        />

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTools.length > 0 ? (
            displayedTools.map((tool: Tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl">No tools found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                  setShowAllItems(false);
                }}
                className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-opacity-90"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
        {/* "More" button - only shown if there are more than 6 items and not all are displayed */}
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
                  background: "linear-gradient(145deg, rgba(130, 100, 255, 0.6), rgba(70, 130, 255, 0.4))",
                  opacity: 0.6,
                }}
              ></span>
              
              {/* Button inner background */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  margin: "2px",
                  background: "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
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
                  background: "linear-gradient(145deg, rgba(130, 100, 255, 0.6), rgba(70, 130, 255, 0.4))",
                  opacity: 0.6,
                }}
              ></span>
              
              {/* Button inner background */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  margin: "2px",
                  background: "linear-gradient(145deg, rgba(25, 25, 35, 0.8), rgba(10, 10, 15, 0.95))",
                  boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
                }}
              ></span>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center font-medium text-white">
                Show Less
              </span>
            </button>
          </div>
        )}
        
        <SubscribeForm />
      </main>

      <Footer />
    </DottedBackground>
  )
}

export default App
