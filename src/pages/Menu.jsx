import { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white px-8 py-16">
        <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
        <p className="text-stone-400">
          Explore our selection of specialty coffees and equipment
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Category Filter */}
        <div className="flex gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                selectedCategory === cat
                  ? 'bg-amber-400 text-stone-900 font-bold px-4 py-2 rounded-full'
                  : 'bg-white text-stone-600 px-4 py-2 rounded-full border border-stone-200 hover:border-amber-400'
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
