import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
            <Link to="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border-b last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-orange-500">
                        ₹{item.price.toFixed(2)}
                      </span>

                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-8 h-8 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-8 h-8 p-0"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-orange-500">₹{getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 mb-3"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>

              <Link to="/menu">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}