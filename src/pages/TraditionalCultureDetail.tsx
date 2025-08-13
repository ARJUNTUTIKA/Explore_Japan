import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award } from 'lucide-react';

const TraditionalCultureDetail = () => {
  const { cultureName } = useParams();

  const cultureData = {
    'tea-ceremony': {
      name: 'Tea Ceremony',
      title: 'Chanoyu - The Way of Tea',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional tea ceremony preparation'
        },
        {
          url: 'https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Matcha tea and traditional sweets'
        },
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Tea ceremony in traditional setting'
        }
      ],
      origin: '9th century (Heian Period)',
      practitioners: 'Tea masters and students worldwide',
      location: 'Tea houses and cultural centers',
      description: 'The Japanese tea ceremony, known as chanoyu or chado, is a choreographic ritual of preparing and serving Japanese green tea, called matcha, together with traditional Japanese sweets to balance the bitter taste of the tea.',
      history: 'The tea ceremony was developed by tea masters over many centuries, beginning in the 9th century when tea was first introduced to Japan from China. The ceremony was refined in the 16th century by Sen no Rikyu, who established the fundamental principles that are still followed today.',
      principles: [
        'Wa (Harmony) - Creating peaceful relationships',
        'Kei (Respect) - Showing respect for all participants',
        'Sei (Purity) - Cleansing of mind and surroundings',
        'Jaku (Tranquility) - Finding inner peace through the ceremony'
      ],
      elements: [
        'Tatami room with tokonoma (alcove)',
        'Traditional tea utensils (chadogu)',
        'Seasonal flowers and hanging scroll',
        'Wagashi (traditional sweets)',
        'Matcha (powdered green tea)',
        'Precise movements and etiquette'
      ],
      schools: [
        'Urasenke - Most widespread school',
        'Omotesenke - Traditional formal style',
        'Mushanokojisenke - Smaller but influential school'
      ],
      significance: 'The tea ceremony embodies Japanese aesthetics and philosophy, teaching mindfulness, respect, and the appreciation of simple beauty. It represents the Japanese concept of "ichigo ichie" - one time, one meeting - emphasizing the uniqueness of each gathering.'
    },
    'kimono': {
      name: 'Kimono',
      title: 'Traditional Japanese Clothing',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional kimono with obi sash'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Formal kimono for special occasions'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Kimono accessories and styling'
        }
      ],
      origin: '8th century (Nara Period)',
      practitioners: 'Worn by all social classes historically',
      location: 'Throughout Japan and worldwide',
      description: 'Kimono, literally meaning "thing to wear," is a traditional Japanese garment characterized by long sleeves and a rectangular body, wrapped left side over right and secured with an obi sash.',
      history: 'The kimono evolved from Chinese court dress during the Nara period (710-794). During the Heian period (794-1185), it became distinctly Japanese in style. The Edo period (1603-1868) saw the development of elaborate designs and the establishment of kimono as formal wear.',
      types: [
        'Furisode - Formal kimono for unmarried women',
        'Tomesode - Formal kimono for married women',
        'Iromuji - Semi-formal single-colored kimono',
        'Komon - Casual kimono with small patterns',
        'Yukata - Casual summer cotton kimono',
        'Houmongi - Semi-formal visiting kimono'
      ],
      elements: [
        'Main garment (kimono)',
        'Obi (decorative sash)',
        'Obiage (obi scarf)',
        'Obijime (obi cord)',
        'Tabi (split-toe socks)',
        'Geta or zori (traditional footwear)'
      ],
      occasions: [
        'Weddings and formal ceremonies',
        'Tea ceremony and cultural events',
        'Coming of age celebrations',
        'New Year festivities',
        'Traditional festivals',
        'Cultural performances'
      ],
      significance: 'Kimono represents Japanese aesthetic values of subtlety, seasonality, and craftsmanship. The choice of colors, patterns, and accessories reflects the wearer\'s age, marital status, and the season, embodying the Japanese sensitivity to nature and social harmony.'
    },
    'calligraphy': {
      name: 'Calligraphy',
      title: 'Shodo - The Way of Writing',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional calligraphy brush and ink'
        },
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Calligraphy practice and artwork'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Master calligrapher at work'
        }
      ],
      origin: '6th century (Asuka Period)',
      practitioners: 'Students, artists, and cultural enthusiasts',
      location: 'Schools, temples, and cultural centers',
      description: 'Japanese calligraphy, or shodo, is the artistic practice of writing Japanese characters with brush and ink. It combines physical technique with spiritual discipline, emphasizing the beauty of written expression.',
      history: 'Calligraphy came to Japan from China in the 6th century along with Buddhism and Chinese writing systems. Japanese calligraphy developed its own distinctive styles, incorporating hiragana and katakana alongside Chinese characters (kanji).',
      tools: [
        'Fude (writing brush) - Various sizes and materials',
        'Sumi (ink) - Traditional black ink stick',
        'Suzuri (ink stone) - For grinding ink',
        'Washi (paper) - Traditional Japanese paper',
        'Bunchin (paperweight) - To hold paper steady',
        'Hanshi (practice paper) - For daily practice'
      ],
      styles: [
        'Kaisho - Block style, formal and precise',
        'Gyosho - Semi-cursive style, flowing but readable',
        'Sosho - Cursive style, highly artistic and abstract',
        'Tensho - Seal script, ancient formal style',
        'Reisho - Clerical script, used in official documents'
      ],
      principles: [
        'Proper posture and breathing',
        'Brush control and ink flow',
        'Balance and composition',
        'Rhythm and movement',
        'Spiritual concentration',
        'Respect for tradition'
      ],
      significance: 'Shodo is considered one of the essential Japanese arts, teaching discipline, patience, and aesthetic sensitivity. It connects practitioners with Japanese literary tradition and serves as a form of meditation, promoting mental clarity and spiritual growth.'
    },
    'ikebana': {
      name: 'Ikebana',
      title: 'The Art of Flower Arrangement',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional ikebana arrangement'
        },
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Seasonal ikebana with cherry blossoms'
        },
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Modern ikebana interpretation'
        }
      ],
      origin: '15th century (Muromachi Period)',
      practitioners: 'Ikebana artists and students worldwide',
      location: 'Homes, temples, and cultural centers',
      description: 'Ikebana is the Japanese art of flower arrangement that emphasizes harmony, color, rhythm, and elegantly simple design. It is more than mere decoration; it is a disciplined art form that brings nature and humanity together.',
      history: 'Ikebana originated in the 15th century from the Buddhist ritual of offering flowers to spirits of the dead. It evolved from simple temple offerings to a sophisticated art form with various schools and styles, each with distinct philosophies and techniques.',
      principles: [
        'Asymmetrical balance and harmony',
        'Use of negative space (ma)',
        'Seasonal awareness and natural materials',
        'Minimalism and restraint',
        'Symbolic representation of heaven, earth, and humanity',
        'Respect for natural growth patterns'
      ],
      schools: [
        'Ikenobo - Oldest and most traditional school',
        'Ohara - Emphasizes naturalistic arrangements',
        'Sogetsu - Modern and creative interpretations',
        'Koryu - Classical formal arrangements',
        'Enshu - Tea ceremony style arrangements'
      ],
      elements: [
        'Shin (heaven) - Tallest element',
        'Soe (earth) - Medium height element',
        'Hikae (humanity) - Shortest element',
        'Kenzan (pin holder) - To secure stems',
        'Suiban (shallow bowl) - Traditional container',
        'Seasonal flowers and branches'
      ],
      significance: 'Ikebana teaches patience, appreciation for natural beauty, and the Japanese aesthetic of finding perfection in imperfection. It embodies the Buddhist philosophy of impermanence and the Shinto reverence for nature, creating a meditative practice that connects practitioners with the changing seasons.'
    }
  };

  const culture = cultureData[cultureName as keyof typeof cultureData];

  if (!culture) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Culture Not Found</h1>
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
              src={culture.image} 
              alt={culture.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{culture.name}</h1>
                <p className="text-2xl opacity-90">{culture.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Culture Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Calendar className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Origin</h3>
            </div>
            <p className="text-gray-600">{culture.origin}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Practitioners</h3>
            </div>
            <p className="text-gray-600">{culture.practitioners}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Location</h3>
            </div>
            <p className="text-gray-600">{culture.location}</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About {culture.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{culture.description}</p>
        </div>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {culture.gallery?.map((image, index) => (
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
          <p className="text-gray-700 leading-relaxed">{culture.history}</p>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {culture.principles ? 'Core Principles' : culture.types ? 'Types' : culture.tools ? 'Essential Tools' : 'Key Elements'}
            </h2>
            <ul className="space-y-3">
              {(culture.principles || culture.types || culture.tools || culture.elements || []).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {culture.elements && !culture.tools ? 'Key Elements' : culture.schools ? 'Major Schools' : culture.styles ? 'Writing Styles' : culture.occasions ? 'Special Occasions' : 'Additional Info'}
            </h2>
            <ul className="space-y-3">
              {(culture.schools || culture.styles || culture.occasions || (culture.elements && culture.tools ? culture.elements : []) || []).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cultural Significance */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{culture.significance}</p>
        </div>
      </div>
    </div>
  );
};

export default TraditionalCultureDetail;
