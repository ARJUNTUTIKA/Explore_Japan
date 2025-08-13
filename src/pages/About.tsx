import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Our Team
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Three passionate students dedicated to sharing the beauty and richness of Japanese culture with the world
          </p>
        </div>

        <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-8 md:p-12">
          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="T.N.V.Arjun"
                  className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-orange-500/20"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">T.N.V. ARJUN</h3>
              <p className="text-lg text-red-600 mb-4">22P31A0446</p>
              <p className="text-gray-700 mb-4">Frontend Developer & UI/UX Designer</p>
              <div className="text-sm text-gray-600">
                <p>• Designed and implemented user interface components</p>
                <p>• Created responsive layouts and animations</p>
                <p>• Developed interactive cultural content pages</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="N.Priyanka"
                  className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">N. PRIYANKA</h3>
              <p className="text-lg text-red-600 mb-4">22P31A0416</p>
              <p className="text-gray-700 mb-4">Content Researcher & Cultural Specialist</p>
              <div className="text-sm text-gray-600">
                <p>• Researched authentic Japanese cultural content</p>
                <p>• Curated historical information and traditions</p>
                <p>• Developed educational content for all sections</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src="https://images.pexels.com/photos/8969023/pexels-photo-8969023.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="G.S.D.Prasad"
                  className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/20 to-teal-500/20"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">G.S.D. PRASAD</h3>
              <p className="text-lg text-red-600 mb-4">22P31A0416</p>
              <p className="text-gray-700 mb-4">Backend Developer & Technical Lead</p>
              <div className="text-sm text-gray-600">
                <p>• Implemented routing and navigation systems</p>
                <p>• Developed interactive features and functionality</p>
                <p>• Ensured technical performance and optimization</p>
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Project</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Explore Japan" is a comprehensive cultural website developed as part of our academic project. 
                We combined our passion for Japanese culture with modern web development technologies to create 
                an immersive educational experience.
              </p>
              <p className="text-gray-600 mb-8">
                This project showcases traditional Japanese culture, modern innovations, culinary arts, 
                historical significance, and current news, all presented through an intuitive and visually 
                appealing interface.
              </p>
              
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Our Team</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="text-red-600 mr-2" size={16} />
                    <span>team@explorejapan.edu</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="text-red-600 mr-2" size={16} />
                    <span>+91 98765-43210</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="text-red-600 mr-2" size={16} />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-600 mb-3">Preserve Tradition</h4>
                <p className="text-gray-700">
                  Documenting and sharing authentic Japanese cultural practices for future generations.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-3">Bridge Cultures</h4>
                <p className="text-gray-700">
                  Creating connections between Japan and the world through cultural understanding.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-blue-600 mb-3">Inspire Learning</h4>
                <p className="text-gray-700">
                  Encouraging curiosity and appreciation for Japanese arts, history, and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
