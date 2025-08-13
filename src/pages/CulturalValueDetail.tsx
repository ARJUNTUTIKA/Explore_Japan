import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Leaf } from 'lucide-react';

const CulturalValueDetail = () => {
  const { valueName } = useParams();

  const valueData = {
    'respect-and-bowing': {
      name: 'Respect & Bowing',
      title: 'The Art of Showing Respect',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Heart className="text-red-600" size={48} />,
      description: 'Bowing (ojigi) is a fundamental aspect of Japanese culture that demonstrates respect, gratitude, apology, and greeting. It reflects the deep-rooted values of hierarchy, humility, and social harmony.',
      history: 'The practice of bowing in Japan dates back over 1,000 years, influenced by Chinese court customs and Buddhist traditions. It became deeply ingrained in Japanese society during the feudal period and continues to be essential in modern Japan.',
      types: [
        {
          name: 'Eshaku (15°)',
          description: 'Light bow for casual greetings and acknowledgments',
          usage: 'Meeting acquaintances, thanking cashiers, casual situations'
        },
        {
          name: 'Keirei (30°)',
          description: 'Standard respectful bow for formal situations',
          usage: 'Business meetings, formal introductions, showing respect to superiors'
        },
        {
          name: 'Saikeirei (45°)',
          description: 'Deep bow showing profound respect or sincere apology',
          usage: 'Formal ceremonies, deep apologies, showing respect to elders'
        }
      ],
      contexts: [
        'Business meetings and negotiations',
        'Formal ceremonies and events',
        'Meeting someone for the first time',
        'Expressing gratitude or apology',
        'Religious and spiritual practices',
        'Traditional arts and martial arts'
      ],
      modernPractice: 'While handshakes are becoming more common in international business, bowing remains the preferred greeting in most Japanese contexts. Even phone conversations often involve bowing, showing how deeply ingrained this practice is.',
      culturalSignificance: 'Bowing represents the Japanese values of humility, respect for others, and social harmony. It acknowledges the interconnectedness of people and the importance of maintaining peaceful relationships in society.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional formal bowing in kimono'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Business bowing in modern Japan'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Ceremonial bowing at traditional events'
        }
      ]
    },
    'cleanliness': {
      name: 'Cleanliness',
      title: 'Purity in Body, Mind, and Environment',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Leaf className="text-green-600" size={48} />,
      description: 'Cleanliness (seiketsu) in Japanese culture goes beyond physical cleanliness to encompass spiritual purity, environmental responsibility, and social consideration for others.',
      history: 'The emphasis on cleanliness stems from Shinto beliefs about purity and pollution (kegare). This concept was reinforced by Buddhist teachings and became deeply embedded in Japanese daily life and social customs.',
      aspects: [
        {
          name: 'Personal Hygiene',
          description: 'Daily bathing, clean clothing, and personal grooming',
          examples: ['Daily ofuro (bath) ritual', 'Removing shoes indoors', 'Hand washing and gargling']
        },
        {
          name: 'Environmental Cleanliness',
          description: 'Keeping public and private spaces spotless',
          examples: ['Street cleaning by communities', 'Sorting garbage meticulously', 'Maintaining pristine public facilities']
        },
        {
          name: 'Spiritual Purity',
          description: 'Cleansing rituals for spiritual and mental clarity',
          examples: ['Purification at shrines (temizu)', 'Meditation and mindfulness', 'Seasonal cleaning (osoji)']
        }
      ],
      practices: [
        'Removing shoes before entering homes and many buildings',
        'Cleaning classrooms and offices by students and employees',
        'Elaborate garbage sorting and recycling systems',
        'Regular deep cleaning of homes and workplaces',
        'Purification rituals at shrines and temples',
        'Maintaining spotless public transportation'
      ],
      socialImpact: 'The culture of cleanliness creates a sense of shared responsibility and community pride. It reflects consideration for others and contributes to Japan\'s reputation for having some of the cleanest cities in the world.',
      culturalSignificance: 'Cleanliness represents respect for oneself, others, and the environment. It embodies the Japanese principle of "omotenashi" (hospitality) and the belief that a clean environment promotes mental clarity and spiritual well-being.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Japanese cleaning practices'
        },
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Pristine shrine grounds maintained by community'
        },
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Clean public spaces and natural environments'
        }
      ]
    },
    'harmony': {
      name: 'Harmony',
      title: 'Living in Balance with Nature and Society',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Users className="text-blue-600" size={48} />,
      description: 'Harmony (wa) is perhaps the most fundamental value in Japanese culture, emphasizing the importance of maintaining peaceful relationships, avoiding conflict, and living in balance with nature and society.',
      history: 'The concept of wa has ancient roots in Japanese society, formalized in Prince Shotoku\'s 17-Article Constitution (604 CE) which stated "Harmony is to be valued." This principle has shaped Japanese social behavior for over 1,400 years.',
      dimensions: [
        {
          name: 'Social Harmony',
          description: 'Maintaining peaceful relationships and group cohesion',
          examples: ['Consensus-building in decision making', 'Avoiding direct confrontation', 'Prioritizing group needs over individual desires']
        },
        {
          name: 'Natural Harmony',
          description: 'Living in balance with the natural world',
          examples: ['Seasonal awareness and celebration', 'Sustainable practices', 'Garden design reflecting natural beauty']
        },
        {
          name: 'Inner Harmony',
          description: 'Achieving personal balance and peace',
          examples: ['Meditation and mindfulness practices', 'Work-life balance concepts', 'Aesthetic appreciation (mono no aware)']
        }
      ],
      manifestations: [
        'Consensus-based decision making in groups',
        'Indirect communication to avoid conflict',
        'Seasonal festivals celebrating natural cycles',
        'Traditional arts emphasizing balance and proportion',
        'Architecture that blends with natural surroundings',
        'Social customs that prioritize group harmony'
      ],
      challenges: 'While harmony promotes social stability, it can sometimes suppress individual expression and make it difficult to address problems directly. Modern Japan continues to balance traditional harmony with contemporary needs for innovation and individual rights.',
      culturalSignificance: 'Harmony represents the Japanese ideal of a peaceful, balanced society where individuals, communities, and nature coexist in mutual respect. It influences everything from business practices to artistic expression and remains central to Japanese identity.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional garden representing harmony with nature'
        },
        {
          url: 'https://images.pexels.com/photos/5699471/pexels-photo-5699471.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Community festivals promoting social harmony'
        },
        {
          url: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Natural landscapes inspiring harmony and balance'
        }
      ]
    }
  };

  const value = valueData[valueName as keyof typeof valueData];

  if (!value) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cultural Value Not Found</h1>
          <Link to="/culture" className="text-red-600 hover:text-red-700">
            Return to Culture Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
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
              src={value.image} 
              alt={value.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mb-4">{value.icon}</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{value.name}</h1>
                <p className="text-2xl opacity-90">{value.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding {value.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>
        </div>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visual Examples</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {value.gallery?.map((image, index) => (
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
          <p className="text-gray-700 leading-relaxed">{value.history}</p>
        </div>

        {/* Types/Aspects/Dimensions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {value.types ? 'Types of Bowing' : value.aspects ? 'Key Aspects' : 'Dimensions of Harmony'}
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            {(value.types || value.aspects || value.dimensions || []).map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{item.name}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {item.usage && (
                  <p className="text-sm text-gray-600"><strong>Usage:</strong> {item.usage}</p>
                )}
                {item.examples && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-800 mb-2">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Practices/Contexts/Manifestations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {value.contexts ? 'Common Contexts' : value.practices ? 'Daily Practices' : 'Manifestations'}
            </h2>
            <ul className="space-y-3">
              {(value.contexts || value.practices || value.manifestations || []).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {value.modernPractice ? 'Modern Practice' : value.socialImpact ? 'Social Impact' : 'Contemporary Challenges'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {value.modernPractice || value.socialImpact || value.challenges}
            </p>
          </div>
        </div>

        {/* Cultural Significance */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{value.culturalSignificance}</p>
        </div>
      </div>
    </div>
  );
};

export default CulturalValueDetail;
