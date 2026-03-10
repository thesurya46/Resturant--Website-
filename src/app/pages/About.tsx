import { ChefHat, Heart, Award, Users } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Food Hub</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto">
            Bringing delicious, freshly prepared meals to your doorstep since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Food Hub was founded with a simple mission: to bring restaurant-quality food to your home with the convenience of cash on delivery. We believe everyone deserves access to delicious, freshly prepared meals without the hassle.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of expert chefs uses only the finest ingredients to create dishes that delight your taste buds. From traditional favorites to innovative creations, we have something for everyone.
              </p>
              <p className="text-gray-600">
                We're committed to providing fast, reliable service with a smile. Your satisfaction is our top priority, and we work hard every day to exceed your expectations.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600"
                alt="Chef preparing food"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes Food Hub special
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We use only the freshest ingredients and authentic recipes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">
                Every dish is prepared with love and attention to detail
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for perfection in every order we deliver
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We're proud to serve our local community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-orange-50">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-orange-50">Menu Items</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">30min</p>
              <p className="text-orange-50">Average Delivery</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.8★</p>
              <p className="text-orange-50">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
