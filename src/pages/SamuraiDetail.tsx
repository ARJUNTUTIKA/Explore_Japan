import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sword, Shield, Crown } from 'lucide-react';

const SamuraiDetail = () => {
  const { samuraiTopic } = useParams();

  const samuraiData = {
    'bushido': {
      name: 'Bushido',
      title: 'The Way of the Warrior',
      image: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Sword className="text-red-600" size={48} />,
      gallery: [
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Samurai warrior in traditional armor'
        },
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional samurai ceremony'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Bushido principles in practice'
        }
      ],
      period: '12th-19th century',
      origin: 'Kamakura Period (1185-1333)',
      influence: 'Modern Japanese business and social ethics',
      description: 'Bushido, literally "the way of the warrior," was the moral code and way of life of the samurai class in feudal Japan. It emphasized virtues such as loyalty, honor, courage, and self-sacrifice.',
      history: 'Bushido evolved during the Kamakura period as a code of conduct for the warrior class. It was influenced by Zen Buddhism, Confucianism, and Shintoism, creating a unique Japanese warrior philosophy that governed samurai behavior for centuries.',
      virtues: [
        {
          name: 'Gi (義) - Rectitude',
          description: 'Moral uprightness and doing what is right',
          application: 'Making decisions based on moral principles rather than personal gain'
        },
        {
          name: 'Yu (勇) - Courage',
          description: 'Bravery in the face of danger and adversity',
          application: 'Standing up for beliefs and protecting the weak'
        },
        {
          name: 'Jin (仁) - Benevolence',
          description: 'Compassion and kindness toward others',
          application: 'Showing mercy and helping those in need'
        },
        {
          name: 'Rei (礼) - Respect',
          description: 'Proper behavior and courtesy',
          application: 'Treating all people with dignity and politeness'
        },
        {
          name: 'Makoto (誠) - Honesty',
          description: 'Truthfulness and sincerity in all dealings',
          application: 'Speaking truth and keeping promises'
        },
        {
          name: 'Meiyo (名誉) - Honor',
          description: 'Maintaining dignity and reputation',
          application: 'Living up to one\'s word and accepting responsibility'
        },
        {
          name: 'Chugi (忠義) - Loyalty',
          description: 'Faithfulness to one\'s lord and principles',
          application: 'Dedication to duty and unwavering commitment'
        }
      ],
      practices: [
        'Daily meditation and self-reflection',
        'Martial arts training and discipline',
        'Study of literature and philosophy',
        'Tea ceremony and cultural refinement',
        'Ritual suicide (seppuku) to preserve honor',
        'Loyalty oaths and service to daimyo'
      ],
      modernLegacy: 'Bushido principles continue to influence modern Japanese culture, business ethics, and martial arts. The emphasis on loyalty, hard work, and group harmony can be seen in Japanese corporate culture and social relationships.',
      significance: 'Bushido shaped the character of Japan for centuries and continues to influence Japanese values today. It represents the ideal of living with purpose, integrity, and dedication to something greater than oneself.'
    },
    'katana': {
      name: 'Katana',
      title: 'The Soul of the Samurai',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Sword className="text-blue-600" size={48} />,
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional katana with ornate fittings'
        },
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Katana forging process'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Samurai with katana in traditional setting'
        }
      ],
      period: '10th century - present',
      origin: 'Heian Period (794-1185)',
      influence: 'Global sword-making and martial arts',
      description: 'The katana is a curved, single-edged sword traditionally used by samurai. More than just a weapon, it was considered the soul of the warrior and a symbol of honor, craftsmanship, and spiritual power.',
      history: 'The katana evolved from earlier straight swords during the Heian period. Master swordsmiths developed unique forging techniques that created blades of exceptional sharpness, flexibility, and beauty. Each sword was considered a work of art and spiritual significance.',
      construction: [
        {
          name: 'Tamahagane Steel',
          description: 'Traditional steel made from iron sand and charcoal',
          importance: 'Provides the raw material with varying carbon content'
        },
        {
          name: 'Folding and Forging',
          description: 'Steel is folded multiple times to remove impurities',
          importance: 'Creates strong, flexible blade with distinctive grain pattern'
        },
        {
          name: 'Differential Hardening',
          description: 'Different parts of blade cooled at different rates',
          importance: 'Creates hard edge and flexible spine'
        },
        {
          name: 'Hamon (Temper Line)',
          description: 'Visible line between hard and soft steel',
          importance: 'Indicates quality and adds aesthetic beauty'
        }
      ],
      components: [
        'Blade (Nagasa) - The cutting edge and main body',
        'Guard (Tsuba) - Protects the hand',
        'Handle (Tsuka) - Wrapped in ray skin and silk',
        'Scabbard (Saya) - Wooden sheath for protection',
        'Fittings (Koshirae) - Decorative metal components'
      ],
      famousSmiths: [
        'Masamune - Greatest swordsmith, 13th-14th century',
        'Muramasa - Known for sharp, "bloodthirsty" blades',
        'Kotetsu - Master of the Edo period',
        'Gassan Sadatoshi - Modern Living National Treasure'
      ],
      spiritualAspects: [
        'Considered to contain the soul of the samurai',
        'Blessed in Shinto ceremonies',
        'Passed down through generations as family treasures',
        'Used in ritual suicide (seppuku) to preserve honor',
        'Symbol of justice and divine protection'
      ],
      modernStatus: 'Today, authentic katana are considered national treasures and works of art. Modern swordsmiths continue the tradition, and the katana remains an important symbol in Japanese culture and martial arts worldwide.',
      significance: 'The katana represents the pinnacle of Japanese metallurgy and craftsmanship. It embodies the samurai ideals of precision, dedication, and spiritual discipline, serving as both practical weapon and sacred object.'
    },
    'castles': {
      name: 'Japanese Castles',
      title: 'Fortresses of the Samurai',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Crown className="text-purple-600" size={48} />,
      gallery: [
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Japanese castle with cherry blossoms'
        },
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Castle grounds and traditional architecture'
        },
        {
          url: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Castle overlooking Japanese landscape'
        }
      ],
      period: '15th-17th century (main construction)',
      origin: 'Muromachi Period (1336-1573)',
      influence: 'Japanese architecture and urban planning',
      description: 'Japanese castles were the fortified residences of daimyo (feudal lords) and served as administrative centers, military strongholds, and symbols of power during the feudal period.',
      history: 'Castle construction peaked during the Sengoku period (1467-1615) as regional lords competed for territory. The Edo period saw further refinement of castle architecture, with many serving as administrative centers for the Tokugawa shogunate.',
      architecture: [
        {
          name: 'Stone Foundation (Ishigaki)',
          description: 'Massive stone walls built without mortar',
          purpose: 'Provides stable foundation and defensive barrier'
        },
        {
          name: 'Main Keep (Tenshu)',
          description: 'Central tower serving as last line of defense',
          purpose: 'Command center and symbol of lord\'s power'
        },
        {
          name: 'Multiple Baileys (Kuruwa)',
          description: 'Concentric defensive rings around the keep',
          purpose: 'Layered defense and administrative spaces'
        },
        {
          name: 'Gates and Bridges',
          description: 'Controlled access points with defensive features',
          purpose: 'Regulate entry and create chokepoints'
        }
      ],
      famousCastles: [
        'Himeji Castle - UNESCO World Heritage Site, pristine condition',
        'Matsumoto Castle - "Crow Castle" with distinctive black exterior',
        'Kumamoto Castle - Known for impressive stone walls',
        'Osaka Castle - Reconstructed symbol of Toyotomi power',
        'Edo Castle - Former Tokugawa stronghold, now Imperial Palace'
      ],
      defensiveFeatures: [
        'Maze-like approaches to confuse attackers',
        'Murder holes for dropping stones or boiling oil',
        'Hidden passages and secret rooms',
        'Moats and water defenses',
        'Steep stone walls difficult to climb',
        'Strategic placement on hills or elevated ground'
      ],
      culturalRole: [
        'Centers of regional government and administration',
        'Symbols of daimyo power and prestige',
        'Cultural centers promoting arts and learning',
        'Economic hubs for surrounding castle towns',
        'Military headquarters and training grounds'
      ],
      modernLegacy: 'Today, surviving castles are important cultural properties and tourist attractions. They represent the pinnacle of Japanese defensive architecture and continue to inspire modern Japanese design and urban planning.',
      significance: 'Japanese castles represent the military, political, and cultural power of the samurai class. They showcase advanced engineering, artistic beauty, and strategic thinking that defined feudal Japan.'
    },
    'honor': {
      name: 'Samurai Honor',
      title: 'The Code of Dignity and Duty',
      image: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Shield className="text-gold-600" size={48} />,
      gallery: [
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Samurai in formal ceremonial dress'
        },
        {
          url: 'https://images.pexels.com/photos/5778893/pexels-photo-5778893.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional honor ceremony'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Samurai demonstrating honor through service'
        }
      ],
      period: '12th-19th century',
      origin: 'Kamakura Period warrior culture',
      influence: 'Modern Japanese business and social ethics',
      description: 'Honor (meiyo) was the cornerstone of samurai identity, encompassing personal integrity, family reputation, loyalty to one\'s lord, and the willingness to sacrifice everything to maintain dignity and fulfill duty.',
      history: 'The concept of samurai honor evolved from early warrior traditions and was codified during the medieval period. It became so central to samurai identity that loss of honor was considered worse than death, leading to the practice of ritual suicide (seppuku).',
      aspects: [
        {
          name: 'Personal Integrity',
          description: 'Living according to moral principles regardless of consequences',
          manifestation: 'Keeping promises, telling truth, accepting responsibility'
        },
        {
          name: 'Family Honor',
          description: 'Maintaining the reputation of one\'s ancestral line',
          manifestation: 'Upholding family traditions, avoiding shameful acts'
        },
        {
          name: 'Loyalty to Lord',
          description: 'Unwavering service and dedication to one\'s daimyo',
          manifestation: 'Following orders, protecting lord\'s interests, dying if necessary'
        },
        {
          name: 'Professional Competence',
          description: 'Mastery of martial and cultural arts',
          manifestation: 'Continuous training, studying strategy, cultural refinement'
        }
      ],
      honorableBehaviors: [
        'Keeping one\'s word regardless of personal cost',
        'Protecting the weak and innocent',
        'Accepting responsibility for failures',
        'Showing respect to all people regardless of status',
        'Pursuing excellence in all endeavors',
        'Sacrificing personal desires for duty'
      ],
      dishonorableActs: [
        'Breaking promises or oaths',
        'Showing cowardice in battle',
        'Betraying one\'s lord or allies',
        'Lying or deceiving others',
        'Abandoning duty for personal gain',
        'Bringing shame to family name'
      ],
      seppuku: [
        'Ritual suicide to restore honor after disgrace',
        'Performed with specific ceremony and witnesses',
        'Demonstrated ultimate commitment to honor',
        'Could restore family reputation',
        'Required tremendous courage and resolve'
      ],
      modernRelevance: 'The samurai concept of honor continues to influence Japanese culture, emphasizing personal responsibility, group loyalty, and maintaining dignity in all circumstances. It can be seen in modern Japanese business practices and social relationships.',
      significance: 'Samurai honor represented the highest ideals of human conduct, emphasizing that reputation and integrity were more valuable than life itself. This concept shaped Japanese culture and continues to influence values of duty, loyalty, and personal excellence.'
    }
  };

  const samurai = samuraiData[samuraiTopic as keyof typeof samuraiData];

  if (!samurai) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Samurai Topic Not Found</h1>
          <Link to="/history" className="text-red-600 hover:text-red-700">
            Return to History Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/history" 
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to History
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-12">
          <div className="relative h-96">
            <img 
              src={samurai.image} 
              alt={samurai.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mb-4">{samurai.icon}</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{samurai.name}</h1>
                <p className="text-2xl opacity-90">{samurai.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Period</h3>
            <p className="text-gray-600">{samurai.period}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Origin</h3>
            <p className="text-gray-600">{samurai.origin}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Influence</h3>
            <p className="text-gray-600">{samurai.influence}</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About {samurai.name}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{samurai.description}</p>
        </div>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {samurai.gallery?.map((image, index) => (
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
          <p className="text-gray-700 leading-relaxed">{samurai.history}</p>
        </div>

        {/* Detailed Information */}
        {samurai.virtues && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Seven Virtues of Bushido</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {samurai.virtues.map((virtue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">{virtue.name}</h3>
                  <p className="text-gray-700 mb-3">{virtue.description}</p>
                  <p className="text-sm text-gray-600 italic">{virtue.application}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {samurai.construction && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Katana Construction</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {samurai.construction.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{step.name}</h3>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  <p className="text-sm text-gray-600 italic">{step.importance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {samurai.architecture && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Castle Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {samurai.architecture.map((element, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">{element.name}</h3>
                  <p className="text-gray-700 mb-3">{element.description}</p>
                  <p className="text-sm text-gray-600 italic">{element.purpose}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {samurai.aspects && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Aspects of Honor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {samurai.aspects.map((aspect, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">{aspect.name}</h3>
                  <p className="text-gray-700 mb-3">{aspect.description}</p>
                  <p className="text-sm text-gray-600 italic">{aspect.manifestation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Lists */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {(samurai.practices || samurai.components || samurai.famousCastles || samurai.honorableBehaviors) && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {samurai.practices ? 'Traditional Practices' : 
                 samurai.components ? 'Katana Components' : 
                 samurai.famousCastles ? 'Famous Castles' : 'Honorable Behaviors'}
              </h2>
              <ul className="space-y-3">
                {(samurai.practices || samurai.components || samurai.famousCastles || samurai.honorableBehaviors || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {(samurai.famousSmiths || samurai.defensiveFeatures || samurai.dishonorableActs) && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {samurai.famousSmiths ? 'Famous Swordsmiths' : 
                 samurai.defensiveFeatures ? 'Defensive Features' : 'Dishonorable Acts'}
              </h2>
              <ul className="space-y-3">
                {(samurai.famousSmiths || samurai.defensiveFeatures || samurai.dishonorableActs || []).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Special Sections */}
        {samurai.spiritualAspects && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Spiritual Aspects</h2>
            <ul className="space-y-3">
              {samurai.spiritualAspects.map((aspect, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{aspect}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {samurai.seppuku && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Seppuku (Ritual Suicide)</h2>
            <ul className="space-y-3">
              {samurai.seppuku.map((aspect, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{aspect}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modern Legacy and Significance */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {samurai.modernLegacy ? 'Modern Legacy' : 'Modern Status'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {samurai.modernLegacy || samurai.modernStatus || samurai.modernRelevance}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
            <p className="text-gray-700 leading-relaxed">{samurai.significance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamuraiDetail;
