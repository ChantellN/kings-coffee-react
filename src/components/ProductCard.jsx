import { useOrder } from '../context/OrderContext';
import { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  const { addItem } = useOrder();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-amber-600 font-semibold uppercase tracking-wide">
          {product.category}
        </span>
        {product.roastLevel && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-stone-400 mr-1">Roast</span>
            {[1, 2, 3, 4, 5].map((level) => (
              <span
                key={level}
                className={
                  level <= product.roastLevel
                    ? 'text-amber-500'
                    : 'text-stone-200'
                }
                style={{ fontSize: '10px' }}
              >
                ●
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg font-bold text-stone-900 mt-1">
          {product.name}
        </h3>
        <p className="text-stone-500 text-sm mt-1">{product.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-stone-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => {
              addItem(product);
              setShowToast(true);
            }}
            disabled={product.stock === 0}
            className="bg-amber-400 text-stone-900 font-bold px-4 py-2 rounded-full hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Order'}
          </button>
        </div>
      </div>
      {showToast && (
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
          ✅ Added to order!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
