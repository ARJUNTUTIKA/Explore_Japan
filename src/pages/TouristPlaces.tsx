import React from 'react';

const TouristPlaces = () => {
  const places = [
    {
      name: 'Tokyo',
      description: 'Modern metropolis with traditional charm',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Kyoto',
      description: 'Ancient capital with thousands of temples',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Osaka',
      description: 'Food capital and vibrant nightlife',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Mt. Fuji',
      description: 'Sacred mountain and national symbol',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Nara',
      description: 'Ancient capital with friendly deer',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Hokkaido',
      description: 'Natural beauty and winter sports',
      image: 'https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Hiroshima',
      description: 'Peace memorial and historical significance',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Okinawa',
      description: 'Tropical paradise with unique culture',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Hakone',
      description: 'Hot springs and mountain views',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Nikko',
      description: 'UNESCO World Heritage shrines',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const activities = [
    {
      title: 'Hanami',
      description: 'Cherry blossom viewing in spring',
      icon: '🌸'
    },
    {
      title: 'Onsen',
      description: 'Relaxing in natural hot springs',
      icon: '♨️'
    },
    {
      title: 'Temple Visits',
      description: 'Exploring ancient spiritual sites',
      icon: '⛩️'
    },
    {
      title: 'Ryokan Stay',
      description: 'Traditional Japanese inn experience',
      icon: '🏮'
    }
  ];

  const travelTips = [
    {
      title: 'Best Time to Visit',
      content: 'Spring (March-May) for cherry blossoms, Fall (September-November) for autumn colors'
    },
    {
      title: 'JR Pass',
      content: 'Essential for train travel - purchase before arriving in Japan'
    },
    {
      title: 'Cultural Etiquette',
      content: 'Bow when greeting, remove shoes indoors, be quiet on public transport'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Discover Japan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bustling cities to serene temples, Japan offers unforgettable experiences 
            that blend tradition with modernity.
          </p>
        </div>

        {/* Famous Places */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Famous Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {places.map((place, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Activities */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Popular Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="card-hover bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Tips */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Travel Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {travelTips.map((tip, index) => (
              <div key={index} className="card-hover bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TouristPlaces;
