import React from 'react';
import { Link } from 'react-router-dom';

const Culture = () => {
  const traditionalCulture = [
    {
      title: 'Tea Ceremony',
      description: 'The Japanese tea ceremony, chanoyu, is a choreographic ritual of preparing matcha.',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'tea-ceremony'
    },
    {
      title: 'Kimono',
      description: 'Traditional Japanese clothing that represents elegance and cultural heritage.',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'kimono'
    },
    {
      title: 'Calligraphy',
      description: 'Shodo, the way of writing, is an artistic practice of brush painting characters.',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'calligraphy'
    },
    {
      title: 'Ikebana',
      description: 'The Japanese art of flower arrangement emphasizes harmony and balance.',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
      slug: 'ikebana'
    }
  ];

  const performingArts = [
    { 
      name: 'Kabuki', 
      description: 'Traditional Japanese theater with elaborate makeup and costumes',
      image: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Noh', 
      description: 'Classical musical drama featuring masks and slow movements',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Bunraku', 
      description: 'Traditional puppet theater with intricate storytelling',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Origami', 
      description: 'The art of paper folding into beautiful shapes',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const festivals = [
    { 
      name: 'Hanami', 
      period: 'Spring', 
      description: 'Cherry blossom viewing celebration',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Tanabata', 
      period: 'Summer', 
      description: 'Star Festival with wishes on bamboo',
      image: 'https://images.pexels.com/photos/5699471/pexels-photo-5699471.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Gion Matsuri', 
      period: 'July', 
      description: 'Famous festival in Kyoto with parades',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Obon', 
      period: 'August', 
      description: 'Festival honoring ancestors',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const culturalValues = [
    {
      title: 'Respect & Bowing',
      description: 'Deep respect for others shown through the art of bowing',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cleanliness',
      description: 'Maintaining cleanliness and order in all aspects of life',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Harmony',
      description: 'Living in harmony with nature and society',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Cultural Soul of Japan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Japan beautifully blends ancient traditions with cutting-edge technology, 
            creating a unique cultural landscape that captivates the world.
          </p>
        </div>

        {/* Traditional Culture */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Traditional Culture</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {traditionalCulture.map((item, index) => (
              <Link 
                key={index} 
                to={`/traditional-culture/${item.slug}`}
                className="card-hover bg-white rounded-lg overflow-hidden shadow-lg block"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Performing Arts */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Performing Arts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performingArts.map((art, index) => (
              <Link 
                key={index} 
                to={`/performing-art/${art.name.toLowerCase()}`}
                className="card-hover bg-white rounded-lg overflow-hidden shadow-lg block"
              >
                <img 
                  src={art.image} 
                  alt={art.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">{art.name}</h3>
                  <p className="text-gray-600">{art.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Festivals */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Japanese Festivals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {festivals.map((festival, index) => (
              <Link 
                key={index} 
                to={`/festival/${festival.name.toLowerCase()}`}
                className="card-hover bg-white rounded-lg overflow-hidden shadow-lg block"
              >
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-2">{festival.name}</h3>
                  <p className="text-orange-600 mb-3 font-medium">{festival.period}</p>
                  <p className="text-gray-600">{festival.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cultural Values */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Cultural Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {culturalValues.map((value, index) => (
              <Link 
                key={index} 
                to={`/cultural-value/${value.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="card-hover bg-white rounded-lg overflow-hidden shadow-lg block"
              >
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Culture;
