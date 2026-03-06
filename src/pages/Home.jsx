import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

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
    </div>
  );
};

export default Home;
