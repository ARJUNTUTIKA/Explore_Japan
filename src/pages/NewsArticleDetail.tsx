import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';

const NewsArticleDetail = () => {
  const { articleId } = useParams();

  const articleData = {
    'bullet-train-technology': {
      id: 'bullet-train-technology',
      title: 'Japan Launches New Bullet Train Technology',
      subtitle: 'Revolutionary Shinkansen Advances Promise Faster, More Efficient Travel',
      image: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: 'March 15, 2024',
      category: 'Technology',
      author: 'Hiroshi Tanaka',
      readTime: '5 min read',
      summary: 'The latest shinkansen technology promises even faster and more efficient transportation across Japan.',
      content: [
        {
          type: 'paragraph',
          text: 'Japan Railway (JR) has unveiled groundbreaking advancements in bullet train technology that will revolutionize high-speed rail travel. The new N700S Supreme series represents the pinnacle of Japanese engineering, incorporating cutting-edge materials, advanced aerodynamics, and smart technology systems.'
        },
        {
          type: 'heading',
          text: 'Technological Breakthroughs'
        },
        {
          type: 'paragraph',
          text: 'The latest Shinkansen features include lightweight carbon fiber construction, reducing energy consumption by 15% while maintaining the same safety standards. Advanced magnetic levitation components allow for smoother rides and reduced maintenance requirements.'
        },
        {
          type: 'paragraph',
          text: 'Smart sensors throughout the train monitor everything from passenger comfort to track conditions in real-time, enabling predictive maintenance and optimal performance adjustments during operation.'
        },
        {
          type: 'heading',
          text: 'Speed and Efficiency Improvements'
        },
        {
          type: 'paragraph',
          text: 'The new trains can reach speeds of up to 360 km/h (224 mph) in commercial operation, reducing travel time between Tokyo and Osaka by an additional 10 minutes. Energy efficiency improvements mean lower environmental impact and operational costs.'
        },
        {
          type: 'paragraph',
          text: 'Advanced braking systems and improved aerodynamics allow for faster acceleration and deceleration, enabling more frequent departures and increased capacity on popular routes.'
        },
        {
          type: 'heading',
          text: 'Passenger Experience Enhancements'
        },
        {
          type: 'paragraph',
          text: 'Interior improvements include larger windows, improved Wi-Fi connectivity, and enhanced seating comfort. The new trains also feature better accessibility options for elderly and disabled passengers, reflecting Japan\'s commitment to inclusive design.'
        },
        {
          type: 'paragraph',
          text: 'Noise reduction technology ensures a quieter ride both inside the train and for communities along the railway lines, addressing long-standing environmental concerns.'
        }
      ],
      relatedImages: [
        {
          url: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'The new N700S Supreme bullet train at Tokyo Station'
        },
        {
          url: 'https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Advanced manufacturing facility for Shinkansen components'
        },
        {
          url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Modern train interior with enhanced passenger amenities'
        }
      ],
      tags: ['Transportation', 'Innovation', 'Shinkansen', 'Technology', 'Infrastructure']
    },
    'cherry-blossom-forecast': {
      id: 'cherry-blossom-forecast',
      title: 'Cherry Blossom Season Forecast Released',
      subtitle: 'Early Blooming Expected Across Japan This Spring',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: 'March 12, 2024',
      category: 'Nature',
      author: 'Sakura Yamamoto',
      readTime: '4 min read',
      summary: 'Meteorologists predict an early blooming season this year, with peak times varying across regions.',
      content: [
        {
          type: 'paragraph',
          text: 'The Japan Meteorological Agency has released its highly anticipated cherry blossom forecast for 2024, predicting an earlier than usual blooming season across most of the country. Warmer winter temperatures and favorable spring conditions are contributing to the accelerated schedule.'
        },
        {
          type: 'heading',
          text: 'Regional Blooming Schedule'
        },
        {
          type: 'paragraph',
          text: 'Tokyo is expected to see first blooms around March 20th, with full bloom anticipated by March 28th. Kyoto will follow closely, with peak viewing expected in early April. Northern regions like Sendai and Aomori will experience their peak seasons in late April to early May.'
        },
        {
          type: 'paragraph',
          text: 'The southern island of Okinawa has already begun its cherry blossom season, with the unique Kanhizakura variety blooming in late January and February, offering visitors an extended hanami experience.'
        },
        {
          type: 'heading',
          text: 'Climate Factors'
        },
        {
          type: 'paragraph',
          text: 'This year\'s early forecast is attributed to a milder winter with fewer extremely cold days, allowing cherry trees to accumulate the necessary chill hours more efficiently. Spring temperatures are also expected to be slightly above average, accelerating the blooming process.'
        },
        {
          type: 'paragraph',
          text: 'Climate scientists note that earlier blooming has become a trend over the past decade, with average bloom dates advancing by approximately one week compared to historical averages from the 20th century.'
        },
        {
          type: 'heading',
          text: 'Tourism and Cultural Impact'
        },
        {
          type: 'paragraph',
          text: 'The early forecast is welcome news for tourism operators and hanami enthusiasts. Popular viewing spots like Ueno Park in Tokyo and Maruyama Park in Kyoto are preparing for increased visitor numbers during the peak blooming period.'
        },
        {
          type: 'paragraph',
          text: 'Traditional hanami festivals and events are being scheduled accordingly, with many venues offering special illumination events for evening cherry blossom viewing (yozakura).'
        }
      ],
      relatedImages: [
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Cherry blossoms in full bloom at a Tokyo park'
        },
        {
          url: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Families enjoying hanami picnics under sakura trees'
        },
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional shrine surrounded by cherry blossoms'
        }
      ],
      tags: ['Cherry Blossoms', 'Hanami', 'Spring', 'Tourism', 'Weather', 'Culture']
    },
    'olympics-legacy': {
      id: 'olympics-legacy',
      title: 'Tokyo Olympics Legacy Projects Continue',
      subtitle: 'Infrastructure Improvements Benefit Local Communities',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: 'March 10, 2024',
      category: 'Sports',
      author: 'Kenji Nakamura',
      readTime: '6 min read',
      summary: 'Infrastructure improvements from the Tokyo Olympics continue to benefit local communities.',
      content: [
        {
          type: 'paragraph',
          text: 'Three years after the Tokyo 2020 Olympics, the lasting impact of the Games continues to transform communities across Japan. The comprehensive legacy program has successfully converted Olympic infrastructure into valuable community assets while promoting sports participation and urban development.'
        },
        {
          type: 'heading',
          text: 'Venue Transformations'
        },
        {
          type: 'paragraph',
          text: 'The Olympic Village has been converted into affordable housing units, providing homes for over 12,000 residents. The development includes parks, schools, and community centers, creating a model sustainable neighborhood in Tokyo Bay.'
        },
        {
          type: 'paragraph',
          text: 'Sports venues like the Aquatics Centre and Ariake Arena now serve as public facilities, offering swimming programs, basketball courts, and fitness classes to local residents at subsidized rates.'
        },
        {
          type: 'heading',
          text: 'Transportation Improvements'
        },
        {
          type: 'paragraph',
          text: 'New train lines and bus routes established for the Olympics continue to improve connectivity between Tokyo\'s eastern districts and the city center. The enhanced transportation network has reduced commute times and improved access to employment opportunities.'
        },
        {
          type: 'paragraph',
          text: 'Accessibility improvements made for Paralympic athletes have created a more inclusive urban environment, with barrier-free access now standard across Olympic venues and surrounding areas.'
        },
        {
          type: 'heading',
          text: 'Community Sports Programs'
        },
        {
          type: 'paragraph',
          text: 'The "Sport for Tomorrow" initiative has introduced Olympic sports to schools and community centers nationwide. Programs in skateboarding, surfing, and sport climbing have seen particular success, inspiring a new generation of athletes.'
        },
        {
          type: 'paragraph',
          text: 'Volunteer programs established for the Olympics have evolved into ongoing community service initiatives, with former Olympic volunteers continuing to support local sports events and community activities.'
        },
        {
          type: 'heading',
          text: 'Economic and Social Impact'
        },
        {
          type: 'paragraph',
          text: 'Local businesses in Olympic host areas report sustained increases in foot traffic and tourism. The international exposure has helped establish Tokyo\'s eastern districts as new cultural and entertainment destinations.'
        },
        {
          type: 'paragraph',
          text: 'Environmental initiatives from the Games, including renewable energy systems and waste reduction programs, continue to serve as models for sustainable urban development across Japan.'
        }
      ],
      relatedImages: [
        {
          url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Former Olympic Village now serving as residential community'
        },
        {
          url: 'https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Community sports programs in converted Olympic venues'
        },
        {
          url: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Improved transportation infrastructure serving local communities'
        }
      ],
      tags: ['Olympics', 'Legacy', 'Community', 'Infrastructure', 'Sports', 'Urban Development']
    },
    'unesco-heritage': {
      id: 'unesco-heritage',
      title: 'New UNESCO World Heritage Site Nominated',
      subtitle: 'Japan Proposes Additional Cultural Sites for International Recognition',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: 'March 8, 2024',
      category: 'Culture',
      author: 'Yuki Sato',
      readTime: '5 min read',
      summary: 'Japan nominates additional cultural sites for UNESCO World Heritage recognition.',
      content: [
        {
          type: 'paragraph',
          text: 'Japan has submitted nominations for three new UNESCO World Heritage Sites, highlighting the country\'s commitment to preserving its rich cultural heritage for future generations. The nominations include ancient pilgrimage routes, traditional craft villages, and historic castle towns.'
        },
        {
          type: 'heading',
          text: 'Nominated Sites'
        },
        {
          type: 'paragraph',
          text: 'The Kumano Kodo pilgrimage routes extension includes additional sacred paths and spiritual sites that have been used for over 1,000 years. These mountain trails connect Shinto and Buddhist sacred sites across the Kii Peninsula.'
        },
        {
          type: 'paragraph',
          text: 'Traditional craft villages in rural Japan showcase centuries-old techniques in pottery, textile production, and metalworking. These communities have maintained their cultural practices despite modernization pressures.'
        },
        {
          type: 'paragraph',
          text: 'Historic castle towns represent unique examples of Japanese urban planning from the Edo period, featuring preserved merchant districts, samurai residences, and traditional architecture.'
        },
        {
          type: 'heading',
          text: 'Cultural Significance'
        },
        {
          type: 'paragraph',
          text: 'These sites represent the diversity of Japanese cultural heritage, from spiritual traditions to artistic craftsmanship and urban development. Each nomination demonstrates outstanding universal value and authentic preservation of traditional practices.'
        },
        {
          type: 'paragraph',
          text: 'The pilgrimage routes continue to be used by modern practitioners, maintaining their spiritual significance while adapting to contemporary needs. Local communities actively participate in preservation efforts and cultural transmission.'
        },
        {
          type: 'heading',
          text: 'Preservation Efforts'
        },
        {
          type: 'paragraph',
          text: 'Local governments and communities have implemented comprehensive conservation plans, including traditional building restoration, landscape protection, and cultural practice documentation.'
        },
        {
          type: 'paragraph',
          text: 'Educational programs ensure that traditional knowledge and skills are passed to younger generations, while sustainable tourism initiatives provide economic support for preservation activities.'
        },
        {
          type: 'heading',
          text: 'International Recognition'
        },
        {
          type: 'paragraph',
          text: 'UNESCO recognition would provide international protection and support for these cultural treasures, while raising global awareness of Japan\'s diverse heritage beyond its most famous landmarks.'
        },
        {
          type: 'paragraph',
          text: 'The nomination process involves extensive documentation and community engagement, demonstrating Japan\'s commitment to participatory heritage conservation and cultural sustainability.'
        }
      ],
      relatedImages: [
        {
          url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional shrine architecture representing Japanese cultural heritage'
        },
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional craft workshop preserving ancient techniques'
        },
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Historic castle town with preserved Edo period architecture'
        }
      ],
      tags: ['UNESCO', 'Heritage', 'Culture', 'Preservation', 'Traditional Crafts', 'History']
    },
    'sustainable-tourism': {
      id: 'sustainable-tourism',
      title: 'Sustainable Tourism Initiative Launched',
      subtitle: 'New Programs Promote Eco-Friendly Travel While Preserving Natural Beauty',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1200',
      date: 'March 5, 2024',
      category: 'Environment',
      author: 'Midori Tanaka',
      readTime: '4 min read',
      summary: 'New programs aim to promote eco-friendly travel while preserving Japan\'s natural beauty.',
      content: [
        {
          type: 'paragraph',
          text: 'Japan has launched a comprehensive sustainable tourism initiative aimed at balancing the country\'s growing popularity as a travel destination with the need to protect its natural environments and cultural sites. The program introduces innovative approaches to eco-friendly travel and community-based tourism.'
        },
        {
          type: 'heading',
          text: 'Green Travel Programs'
        },
        {
          type: 'paragraph',
          text: 'New eco-certification programs for hotels and ryokan encourage the adoption of renewable energy, waste reduction, and local sourcing practices. Participating accommodations receive recognition and marketing support to attract environmentally conscious travelers.'
        },
        {
          type: 'paragraph',
          text: 'Carbon offset programs for international visitors allow tourists to compensate for their travel emissions by supporting reforestation projects and renewable energy development in rural Japan.'
        },
        {
          type: 'heading',
          text: 'Community-Based Tourism'
        },
        {
          type: 'paragraph',
          text: 'Rural communities are being supported to develop authentic cultural experiences that provide economic benefits while preserving traditional ways of life. These programs include farm stays, traditional craft workshops, and guided nature experiences led by local experts.'
        },
        {
          type: 'paragraph',
          text: 'Revenue-sharing models ensure that tourism income directly benefits local communities, funding conservation projects and cultural preservation initiatives.'
        },
        {
          type: 'heading',
          text: 'Natural Area Protection'
        },
        {
          type: 'paragraph',
          text: 'Popular natural destinations are implementing visitor management systems to prevent overcrowding and environmental damage. Reservation systems, guided tour requirements, and seasonal access restrictions help protect fragile ecosystems.'
        },
        {
          type: 'paragraph',
          text: 'Educational programs for visitors emphasize Leave No Trace principles and cultural sensitivity, ensuring that tourism contributes positively to conservation efforts.'
        },
        {
          type: 'heading',
          text: 'Technology Integration'
        },
        {
          type: 'paragraph',
          text: 'Digital platforms provide real-time information about crowding levels at popular sites, helping visitors choose less crowded alternatives and distribute tourism pressure more evenly across destinations.'
        },
        {
          type: 'paragraph',
          text: 'Mobile apps offer sustainable travel options, including public transportation routes, eco-friendly accommodations, and local conservation projects that visitors can support.'
        },
        {
          type: 'heading',
          text: 'Long-term Vision'
        },
        {
          type: 'paragraph',
          text: 'The initiative aims to position Japan as a global leader in sustainable tourism, demonstrating that economic benefits and environmental protection can coexist. Success metrics include visitor satisfaction, community economic impact, and environmental conservation outcomes.'
        }
      ],
      relatedImages: [
        {
          url: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Pristine natural landscapes protected through sustainable tourism'
        },
        {
          url: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Community-based tourism experiences in rural Japan'
        },
        {
          url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Eco-friendly accommodations promoting sustainable travel'
        }
      ],
      tags: ['Sustainable Tourism', 'Environment', 'Conservation', 'Community', 'Eco-friendly', 'Travel']
    }
  };

  const article = articleData[articleId as keyof typeof articleData];

  if (!article) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Link to="/news" className="text-red-600 hover:text-red-700">
            Return to News Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/news" 
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to News
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="relative h-96">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          {/* Article Info */}
          <div className="p-8">
            <div className="flex items-center mb-4 text-sm text-gray-600">
              <span className={`px-3 py-1 rounded-full text-white mr-4 ${
                article.category === 'Technology' ? 'bg-blue-600' :
                article.category === 'Nature' ? 'bg-green-600' :
                article.category === 'Sports' ? 'bg-orange-600' :
                article.category === 'Culture' ? 'bg-purple-600' :
                'bg-teal-600'
              }`}>
                {article.category}
              </span>
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                {article.date}
              </div>
              <div className="flex items-center mr-4">
                <User size={16} className="mr-1" />
                {article.author}
              </div>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{article.subtitle}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{article.summary}</p>
          </div>
        </article>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => (
              <div key={index} className="mb-6">
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.text}</h2>
                )}
                {section.type === 'paragraph' && (
                  <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Images */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Related Images</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {article.relatedImages.map((image, index) => (
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

        {/* Tags */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleDetail;
