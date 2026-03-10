import { Link } from 'react-router';
import { ChefHat, Clock, Truck, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { menuItems } from '../data/menuData';
import { MenuCard } from '../components/MenuCard';

const COLORS = {
  primary: '#be5a38',
  primaryLight: '#d4714e',
  primaryDark: '#9e4a2e',
  accent: '#fef3c7',
  cream: '#fafaf9',
};

export function Home() {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <div className="min-h-screen">
      <section 
        className="relative text-white py-20"
        style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Delicious Food Delivered to Your Doorstep
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Experience the finest cuisine from our kitchen to your home. Fresh ingredients, amazing flavors, and quick delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/menu">
                  <Button 
                    size="lg" 
                    className="font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: 'white', color: COLORS.primary }}
                  >
                    Order Now
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white font-semibold px-8 transition-all duration-300 hover:bg-white hover:text-[#be5a38]"
                    style={{ borderColor: 'white' }}
                  >
                    View Menu
                  </Button>

                alt="Delicious food"
                className="rounded-lg shadow-2xl"
              />
            </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${COLORS.primary}15` }}
              >
                <ChefHat className="w-8 h-8" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Chefs</h3>
              <p className="text-gray-600 text-sm">
                Prepared by professional chefs with years of experience
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${COLORS.primary}15` }}
              >
                <Star className="w-8 h-8" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Food</h3>
              <p className="text-gray-600 text-sm">
                Fresh ingredients and authentic recipes for the best taste
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${COLORS.primary}15` }}
              >
                <Clock className="w-8 h-8" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Get your food delivered hot and fresh in 30 minutes
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${COLORS.primary}15` }}
              >
                <Truck className="w-8 h-8" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cash on Delivery</h3>
              <p className="text-gray-600 text-sm">
                Pay when you receive your order at your doorstep
              </p>
            </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: COLORS.cream }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular dishes loved by thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button 
                size="lg" 
                className="font-semibold px-8 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
              >
                View Full Menu
              </Button>
            </Link>
          </div>
      </section>

      <section 
        className="py-16 text-white"
        style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hungry? Order Now!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your favorite food delivered in just 30 minutes
          </p>
          <Link to="/menu">
            <Button 
              size="lg" 
              className="font-semibold px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: 'white', color: COLORS.primary }}
            >
              Start Ordering
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
