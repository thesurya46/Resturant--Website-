import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
              item.isVeg ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <span className={`w-3 h-3 rounded-full border-2 ${
              item.isVeg ? 'border-green-800' : 'border-red-800'
            }`} />
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-orange-500">₹{item.price.toFixed(2)}</span>
          
          {cartItem ? (
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0"
                onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-semibold w-8 text-center">{cartItem.quantity}</span>
              <Button
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0"
                onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              onClick={() => addToCart(item)}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}