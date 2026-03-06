import { Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const Navbar = () => {
  const { orderItems } = useOrder();
  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-stone-900 text-white px-8 py-4 flex justify-between items-center">
      {/* Left - Brand */}
      <div>King's Coffee</div>

      {/* Middle - Links */}
      <div className="flex gap-8">
        <Link to="/" className="hover:text-amber-400">
          Home
        </Link>
        <Link to="menu" className="hover:text-amber-400">
          Menu
        </Link>
        <Link to="/about" className="hover:text-amber-400">
          About Us
        </Link>
      </div>

      {/* Right - Cart */}
      <Link to="/order" className="relative hover:text-amber-400">
        🛒
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-3 bg-amber-400 text-stone-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
