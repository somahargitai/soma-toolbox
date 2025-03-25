import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeFilter, 
  onFilterChange 
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Filter by category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((filter) => (
          <button 
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === filter 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-white border-gray-500 hover:border-white'
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