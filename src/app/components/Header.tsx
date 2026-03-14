import { Link } from 'react-router';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Header() {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">FH</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Food Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-500 transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              title="Search"
            >
              <Search className="w-6 h-6" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
