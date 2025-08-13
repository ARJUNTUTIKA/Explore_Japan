import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Culture from './pages/Culture';
import Food from './pages/Food';
import History from './pages/History';
import TouristPlaces from './pages/TouristPlaces';
import News from './pages/News';
import Contact from './pages/Contact';
import FestivalDetail from './pages/FestivalDetail';
import PerformingArtDetail from './pages/PerformingArtDetail';
import FoodDetail from './pages/FoodDetail';
import CulturalValueDetail from './pages/CulturalValueDetail';
import ModernJapanDetail from './pages/ModernJapanDetail';
import NewsArticleDetail from './pages/NewsArticleDetail';
import DiningEtiquetteDetail from './pages/DiningEtiquetteDetail';
import TraditionalCultureDetail from './pages/TraditionalCultureDetail';
import SamuraiDetail from './pages/SamuraiDetail';
import About from './pages/About';
import Translator from './pages/Translator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/history" element={<History />} />
          <Route path="/tourist-places" element={<TouristPlaces />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/festival/:festivalName" element={<FestivalDetail />} />
          <Route path="/performing-art/:artName" element={<PerformingArtDetail />} />
          <Route path="/food/:foodName" element={<FoodDetail />} />
          <Route path="/cultural-value/:valueName" element={<CulturalValueDetail />} />
          <Route path="/modern-japan/:sectionName" element={<ModernJapanDetail />} />
          <Route path="/news/:articleId" element={<NewsArticleDetail />} />
          <Route path="/dining/:etiquetteType" element={<DiningEtiquetteDetail />} />
          <Route path="/traditional-culture/:cultureName" element={<TraditionalCultureDetail />} />
          <Route path="/samurai/:samuraiTopic" element={<SamuraiDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/translator" element={<Translator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
