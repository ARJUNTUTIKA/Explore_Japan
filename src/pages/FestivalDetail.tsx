import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';

const FestivalDetail = () => {
  const { festivalName } = useParams();

  const festivalData = {
    hanami: {
      name: 'Hanami',
      title: 'Cherry Blossom Festival',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Cherry blossoms in full bloom'
        },
        {
          url: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Hanami picnic under sakura trees'
        },
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional shrine during cherry blossom season'
        }
      ],
      period: 'March - May',
      duration: '2-3 weeks per location',
      location: 'Throughout Japan',
      description: 'Hanami, literally meaning "flower viewing," is one of Japan\'s most beloved traditions. This centuries-old custom celebrates the ephemeral beauty of cherry blossoms (sakura) that bloom across Japan each spring.',
      history: 'The tradition of hanami dates back over 1,000 years to the Heian period (794-1185). Originally, it was an elite court practice where nobles would compose poetry under blooming trees. During the Edo period (1603-1868), the custom spread to common people and became the popular celebration we know today.',
      traditions: [
        'Picnicking under cherry blossom trees',
        'Drinking sake and eating traditional foods',
        'Writing poetry inspired by the blossoms',
        'Night viewing (yozakura) with lanterns',
        'Photography and contemplation'
      ],
      locations: [
        'Ueno Park, Tokyo',
        'Maruyama Park, Kyoto',
        'Osaka Castle Park',
        'Mount Yoshino, Nara',
        'Hirosaki Castle, Aomori'
      ],
      foods: ['Sakura mochi', 'Hanami dango', 'Cherry blossom tea', 'Bento boxes'],
      significance: 'Hanami represents the Japanese aesthetic of mono no aware - the bittersweet awareness of the impermanence of all things. The brief blooming period reminds people to appreciate beauty and life\'s fleeting moments.'
    },
    tanabata: {
      name: 'Tanabata',
      title: 'Star Festival',
      image: 'https://images.pexels.com/photos/5699471/pexels-photo-5699471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5699471/pexels-photo-5699471.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Colorful Tanabata decorations'
        },
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Tanabata wishes on bamboo'
        },
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Tanabata festival street celebrations'
        }
      ],
      period: 'July 7th (or August 7th)',
      duration: '1 week',
      location: 'Throughout Japan',
      description: 'Tanabata, also known as the Star Festival, celebrates the romantic legend of two star-crossed lovers who can meet only once a year when the stars align.',
      history: 'Based on the Chinese legend of Zhinü and Niulang, Tanabata was introduced to Japan in the 8th century. The festival celebrates the annual meeting of the weaver girl (Vega) and the cowherd (Altair), separated by the Milky Way but allowed to meet once a year by a bridge of magpies.',
      traditions: [
        'Writing wishes on colorful paper strips (tanzaku)',
        'Hanging decorations on bamboo branches',
        'Making traditional crafts and ornaments',
        'Participating in parades and festivals',
        'Eating traditional Tanabata foods'
      ],
      locations: [
        'Sendai (largest celebration)',
        'Hiratsuka, Kanagawa',
        'Asagaya, Tokyo',
        'Ichinomiya, Aichi',
        'Kyoto temples and shrines'
      ],
      foods: ['Somen noodles', 'Star-shaped cookies', 'Colorful wagashi sweets'],
      significance: 'Tanabata represents hope, wishes, and the power of love to overcome obstacles. People write their dreams and aspirations on tanzaku, believing the celestial lovers will help fulfill their wishes.'
    },
    'gion matsuri': {
      name: 'Gion Matsuri',
      title: 'Gion Festival',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Gion Matsuri parade floats'
        },
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Kyoto streets during festival'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Elaborate festival costumes and decorations'
        }
      ],
      period: 'Entire month of July',
      duration: '31 days',
      location: 'Kyoto',
      description: 'Gion Matsuri is one of Japan\'s most famous and longest-running festivals, featuring elaborate processions of decorated floats through the historic streets of Kyoto.',
      history: 'Dating back to 869 CE, Gion Matsuri began as a religious ceremony to appease the gods during a plague epidemic. The festival has continued for over 1,150 years, making it one of the world\'s longest-running festivals.',
      traditions: [
        'Yamaboko Junko (grand procession of floats)',
        'Traditional music and performances',
        'Street food stalls and night markets',
        'Wearing traditional yukata',
        'Visiting Yasaka Shrine'
      ],
      locations: [
        'Yasaka Shrine',
        'Kawaramachi and Gion districts',
        'Shijo-dori street',
        'Kyoto Imperial Palace',
        'Historic Kyoto neighborhoods'
      ],
      foods: ['Kyoto kaiseki cuisine', 'Traditional sweets', 'Festival street food', 'Matcha and wagashi'],
      significance: 'Gion Matsuri represents the preservation of traditional Japanese culture and craftsmanship. The elaborate floats, some weighing up to 12 tons, showcase centuries-old artistic techniques passed down through generations.'
    },
    obon: {
      name: 'Obon',
      title: 'Festival of the Dead',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Obon lanterns'
        },
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Bon Odori traditional dance'
        },
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Floating lanterns ceremony'
        }
      ],
      period: 'Mid-August (July in some regions)',
      duration: '3-4 days',
      location: 'Throughout Japan',
      description: 'Obon is a Buddhist festival honoring deceased ancestors. Families gather to welcome back the spirits of their ancestors for a brief reunion.',
      history: 'Obon has been celebrated for over 500 years, combining Buddhist traditions with indigenous Japanese ancestor worship. The festival reflects the Japanese belief that ancestral spirits return to visit their families during this time.',
      traditions: [
        'Cleaning and decorating family graves',
        'Lighting lanterns to guide spirits home',
        'Bon Odori (traditional folk dancing)',
        'Preparing special foods for ancestors',
        'Floating lanterns on rivers (Toro Nagashi)'
      ],
      locations: [
        'Family homes and ancestral graves',
        'Buddhist temples nationwide',
        'Community centers for Bon Odori',
        'Rivers and lakes for lantern floating',
        'Rural villages and urban neighborhoods'
      ],
      foods: ['Vegetarian Buddhist cuisine', 'Ohagi (sweet rice balls)', 'Seasonal fruits', 'Traditional sweets'],
      significance: 'Obon emphasizes the importance of family, respect for ancestors, and the continuity between past and present. It\'s a time for reflection, gratitude, and maintaining connections with deceased loved ones.'
    }
  };

  const festival = festivalData[festivalName as keyof typeof festivalData];

  if (!festival) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Festival Not Found</h1>
          <Link to="/culture" className="text-red-600 hover:text-red-700">
            Return to Culture Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/culture" 
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Culture
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-12">
          <div className="relative h-96">
            <img 
              src={festival.image} 
              alt={festival.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{festival.name}</h1>
                <p className="text-2xl opacity-90">{festival.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Festival Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Calendar className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">When</h3>
            </div>
            <p className="text-gray-600 mb-2">{festival.period}</p>
            <p className="text-sm text-gray-500">Duration: {festival.duration}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <MapPin className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Where</h3>
            </div>
            <p className="text-gray-600">{festival.location}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Clock className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Significance</h3>
            </div>
            <p className="text-gray-600">Cultural & Spiritual</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About {festival.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{festival.description}</p>
        </div>

        {/* Festival Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Festival Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {festival.gallery?.map((image, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Historical Background</h2>
          <p className="text-gray-700 leading-relaxed">{festival.history}</p>
        </div>

        {/* Traditions and Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Traditions & Activities</h2>
            <ul className="space-y-3">
              {festival.traditions.map((tradition, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{tradition}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Famous Locations</h2>
            <ul className="space-y-3">
              {festival.locations.map((location, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Foods and Significance */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Traditional Foods</h2>
            <div className="flex flex-wrap gap-2">
              {festival.foods.map((food, index) => (
                <Link
                  to="/food"
                  key={index} 
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover:bg-red-200 transition-colors duration-300 cursor-pointer"
                >
                  {food}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
            <p className="text-gray-700 leading-relaxed">{festival.significance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetail;
