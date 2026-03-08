import { useOrder } from '../context/OrderContext';

const ProductCard = ({ product }) => {
  const { addItem } = useOrder();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
            onClick={() => addItem(product)}
            disabled={product.stock === 0}
            className="bg-amber-400 text-stone-900 font-bold px-4 py-2 rounded-full hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
