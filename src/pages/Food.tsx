import React from 'react';
import { Link } from 'react-router-dom';

const Food = () => {
  const popularDishes = [
    {
      name: 'Sushi',
      image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fresh fish and rice, a perfect harmony of flavors'
    },
    {
      name: 'Ramen',
      image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rich broth noodles that warm the soul'
    },
    {
      name: 'Tempura',
      image: 'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Light and crispy battered seafood and vegetables'
    },
    {
      name: 'Takoyaki',
      image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Osaka street food balls filled with octopus'
    }
  ];

  const desserts = [
    { 
      name: 'Mochi', 
      description: 'Sweet rice cakes with various fillings',
      image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Dango', 
      description: 'Grilled rice dumplings on skewers',
      image: 'https://images.pexels.com/photos/7625055/pexels-photo-7625055.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Dorayaki', 
      description: 'Pancake sandwich with sweet red bean filling',
      image: 'https://images.pexels.com/photos/7625057/pexels-photo-7625057.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Taiyaki', 
      description: 'Fish-shaped pastry filled with sweet ingredients',
      image: 'https://images.pexels.com/photos/7625058/pexels-photo-7625058.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const drinks = [
    { 
      name: 'Matcha', 
      description: 'Traditional powdered green tea',
      image: 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Sake', 
      description: 'Rice wine with delicate flavors',
      image: 'https://images.pexels.com/photos/5946963/pexels-photo-5946963.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Ramune', 
      description: 'Refreshing carbonated soft drink',
      image: 'https://images.pexels.com/photos/7625059/pexels-photo-7625059.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Mugicha', 
      description: 'Barley tea, popular summer drink',
      image: 'https://images.pexels.com/photos/4226895/pexels-photo-4226895.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const regions = [
    {
      name: 'Hokkaido',
      specialty: 'Fresh seafood and dairy products',
      image: 'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Osaka',
      specialty: 'Street food capital - takoyaki and okonomiyaki',
      image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Kyoto',
      specialty: 'Traditional kaiseki and tofu cuisine',
      image: 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Okinawa',
      specialty: 'Unique tropical flavors and goya dishes',
      image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16 min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1516540/pexels-photo-1516540.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50"></div>
      
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Flavors of Japan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Japanese cuisine is more than just food—it's an art of simplicity, seasonality, and harmony. 
            Every dish tells a story of tradition and craftsmanship.
          </p>
        </div>

        {/* Popular Dishes */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Popular Dishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDishes.map((dish, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Traditional Desserts */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Traditional Desserts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {desserts.map((dessert, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={dessert.image} 
                  alt={dessert.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">{dessert.name}</h3>
                  <p className="text-gray-600">{dessert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Traditional Drinks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {drinks.map((drink, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-gradient-to-br from-green-500 to-teal-500 text-white">
                  <h3 className="text-xl font-bold mb-3">{drink.name}</h3>
                  <p className="text-green-50">{drink.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Specialties */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Regional Specialties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={region.image} 
                  alt={region.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{region.name}</h3>
                  <p className="text-gray-600">{region.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Tips */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Dining Etiquette & Tips</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Table Manners</h3>
                <p className="text-gray-600">Say "itadakimasu" before eating and "gochisousama" after finishing</p>
                <Link 
                  to="/dining/table-manners"
                  className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Bento Culture</h3>
                <p className="text-gray-600">Beautifully arranged lunch boxes representing balance and variety</p>
                <Link 
                  to="/dining/bento-culture"
                  className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Kaiseki Style</h3>
                <p className="text-gray-600">Multi-course dining that celebrates seasonal ingredients</p>
                <Link 
                  to="/dining/kaiseki-style"
                  className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Food;
