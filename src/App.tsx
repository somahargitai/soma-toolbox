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
  
  // Filter tools based on the active category
  const filteredTools = useMemo(() => {
    if (activeFilter === 'all') {
      return tools;
    }
    return tools.filter(tool => tool.categories.includes(activeFilter));
  }, [activeFilter]);
  
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
        />

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool: Tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        <SubscribeForm />
      </main>

      <Footer />
    </DottedBackground>
  )
}

export default App
