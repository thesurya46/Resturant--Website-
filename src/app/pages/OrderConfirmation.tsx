import { useLocation, Link } from 'react-router';
import { CheckCircle, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

export function OrderConfirmation() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">No order information found</p>
          <Link to="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Back to Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-4">
            Thank you for your order. We'll prepare it with love and care.
          </p>
          <div className="inline-block bg-orange-50 px-6 py-3 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Order ID</p>
            <p className="text-xl font-bold text-orange-500">{order.id}</p>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Delivery Address</p>
                <p className="text-gray-600">{order.customer.address}</p>
                <p className="text-gray-600">
                  {order.customer.city}, {order.customer.zipCode}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Contact</p>
                <p className="text-gray-600">{order.customer.fullName}</p>
                <p className="text-gray-600">{order.customer.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Estimated Delivery</p>
                <p className="text-gray-600">30-45 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
          
          <div className="space-y-3 mb-4">
            {order.items.map((item: any) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-semibold text-gray-900">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span className="text-green-600">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span className="text-orange-500">₹{order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-orange-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-900 mb-1">Payment Method</p>
            <p className="text-sm text-gray-600">Cash on Delivery</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/menu" className="flex-1">
            <Button variant="outline" className="w-full">
              Order More
            </Button>
          </Link>
          <Link to="/" className="flex-1">
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}