
import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsArticles = [
    {
      id: 'bullet-train-technology',
      title: 'Japan Launches New Bullet Train Technology',
      summary: 'The latest shinkansen technology promises even faster and more efficient transportation across Japan.',
      image: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 15, 2024',
      category: 'Technology'
    },
    {
      id: 'cherry-blossom-forecast',
      title: 'Cherry Blossom Season Forecast Released',
      summary: 'Meteorologists predict an early blooming season this year, with peak times varying across regions.',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 12, 2024',
      category: 'Nature'
    },
    {
      id: 'olympics-legacy',
      title: 'Tokyo Olympics Legacy Projects Continue',
      summary: 'Infrastructure improvements from the Tokyo Olympics continue to benefit local communities.',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 10, 2024',
      category: 'Sports'
    },
    {
      id: 'unesco-heritage',
      title: 'New UNESCO World Heritage Site Nominated',
      summary: 'Japan nominates additional cultural sites for UNESCO World Heritage recognition.',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 8, 2024',
      category: 'Culture'
    },
    {
      id: 'sustainable-tourism',
      title: 'Sustainable Tourism Initiative Launched',
      summary: 'New programs aim to promote eco-friendly travel while preserving Japan\'s natural beauty.',
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 5, 2024',
      category: 'Environment'
    }
  ];

  const featuredNews = newsArticles[0];
  const trendingNews = newsArticles.slice(1);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Japan News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news and developments from Japan
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredNews.category}
                  </span>
                  <span className="text-gray-500 ml-4">{featuredNews.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{featuredNews.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{featuredNews.summary}</p>
                <Link 
                  to={`/news/${featuredNews.id}`}
                  className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trending News */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Trending News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {trendingNews.map((article, index) => (
              <div key={index} className="card-hover bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 ml-4 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <Link 
                    to={`/news/${article.id}`}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
