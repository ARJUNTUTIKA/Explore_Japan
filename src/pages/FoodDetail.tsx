import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star } from 'lucide-react';

const FoodDetail = () => {
  const { foodName } = useParams();

  const foodData = {
    'sakura-mochi': {
      name: 'Sakura Mochi',
      title: 'Cherry Blossom Rice Cake',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Traditional Dessert',
      season: 'Spring (March-May)',
      description: 'Sakura mochi is a traditional Japanese sweet made of pink-colored rice cake filled with sweet red bean paste and wrapped in a pickled cherry blossom leaf.',
      history: 'Created in the early 18th century by a confectioner near Chomeiji Temple in Tokyo, sakura mochi was originally made to use the abundance of cherry blossom leaves from the temple grounds.',
      ingredients: [
        'Glutinous rice flour',
        'Sugar',
        'Red bean paste (anko)',
        'Pickled cherry blossom leaves',
        'Pink food coloring',
        'Water'
      ],
      preparation: 'The rice is steamed and pounded into a smooth paste, colored pink, then wrapped around sweet red bean filling and enclosed in a salted cherry blossom leaf.',
      whereToFind: [
        'Traditional wagashi shops',
        'Department store food courts',
        'Specialty confectioneries',
        'Tea ceremony venues',
        'Spring festivals and markets'
      ],
      regions: ['Tokyo (Kanto style)', 'Kyoto (Kansai style)', 'Available nationwide during spring'],
      culturalSignificance: 'Sakura mochi represents the ephemeral beauty of spring and is deeply connected to hanami (cherry blossom viewing) traditions. The edible leaf adds a unique salty-sweet flavor contrast.'
    },
    'hanami-dango': {
      name: 'Hanami Dango',
      title: 'Three-Colored Spring Dumplings',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Traditional Dessert',
      season: 'Spring (March-May)',
      description: 'Hanami dango are three-colored rice dumplings on a skewer, traditionally eaten during cherry blossom season. The colors represent different aspects of spring.',
      history: 'Dating back to the Heian period, dango became associated with hanami during the Edo period when they were sold at cherry blossom viewing spots.',
      ingredients: [
        'Rice flour',
        'Sugar',
        'Matcha powder (green)',
        'Food coloring (pink)',
        'Soy sauce glaze',
        'Mirin'
      ],
      preparation: 'Rice flour dough is shaped into balls, steamed, then colored and glazed. Three dumplings are skewered together representing pink (cherry blossoms), white (winter snow), and green (new leaves).',
      whereToFind: [
        'Street vendors during hanami',
        'Traditional sweet shops',
        'Festival stalls',
        'Parks during cherry blossom season',
        'Convenience stores (seasonal)'
      ],
      regions: ['Available throughout Japan', 'Especially popular in Tokyo and Kyoto'],
      culturalSignificance: 'The three colors symbolize the transition from winter to spring to summer, making hanami dango a perfect representation of seasonal change in Japanese culture.'
    },
    'cherry-blossom-tea': {
      name: 'Cherry Blossom Tea',
      title: 'Sakura-yu (Cherry Blossom Tea)',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Traditional Beverage',
      season: 'Spring (March-May)',
      description: 'Sakura-yu is a delicate tea made from pickled cherry blossoms, creating a beautiful pink-colored drink with a subtle floral flavor.',
      history: 'This ceremonial tea has been served at special occasions for centuries, particularly during spring celebrations and traditional Japanese weddings.',
      ingredients: [
        'Pickled cherry blossoms (shiozuke)',
        'Hot water',
        'Sometimes honey or sugar',
        'Occasionally green tea leaves'
      ],
      preparation: 'Pickled cherry blossoms are placed in a cup and hot water is poured over them. The blossoms unfurl and release their delicate flavor and pink color.',
      whereToFind: [
        'Traditional tea houses',
        'Japanese restaurants (seasonal)',
        'Cultural centers',
        'Tea ceremony schools',
        'Specialty tea shops'
      ],
      regions: ['Traditional throughout Japan', 'Especially in Kyoto tea houses'],
      culturalSignificance: 'Served at auspicious occasions like weddings and celebrations, sakura-yu represents new beginnings and the beauty of life\'s fleeting moments.'
    },
    'bento-boxes': {
      name: 'Bento Boxes',
      title: 'Traditional Lunch Boxes',
      image: 'https://images.pexels.com/photos/1516540/pexels-photo-1516540.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Complete Meal',
      season: 'Year-round',
      description: 'Bento is a single-portion meal packed in a box, featuring rice, protein, and vegetables arranged in an aesthetically pleasing manner.',
      history: 'Dating back to the Kamakura period (1185-1333), bento evolved from simple rice balls to elaborate meals. The modern bento culture flourished during the Edo period.',
      ingredients: [
        'Steamed rice',
        'Protein (fish, meat, or tofu)',
        'Pickled vegetables (tsukemono)',
        'Seasonal vegetables',
        'Tamagoyaki (rolled omelet)',
        'Various side dishes'
      ],
      preparation: 'Each component is prepared separately and arranged in compartments to create visual balance and nutritional variety. Colors and textures are carefully considered.',
      whereToFind: [
        'Convenience stores nationwide',
        'Train stations (ekiben)',
        'Department store food courts',
        'Specialty bento shops',
        'School and office cafeterias'
      ],
      regions: ['Available throughout Japan', 'Regional specialties vary by location'],
      culturalSignificance: 'Bento represents Japanese values of balance, seasonality, and visual harmony. It\'s both practical nutrition and edible art, reflecting the Japanese aesthetic of finding beauty in everyday life.'
    }
  };

  const food = foodData[foodName as keyof typeof foodData];

  if (!food) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Food Item Not Found</h1>
          <Link to="/culture" className="text-red-600 hover:text-red-700">
            Return to Culture Page
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
              src={food.image} 
              alt={food.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{food.name}</h1>
                <p className="text-2xl opacity-90">{food.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Food Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Star className="text-orange-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Category</h3>
            </div>
            <p className="text-gray-600 mb-2">{food.category}</p>
            <p className="text-sm text-gray-500">Season: {food.season}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <MapPin className="text-orange-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Availability</h3>
            </div>
            <p className="text-gray-600">Traditional Japanese cuisine</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Clock className="text-orange-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Best Time</h3>
            </div>
            <p className="text-gray-600">{food.season}</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About {food.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{food.description}</p>
        </div>

        {/* History */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Historical Background</h2>
          <p className="text-gray-700 leading-relaxed">{food.history}</p>
        </div>

        {/* Ingredients and Preparation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h2>
            <ul className="space-y-3">
              {food.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Preparation</h2>
            <p className="text-gray-700 leading-relaxed">{food.preparation}</p>
          </div>
        </div>

        {/* Where to Find and Cultural Significance */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Where to Find</h2>
            <ul className="space-y-3">
              {food.whereToFind.map((place, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{place}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Regional Availability</h3>
              {food.regions.map((region, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
            <p className="text-gray-700 leading-relaxed">{food.culturalSignificance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
