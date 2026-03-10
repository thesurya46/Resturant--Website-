import { useState } from 'react';
import { menuItems } from '../data/menuData';
import { MenuCard } from '../components/MenuCard';

type Category = 'all' | 'veg' | 'non-veg' | 'dessert' | 'beverage';

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'veg', label: 'Vegetarian' },
    { id: 'non-veg', label: 'Non-Vegetarian' },
    { id: 'dessert', label: 'Desserts' },
    { id: 'beverage', label: 'Beverages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our delicious selection of dishes prepared with fresh ingredients and authentic recipes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
