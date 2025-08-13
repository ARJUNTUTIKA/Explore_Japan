import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Heart, Star } from 'lucide-react';

const DiningEtiquetteDetail = () => {
  const { etiquetteType } = useParams();

  const etiquetteData = {
    'table-manners': {
      name: 'Table Manners',
      title: 'Japanese Dining Etiquette and Customs',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Utensils className="text-red-600" size={48} />,
      description: 'Japanese table manners reflect deep cultural values of respect, gratitude, and mindfulness. These customs have been refined over centuries and remain an essential part of Japanese dining culture.',
      history: 'Japanese dining etiquette evolved from Buddhist teachings, Confucian values, and court traditions. The practice of saying "itadakimasu" comes from Buddhist gratitude for all living things that provide sustenance.',
      basicRules: [
        {
          rule: 'Itadakimasu & Gochisousama',
          description: 'Say "itadakimasu" (I humbly receive) before eating and "gochisousama" (thank you for the meal) after finishing',
          importance: 'Shows gratitude to those who prepared the meal and the ingredients themselves'
        },
        {
          rule: 'Chopstick Etiquette',
          description: 'Never stick chopsticks upright in rice, don\'t pass food chopstick to chopstick, don\'t point with chopsticks',
          importance: 'These actions are associated with funeral rituals and are considered very rude'
        },
        {
          rule: 'Bowl Handling',
          description: 'Pick up rice and soup bowls when eating, bring them closer to your mouth',
          importance: 'Shows proper respect for the food and prevents spilling'
        },
        {
          rule: 'Slurping',
          description: 'Slurping noodles and soup is acceptable and even encouraged',
          importance: 'Shows appreciation for the food and helps cool hot noodles'
        }
      ],
      advancedEtiquette: [
        'Wait for the eldest or most senior person to start eating first',
        'Pour drinks for others, never for yourself',
        'Use both hands when receiving or giving items',
        'Don\'t waste food - finish everything on your plate',
        'Keep your hands visible on the table, not in your lap',
        'Don\'t blow your nose at the table',
        'Compliment the chef and host throughout the meal'
      ],
      restaurantEtiquette: [
        'Remove shoes when entering traditional restaurants',
        'Wait to be seated - don\'t choose your own table',
        'Use the wet towel (oshibori) to clean your hands before eating',
        'Don\'t tip - it\'s not customary in Japan',
        'Pay at the counter, not at the table',
        'Speak quietly and avoid loud conversations'
      ],
      culturalSignificance: 'Japanese table manners embody the principles of wa (harmony), respect for others, and mindful consumption. They create a peaceful dining atmosphere and strengthen social bonds through shared respect and consideration.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Japanese table setting with proper etiquette'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Proper chopstick usage and bowl handling'
        },
        {
          url: 'https://images.pexels.com/photos/1516540/pexels-photo-1516540.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Family dining with traditional Japanese manners'
        }
      ]
    },
    'bento-culture': {
      name: 'Bento Culture',
      title: 'The Art of Japanese Lunch Boxes',
      image: 'https://images.pexels.com/photos/1516540/pexels-photo-1516540.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Heart className="text-pink-600" size={48} />,
      description: 'Bento represents the Japanese philosophy of balance, beauty, and nutrition in a single meal. These carefully crafted lunch boxes are both practical nutrition and edible art.',
      history: 'Bento culture dates back to the Kamakura period (1185-1333) when cooked rice was carried in bamboo containers. The modern bento evolved during the Edo period and became widespread with the railway system.',
      principles: [
        {
          principle: 'Nutritional Balance',
          description: 'Traditional ratio of 4:3:2:1 - rice, vegetables, protein, and pickles',
          application: 'Ensures complete nutrition with carbohydrates, vitamins, protein, and probiotics'
        },
        {
          principle: 'Visual Harmony',
          description: 'Five colors (red, yellow, green, white, black) and varied textures',
          application: 'Creates visual appeal and ensures diverse nutrients from different colored foods'
        },
        {
          principle: 'Seasonal Awareness',
          description: 'Ingredients and presentation reflect the current season',
          application: 'Connects diners with nature\'s cycles and ensures fresh, seasonal nutrition'
        },
        {
          principle: 'Portion Control',
          description: 'Compartmentalized design naturally limits portion sizes',
          application: 'Promotes healthy eating habits and prevents overeating'
        }
      ],
      types: [
        'Makunouchi Bento - Traditional theater bento with rice, fish, and vegetables',
        'Ekiben - Station bento featuring regional specialties sold at train stations',
        'Kyaraben - Character bento decorated to look like anime characters or animals',
        'Koraku Bento - Picnic bento for outdoor events and cherry blossom viewing',
        'Osechi Bento - New Year bento with symbolic foods for good fortune'
      ],
      preparation: [
        'Cook rice perfectly - it forms the foundation of any good bento',
        'Prepare foods that taste good at room temperature',
        'Use natural dividers like lettuce leaves to separate flavors',
        'Include umami-rich foods like dried bonito flakes or seaweed',
        'Balance flavors - sweet, salty, sour, and umami',
        'Consider food safety - avoid foods that spoil quickly'
      ],
      modernEvolution: 'Contemporary bento culture includes Instagram-worthy kyaraben (character bento), health-conscious options, and fusion styles that blend Japanese principles with international cuisines.',
      culturalSignificance: 'Bento represents Japanese values of care, attention to detail, and finding beauty in everyday life. Making bento for family members is considered an act of love and devotion.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1516540/pexels-photo-1516540.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional bento box with balanced nutrition and colors'
        },
        {
          url: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Modern bento preparation with seasonal ingredients'
        },
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Kyaraben character bento showing artistic creativity'
        }
      ]
    },
    'kaiseki-style': {
      name: 'Kaiseki Style',
      title: 'The Pinnacle of Japanese Culinary Art',
      image: 'https://images.pexels.com/photos/5699471/pexels-photo-5699471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Star className="text-gold-600" size={48} />,
      description: 'Kaiseki is the most refined form of Japanese cuisine, representing the ultimate expression of culinary artistry, seasonal awareness, and hospitality. It\'s a multi-course dining experience that engages all the senses.',
      history: 'Kaiseki originated in the 16th century from the tea ceremony tradition. It evolved from simple meals served before tea to elaborate multi-course dinners that showcase the chef\'s skill and seasonal ingredients.',
      philosophy: [
        {
          concept: 'Seasonal Harmony (Kisetsukan)',
          description: 'Every element reflects the current season - ingredients, preparation, presentation, and tableware',
          expression: 'Spring: cherry blossoms and young vegetables; Summer: cooling dishes and glass tableware'
        },
        {
          concept: 'Natural Beauty (Shizen)',
          description: 'Ingredients are prepared to highlight their natural flavors and appearance',
          expression: 'Minimal seasoning, natural colors, and presentations that echo nature'
        },
        {
          concept: 'Hospitality (Omotenashi)',
          description: 'Every detail is carefully considered for the guest\'s comfort and enjoyment',
          expression: 'Personalized menus, perfect timing, and anticipation of guest needs'
        },
        {
          concept: 'Aesthetic Balance',
          description: 'Visual harmony in colors, textures, shapes, and arrangement',
          expression: 'Asymmetrical plating, varied textures, and complementary colors'
        }
      ],
      courseStructure: [
        'Sakizuke - Appetizer to stimulate the palate',
        'Suimono - Clear soup to cleanse and prepare',
        'Sashimi - Fresh raw fish at peak quality',
        'Yakimono - Grilled dish, often seasonal fish',
        'Takiawase - Simmered vegetables in delicate broth',
        'Gohan - Seasoned rice with accompaniments',
        'Mizumono - Light dessert, often seasonal fruit'
      ],
      presentation: [
        'Handcrafted ceramics and lacquerware chosen for each dish',
        'Asymmetrical plating that creates visual interest',
        'Negative space used as an active design element',
        'Garnishes that are edible and seasonally appropriate',
        'Temperature contrasts between hot and cold elements',
        'Textural variety from crispy to silky smooth'
      ],
      etiquette: [
        'Appreciate each dish visually before eating',
        'Eat courses in the prescribed order',
        'Use proper chopstick technique throughout',
        'Express gratitude for the chef\'s artistry',
        'Engage all senses - sight, smell, taste, texture, sound',
        'Maintain quiet, respectful conversation'
      ],
      modernKaiseki: 'Contemporary kaiseki chefs honor traditional principles while incorporating modern techniques and international influences, creating innovative expressions of this ancient art form.',
      culturalSignificance: 'Kaiseki represents the highest achievement of Japanese culinary culture, embodying principles of respect for nature, seasonal awareness, and the pursuit of perfection in every detail.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5699471/pexels-photo-5699471.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Elegant kaiseki presentation with seasonal elements'
        },
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional kaiseki table setting with handcrafted ceramics'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Multi-course kaiseki meal showcasing culinary artistry'
        }
      ]
    }
  };

  const etiquette = etiquetteData[etiquetteType as keyof typeof etiquetteData];

  if (!etiquette) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dining Etiquette Not Found</h1>
          <Link to="/food" className="text-red-600 hover:text-red-700">
            Return to Food Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/food" 
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Food
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-12">
          <div className="relative h-96">
            <img 
              src={etiquette.image} 
              alt={etiquette.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mb-4">{etiquette.icon}</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{etiquette.name}</h1>
                <p className="text-2xl opacity-90">{etiquette.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About {etiquette.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{etiquette.description}</p>
        </div>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visual Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {etiquette.gallery?.map((image, index) => (
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
          <p className="text-gray-700 leading-relaxed">{etiquette.history}</p>
        </div>

        {/* Main Content Sections */}
        {etiquette.basicRules && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Basic Rules</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {etiquette.basicRules.map((rule, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">{rule.rule}</h3>
                  <p className="text-gray-700 mb-3">{rule.description}</p>
                  <p className="text-sm text-gray-600 italic">{rule.importance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {etiquette.principles && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Core Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {etiquette.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">{principle.principle}</h3>
                  <p className="text-gray-700 mb-3">{principle.description}</p>
                  <p className="text-sm text-gray-600 italic">{principle.application}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {etiquette.philosophy && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {etiquette.philosophy.map((concept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">{concept.concept}</h3>
                  <p className="text-gray-700 mb-3">{concept.description}</p>
                  <p className="text-sm text-gray-600 italic">{concept.expression}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Information Lists */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {(etiquette.advancedEtiquette || etiquette.types || etiquette.courseStructure) && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {etiquette.advancedEtiquette ? 'Advanced Etiquette' : 
                 etiquette.types ? 'Types of Bento' : 'Course Structure'}
              </h2>
              <ul className="space-y-3">
                {(etiquette.advancedEtiquette || etiquette.types || etiquette.courseStructure || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {(etiquette.restaurantEtiquette || etiquette.preparation || etiquette.presentation || etiquette.etiquette) && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {etiquette.restaurantEtiquette ? 'Restaurant Etiquette' : 
                 etiquette.preparation ? 'Preparation Tips' : 
                 etiquette.presentation ? 'Presentation Elements' : 'Dining Etiquette'}
              </h2>
              <ul className="space-y-3">
                {(etiquette.restaurantEtiquette || etiquette.preparation || etiquette.presentation || etiquette.etiquette || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modern Evolution & Cultural Significance */}
        <div className="grid md:grid-cols-2 gap-8">
          {etiquette.modernEvolution && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Modern Evolution</h2>
              <p className="text-gray-700 leading-relaxed">{etiquette.modernEvolution}</p>
            </div>
          )}
          
          {etiquette.modernKaiseki && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Modern Kaiseki</h2>
              <p className="text-gray-700 leading-relaxed">{etiquette.modernKaiseki}</p>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
            <p className="text-gray-700 leading-relaxed">{etiquette.culturalSignificance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningEtiquetteDetail;
