import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Award } from 'lucide-react';

const PerformingArtDetail = () => {
  const { artName } = useParams();

  const artData = {
    kabuki: {
      name: 'Kabuki',
      title: 'Traditional Japanese Theater',
      image: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Kabuki makeup and costume'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Kabuki stage performance'
        },
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Elaborate Kabuki costume details'
        }
      ],
      period: 'Year-round performances',
      origin: '1603 (Early Edo Period)',
      location: 'Major theaters across Japan',
      description: 'Kabuki is a classical Japanese dance-drama known for its elaborate makeup, extravagant costumes, and dynamic performances. It combines drama, music, and dance in a highly stylized form of theater.',
      history: 'Kabuki was founded in 1603 by Izumo no Okuni, a shrine maiden from Izumo Shrine. Originally performed by women, it was later banned for women performers in 1629, leading to the all-male tradition that continues today. Kabuki became popular among the merchant class during the Edo period.',
      characteristics: [
        'Elaborate makeup (kumadori) representing character types',
        'Extravagant costumes and wigs',
        'Stylized movements and poses (kata)',
        'Live music with shamisen, drums, and flutes',
        'Revolving stage and trap doors',
        'All-male cast (onnagata play female roles)'
      ],
      famousPlays: [
        'Chushingura (The Treasury of Loyal Retainers)',
        'Yoshitsune Senbon Zakura',
        'Kanadehon Chushingura',
        'Shibaraku',
        'Kanjincho'
      ],
      theaters: [
        'Kabuki-za Theatre, Tokyo',
        'National Theatre, Tokyo',
        'Minamiza Theatre, Kyoto',
        'Osaka Shochikuza Theatre',
        'Hakataza Theatre, Fukuoka'
      ],
      significance: 'Kabuki represents the pinnacle of Japanese theatrical art, combining multiple disciplines into a total art form. It was designated as a UNESCO Intangible Cultural Heritage in 2005, recognizing its importance to world culture.'
    },
    noh: {
      name: 'Noh',
      title: 'Classical Musical Drama',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Noh mask'
        },
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Noh stage at traditional venue'
        },
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Noh performance with traditional instruments'
        }
      ],
      period: 'Year-round performances',
      origin: '14th century (Muromachi Period)',
      location: 'Noh theaters and shrines across Japan',
      description: 'Noh is the oldest major theater art still performed today. It combines drama, music, dance, and poetry into a highly refined and minimalist performance that emphasizes spiritual and emotional depth.',
      history: 'Developed in the 14th century by Kan\'ami and his son Zeami, Noh evolved from earlier forms of entertainment. It became the official ceremonial drama of the samurai class and was refined into its current form during the Muromachi period (1336-1573).',
      characteristics: [
        'Wooden masks representing different character types',
        'Slow, deliberate movements and gestures',
        'Poetic language and classical Japanese',
        'Minimal stage design with symbolic elements',
        'Chorus (jiutai) and musicians',
        'Spiritual and supernatural themes'
      ],
      famousPlays: [
        'Hagoromo (The Feather Robe)',
        'Atsumori',
        'Matsukaze',
        'Takasago',
        'Izutsu (The Well Curb)'
      ],
      theaters: [
        'National Noh Theatre, Tokyo',
        'Kanze Noh Theatre, Tokyo',
        'Kyoto Kanze Kaikan',
        'Osaka Noh Theatre',
        'Various shrine stages'
      ],
      significance: 'Noh represents the essence of Japanese aesthetics - simplicity, subtlety, and spiritual depth. It has influenced modern theater worldwide and was designated as a UNESCO Intangible Cultural Heritage in 2001.'
    },
    bunraku: {
      name: 'Bunraku',
      title: 'Traditional Puppet Theater',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Bunraku puppet and puppeteers'
        },
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Detailed Bunraku puppet craftsmanship'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Bunraku theater performance'
        }
      ],
      period: 'Year-round performances',
      origin: '17th century (Edo Period)',
      location: 'Osaka and major cities',
      description: 'Bunraku is a form of traditional Japanese puppet theater that combines large puppets, narrative singing (joruri), and shamisen music. Each puppet is operated by three skilled puppeteers working in perfect harmony.',
      history: 'Bunraku developed in Osaka during the 17th century, reaching its golden age in the 18th century. It was created through the collaboration of playwright Chikamatsu Monzaemon, chanter Takemoto Gidayu, and puppet maker Tatsumatsu Hachirobei.',
      characteristics: [
        'Large, intricate puppets (about 2/3 human size)',
        'Three puppeteers per main puppet',
        'Narrative singing (joruri) tells the story',
        'Shamisen musical accompaniment',
        'Emotional and dramatic storylines',
        'Visible puppeteers dressed in black'
      ],
      famousPlays: [
        'Sonezaki Shinju (The Love Suicides at Sonezaki)',
        'Chushingura',
        'Yoshitsune Senbon Zakura',
        'Sugawara Denju Tenarai Kagami',
        'Kanadehon Chushingura'
      ],
      theaters: [
        'National Bunraku Theatre, Osaka',
        'National Theatre, Tokyo',
        'Awaji Puppet Theater',
        'Various regional theaters',
        'Cultural centers nationwide'
      ],
      significance: 'Bunraku demonstrates the highest level of puppetry artistry, requiring decades of training to master. It was designated as a UNESCO Intangible Cultural Heritage in 2003, recognizing its unique contribution to world theater.'
    },
    origami: {
      name: 'Origami',
      title: 'The Art of Paper Folding',
      image: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Colorful origami crane collection'
        },
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Complex origami flower designs'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional origami paper and tools'
        }
      ],
      period: 'Practiced year-round',
      origin: '6th century (Heian Period)',
      location: 'Practiced worldwide, originated in Japan',
      description: 'Origami is the Japanese art of paper folding that transforms a flat square sheet of paper into a finished sculpture through folding techniques. No cuts or glue are traditionally used.',
      history: 'Origami arrived in Japan from China in the 6th century along with Buddhist monks. Initially used for ceremonial purposes, it evolved into an art form during the Heian period (794-1185). The term "origami" comes from "ori" (folding) and "kami" (paper).',
      characteristics: [
        'Uses only folding techniques, no cutting or gluing',
        'Starts with a square piece of paper',
        'Mathematical precision and geometric principles',
        'Symbolic meanings in traditional designs',
        'Ranges from simple to incredibly complex',
        'Emphasis on clean, precise folds'
      ],
      famousDesigns: [
        'Tsuru (Crane) - symbol of peace and longevity',
        'Kabuto (Samurai Helmet)',
        'Kusudama (Medicine Ball)',
        'Kawasaki Rose',
        'Dragon and other mythical creatures'
      ],
      applications: [
        'Educational tool for geometry and math',
        'Therapeutic and meditative practice',
        'Decorative art and gifts',
        'Cultural ceremonies and celebrations',
        'Modern applications in engineering and space technology'
      ],
      significance: 'Origami embodies Japanese values of patience, precision, and finding beauty in simplicity. The crane, in particular, symbolizes peace and healing, with the tradition of folding 1,000 cranes (senbazuru) for making wishes or prayers.'
    }
  };

  const art = artData[artName as keyof typeof artData];

  if (!art) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Art Form Not Found</h1>
          <Link to="/culture" className="text-red-600 hover:text-red-700">
            Return to Culture Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
              src={art.image} 
              alt={art.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{art.name}</h1>
                <p className="text-2xl opacity-90">{art.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Art Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Calendar className="text-purple-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Origin</h3>
            </div>
            <p className="text-gray-600 mb-2">{art.origin}</p>
            <p className="text-sm text-gray-500">{art.period}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="text-purple-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Where</h3>
            </div>
            <p className="text-gray-600">{art.location}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="text-purple-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Status</h3>
            </div>
            <p className="text-gray-600">Traditional Art Form</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About {art.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{art.description}</p>
        </div>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {art.gallery?.map((image, index) => (
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
          <p className="text-gray-700 leading-relaxed">{art.history}</p>
        </div>

        {/* Characteristics and Famous Works */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Characteristics</h2>
            <ul className="space-y-3">
              {art.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {art.name === 'Origami' ? 'Famous Designs' : 'Famous Works'}
            </h2>
            <ul className="space-y-3">
              {(art.famousPlays || art.famousDesigns || []).map((work, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{work}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Venues/Applications and Significance */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {art.name === 'Origami' ? 'Modern Applications' : 'Famous Venues'}
            </h2>
            <ul className="space-y-3">
              {(art.theaters || art.applications || []).map((venue, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{venue}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
            <p className="text-gray-700 leading-relaxed">{art.significance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformingArtDetail;
