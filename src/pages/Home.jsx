import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="font-sans text-stone-800 bg-stone-50">
      {/* Hero Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Experience the <span className="text-amber-400">Perfect Brew</span>
          </h1>
          <p className="text-xl text-stone-200 mb-8 max-w-xl">
            Specialty coffee sourced from the world's finest farms, roasted to
            perfection.
          </p>
          <Link
            to="/menu"
            className="bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-full hover:bg-amber-300"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-2">
          Featured Products
        </h2>
        <p className="text-stone-500 mb-8">
          Our most loved coffees and equipment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.filter((product) => product.featured).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
