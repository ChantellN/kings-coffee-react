import { Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const Order = () => {
  const { orderItems, updateQuantity, removeItem, clearOrder, getOrderTotal } =
    useOrder();
  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold text-stone-900 mb-2">
          Your order is empty!
        </p>
        <p className="text-stone-500 mb-8">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/menu"
          className="bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-full hover:bg-amber-300"
        >
          Browse Our Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white px-8 py-16">
        <h1 className="text-4xl font-bold mb-2">Your Order</h1>
        <p className="text-stone-400">
          {orderItems.length} item(s) in your order
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Order Items */}
        <div className="flex flex-col gap-4 mb-8">
          {orderItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-stone-900">
                    {item.product.name}
                  </h3>
                  <p className="text-stone-500 text-sm">
                    {item.product.category}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 font-bold text-stone-700 flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="font-bold text-stone-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 font-bold text-stone-700 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-stone-900">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-stone-900">Total</span>
            <span className="text-2xl font-bold text-amber-600">
              ${getOrderTotal().toFixed(2)}
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={clearOrder}
              className="flex-1 border-2 border-stone-300 text-stone-600 font-bold px-6 py-3 rounded-full hover:border-red-400 hover:text-red-500"
            >
              Clear Order
            </button>
            <button className="flex-1 bg-amber-400 text-stone-900 font-bold px-6 py-3 rounded-full hover:bg-amber-300">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
