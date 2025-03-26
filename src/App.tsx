import { useState, useMemo } from 'react'
import { tools, Tool } from './data/tools'
import Header from './components/Header'
import Footer from './components/Footer'
import ToolCard from './components/ToolCard'
import CategoryFilter from './components/CategoryFilter'
import DottedBackground from './components/DottedBackground'
import SubscribeForm from './components/SubscribeForm'
import HeroSection from './components/HeroSection'
import './App.css'
import './styles/notion-cards.css'

function App() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
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
          {filteredTools.length > 0 ? (
            filteredTools.map((tool: Tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl">No tools found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-opacity-90"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        
        <SubscribeForm />
      </main>

      <Footer />
    </DottedBackground>
  )
}

export default App
