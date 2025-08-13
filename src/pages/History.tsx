import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
  const periods = [
    { name: 'Jomon', years: '14,000-300 BCE', description: 'Hunter-gatherer culture, pottery origins' },
    { name: 'Yayoi', years: '300 BCE-300 CE', description: 'Rice cultivation, bronze and iron tools' },
    { name: 'Heian', years: '794-1185', description: 'Classical Japanese culture flourishes' },
    { name: 'Kamakura', years: '1185-1333', description: 'First shogunate, samurai rise' },
    { name: 'Edo', years: '1603-1868', description: 'Peace and isolation, cultural development' },
    { name: 'Meiji', years: '1868-1912', description: 'Modernization and westernization' },
    { name: 'Reiwa', years: '2019-Present', description: 'Current era of technological advancement' }
  ];

  const samuraiFeatures = [
    {
      title: 'Bushido',
      description: 'The way of the warrior - code of honor and loyalty',
      icon: '⚔️',
      slug: 'bushido'
    },
    {
      title: 'Katana',
      description: 'Legendary curved swords with spiritual significance',
      icon: '🗡️',
      slug: 'katana'
    },
    {
      title: 'Castles',
      description: 'Magnificent fortresses showcasing architectural mastery',
      icon: '🏯',
      slug: 'castles'
    },
    {
      title: 'Honor',
      description: 'Deep commitment to duty and moral principles',
      icon: '🛡️',
      slug: 'honor'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            A Journey Through Japanese History
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Japan's rich and fascinating history, from ancient civilizations 
            to modern technological marvels.
          </p>
        </div>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Historical Timeline</h2>
          <div className="max-w-4xl mx-auto">
            {periods.map((period, index) => (
              <div key={index} className="timeline-item mb-8 card-hover bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-2">{period.name}</h3>
                <p className="text-gray-500 mb-2">{period.years}</p>
                <p className="text-gray-700">{period.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Samurai Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Samurai & Feudal Japan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {samuraiFeatures.map((feature, index) => (
              <Link 
                key={index} 
                to={`/samurai/${feature.slug}`}
                className="card-hover bg-white p-6 rounded-lg shadow-lg text-center block"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* World War II Section */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">World War II & Reconstruction</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Hiroshima & Nagasaki</h3>
                <p className="text-gray-700 mb-6">
                  The atomic bombings marked a turning point in world history and Japan's journey toward peace.
                </p>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Peace & Reconstruction</h3>
                <p className="text-gray-700">
                  Post-war Japan transformed into a peaceful nation focused on economic development and democracy.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Peace Memorial"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Modern Japan */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Modern Japan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              to="/modern-japan/technology-hub"
              className="card-hover bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg text-white block"
            >
              <h3 className="text-2xl font-bold mb-4">Technology Hub</h3>
              <p>Leading innovations in robotics, electronics, and automotive industry</p>
            </Link>
            <Link 
              to="/modern-japan/cultural-export"
              className="card-hover bg-gradient-to-br from-pink-500 to-red-500 p-8 rounded-lg shadow-lg text-white block"
            >
              <h3 className="text-2xl font-bold mb-4">Cultural Export</h3>
              <p>Anime, manga, and Japanese pop culture influence the global community</p>
            </Link>
            <Link 
              to="/modern-japan/future-vision"
              className="card-hover bg-gradient-to-br from-green-500 to-teal-500 p-8 rounded-lg shadow-lg text-white block"
            >
              <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
              <p>Sustainable development and aging society solutions for tomorrow</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
