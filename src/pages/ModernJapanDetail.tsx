import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Globe, Lightbulb } from 'lucide-react';

const ModernJapanDetail = () => {
  const { sectionName } = useParams();

  const sectionData = {
    'technology-hub': {
      name: 'Technology Hub',
      title: 'Japan\'s Technological Innovation',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Cpu className="text-blue-600" size={48} />,
      description: 'Japan stands at the forefront of global technological innovation, leading breakthroughs in robotics, electronics, automotive technology, and artificial intelligence that shape the modern world.',
      history: 'Japan\'s technological revolution began in the post-war era with companies like Sony, Toyota, and Honda pioneering innovations. The country transformed from war-torn nation to technological powerhouse in just decades, becoming synonymous with quality, precision, and innovation.',
      keyAreas: [
        {
          name: 'Robotics',
          description: 'World leader in industrial and humanoid robots',
          achievements: ['ASIMO humanoid robot', 'Industrial automation systems', 'Service robots for elderly care', 'Disaster response robots']
        },
        {
          name: 'Automotive',
          description: 'Revolutionary hybrid and electric vehicle technology',
          achievements: ['Toyota Prius hybrid technology', 'Lean manufacturing systems', 'Autonomous driving research', 'Hydrogen fuel cell vehicles']
        },
        {
          name: 'Electronics',
          description: 'Consumer electronics and semiconductor innovation',
          achievements: ['Walkman and portable music', 'Digital cameras and imaging', 'Gaming consoles (PlayStation, Nintendo)', 'Semiconductor manufacturing']
        },
        {
          name: 'AI & Computing',
          description: 'Artificial intelligence and quantum computing research',
          achievements: ['Supercomputer development', 'Machine learning applications', 'Quantum computing research', 'IoT and smart city solutions']
        }
      ],
      companies: [
        'Sony - Electronics and entertainment technology',
        'Toyota - Automotive innovation and manufacturing',
        'Nintendo - Gaming and interactive entertainment',
        'SoftBank - Telecommunications and AI investment',
        'Panasonic - Consumer and industrial electronics',
        'Honda - Automotive and robotics technology'
      ],
      innovations: [
        'Bullet train (Shinkansen) high-speed rail technology',
        'Just-in-time manufacturing and lean production',
        'Compact disc (CD) and digital audio technology',
        'Lithium-ion battery technology',
        'QR code technology for mobile payments',
        'Advanced materials and nanotechnology'
      ],
      futureVision: 'Japan continues to invest heavily in emerging technologies including quantum computing, 6G networks, space technology, and sustainable energy solutions. The country aims to lead the next wave of technological innovation while addressing global challenges like aging populations and climate change.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Modern Tokyo skyline showcasing technological advancement'
        },
        {
          url: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Shinkansen bullet train - symbol of Japanese innovation'
        },
        {
          url: 'https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Advanced manufacturing and robotics facilities'
        }
      ]
    },
    'cultural-export': {
      name: 'Cultural Export',
      title: 'Japan\'s Global Cultural Influence',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Globe className="text-pink-600" size={48} />,
      description: 'Japanese pop culture has become a global phenomenon, with anime, manga, J-pop, fashion, and lifestyle trends influencing millions worldwide and creating a multi-billion dollar cultural export industry.',
      history: 'Japan\'s cultural export began in the 1960s with early anime exports, accelerated in the 1980s-90s with video games and manga, and exploded globally in the 2000s with the rise of internet culture and streaming platforms.',
      keyAreas: [
        {
          name: 'Anime & Manga',
          description: 'Japanese animation and comics dominating global entertainment',
          achievements: ['Studio Ghibli international acclaim', 'Manga sales exceeding $4 billion globally', 'Anime streaming on major platforms', 'Cultural festivals worldwide']
        },
        {
          name: 'Gaming',
          description: 'Video game industry leadership and innovation',
          achievements: ['Nintendo global gaming dominance', 'PlayStation console success', 'Mobile gaming innovations', 'Esports and competitive gaming']
        },
        {
          name: 'Fashion & Lifestyle',
          description: 'Unique fashion trends and lifestyle concepts',
          achievements: ['Harajuku street fashion influence', 'Minimalist lifestyle (Marie Kondo)', 'Kawaii culture worldwide', 'Japanese denim and craftsmanship']
        },
        {
          name: 'Music & Entertainment',
          description: 'J-pop, J-rock, and entertainment industry exports',
          achievements: ['K-pop collaboration and influence', 'Idol culture adoption', 'Music technology and production', 'Live entertainment innovations']
        }
      ],
      globalImpact: [
        'Anime conventions in over 100 countries worldwide',
        'Japanese language learning surge due to pop culture',
        'Cosplay culture adopted globally',
        'Japanese restaurants and food culture expansion',
        'Fashion trends originating from Tokyo streets',
        'Gaming culture and competitive esports growth'
      ],
      economicImpact: [
        'Content industry worth over $20 billion annually',
        'Tourism boost from cultural interest ("Cool Japan")',
        'Merchandise and licensing revenue worldwide',
        'Creative industry job creation globally',
        'Soft power and diplomatic influence',
        'Educational and language learning markets'
      ],
      futureVision: 'Japan continues to innovate in digital content, virtual reality experiences, and cross-cultural collaborations. The government\'s "Cool Japan" initiative promotes cultural exports while new technologies like VTubers and digital entertainment create new global phenomena.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Traditional Japanese culture meets modern pop culture'
        },
        {
          url: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Japanese fashion and street style influence'
        },
        {
          url: 'https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Cultural festivals celebrating Japanese entertainment'
        }
      ]
    },
    'future-vision': {
      name: 'Future Vision',
      title: 'Japan\'s Vision for Tomorrow',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1200',
      icon: <Lightbulb className="text-green-600" size={48} />,
      description: 'Japan is pioneering solutions for global challenges including aging societies, sustainable development, disaster resilience, and space exploration, positioning itself as a leader in creating tomorrow\'s world.',
      history: 'Facing unique demographic and environmental challenges, Japan has become a testing ground for innovative solutions. The country\'s approach to future planning combines traditional values with cutting-edge technology to create sustainable, human-centered solutions.',
      keyAreas: [
        {
          name: 'Aging Society Solutions',
          description: 'Innovative approaches to demographic challenges',
          achievements: ['Robotic caregiving assistance', 'Smart home technology for elderly', 'Intergenerational community design', 'Healthcare technology advancement']
        },
        {
          name: 'Sustainable Development',
          description: 'Environmental technology and green innovation',
          achievements: ['Renewable energy advancement', 'Circular economy initiatives', 'Green building technology', 'Sustainable transportation systems']
        },
        {
          name: 'Smart Cities',
          description: 'Urban planning for the digital age',
          achievements: ['IoT infrastructure development', 'AI-powered city management', 'Disaster-resilient urban design', 'Connected mobility solutions']
        },
        {
          name: 'Space & Ocean Exploration',
          description: 'Frontier exploration and resource development',
          achievements: ['JAXA space missions and research', 'Asteroid mining technology', 'Deep sea exploration capabilities', 'Satellite technology leadership']
        }
      ],
      initiatives: [
        'Society 5.0 - Super Smart Society vision',
        'Carbon neutrality by 2050 commitment',
        'Digital transformation (DX) nationwide',
        'Moonshot Research and Development Program',
        'Regional revitalization through technology',
        'Disaster prevention and resilience building'
      ],
      challenges: [
        'Declining birth rate and population aging',
        'Natural disaster preparedness and recovery',
        'Energy security and sustainability',
        'Rural area revitalization and connectivity',
        'International competitiveness in emerging tech',
        'Work-life balance and social well-being'
      ],
      futureVision: 'Japan envisions a society where technology serves humanity, creating inclusive, sustainable communities that balance innovation with traditional values. The country aims to export these solutions globally, contributing to worldwide prosperity and environmental protection.',
      gallery: [
        {
          url: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Sustainable development and environmental harmony'
        },
        {
          url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Smart city technology and urban innovation'
        },
        {
          url: 'https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=800',
          caption: 'Advanced research and development facilities'
        }
      ]
    }
  };

  const section = sectionData[sectionName as keyof typeof sectionData];

  if (!section) {
    return (
      <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Section Not Found</h1>
          <Link to="/history" className="text-red-600 hover:text-red-700">
            Return to History Page
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
              src={section.image} 
              alt={section.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mb-4">{section.icon}</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{section.name}</h1>
                <p className="text-2xl opacity-90">{section.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{section.description}</p>
        </div>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visual Showcase</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {section.gallery?.map((image, index) => (
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Historical Development</h2>
          <p className="text-gray-700 leading-relaxed">{section.history}</p>
        </div>

        {/* Key Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {section.keyAreas?.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{area.name}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-800">Key Achievements:</p>
                  {area.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {section.companies ? 'Leading Companies' : section.globalImpact ? 'Global Impact' : section.initiatives ? 'Key Initiatives' : 'Details'}
            </h2>
            <ul className="space-y-3">
              {(section.companies || section.globalImpact || section.initiatives || []).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {section.innovations ? 'Key Innovations' : section.economicImpact ? 'Economic Impact' : section.challenges ? 'Current Challenges' : 'Additional Info'}
            </h2>
            <ul className="space-y-3">
              {(section.innovations || section.economicImpact || section.challenges || []).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Future Outlook</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{section.futureVision}</p>
        </div>
      </div>
    </div>
  );
};

export default ModernJapanDetail;
