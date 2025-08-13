import React, { useState } from 'react';
import { ArrowRight, Volume2, Copy, RotateCcw } from 'lucide-react';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  // Common English to Japanese translations
  const translations: { [key: string]: { japanese: string; romaji: string; meaning: string } } = {
    'hello': { japanese: 'こんにちは', romaji: 'Konnichiwa', meaning: 'A polite greeting used during the day' },
    'thank you': { japanese: 'ありがとうございます', romaji: 'Arigatou gozaimasu', meaning: 'Formal expression of gratitude' },
    'goodbye': { japanese: 'さようなら', romaji: 'Sayounara', meaning: 'Formal farewell, used when parting for a long time' },
    'yes': { japanese: 'はい', romaji: 'Hai', meaning: 'Affirmative response, also used to show attention' },
    'no': { japanese: 'いいえ', romaji: 'Iie', meaning: 'Negative response' },
    'please': { japanese: 'お願いします', romaji: 'Onegaishimasu', meaning: 'Polite way to make a request' },
    'excuse me': { japanese: 'すみません', romaji: 'Sumimasen', meaning: 'Used to get attention or apologize' },
    'sorry': { japanese: 'ごめんなさい', romaji: 'Gomen nasai', meaning: 'Formal apology' },
    'good morning': { japanese: 'おはようございます', romaji: 'Ohayou gozaimasu', meaning: 'Polite morning greeting' },
    'good evening': { japanese: 'こんばんは', romaji: 'Konbanwa', meaning: 'Evening greeting' },
    'good night': { japanese: 'おやすみなさい', romaji: 'Oyasumi nasai', meaning: 'Polite way to say good night' },
    'how are you': { japanese: 'お元気ですか', romaji: 'Ogenki desu ka', meaning: 'Asking about someone\'s well-being' },
    'i am fine': { japanese: '元気です', romaji: 'Genki desu', meaning: 'Expressing that you are well' },
    'nice to meet you': { japanese: 'はじめまして', romaji: 'Hajimemashite', meaning: 'Used when meeting someone for the first time' },
    'my name is': { japanese: '私の名前は', romaji: 'Watashi no namae wa', meaning: 'Used to introduce yourself' },
    'water': { japanese: '水', romaji: 'Mizu', meaning: 'The liquid essential for life' },
    'food': { japanese: '食べ物', romaji: 'Tabemono', meaning: 'Something that is eaten' },
    'delicious': { japanese: 'おいしい', romaji: 'Oishii', meaning: 'Describing something that tastes good' },
    'beautiful': { japanese: '美しい', romaji: 'Utsukushii', meaning: 'Describing something aesthetically pleasing' },
    'love': { japanese: '愛', romaji: 'Ai', meaning: 'Deep affection or romantic feeling' },
    'friend': { japanese: '友達', romaji: 'Tomodachi', meaning: 'A person you have a close relationship with' },
    'family': { japanese: '家族', romaji: 'Kazoku', meaning: 'People related by blood or marriage' },
    'house': { japanese: '家', romaji: 'Ie', meaning: 'A building where people live' },
    'school': { japanese: '学校', romaji: 'Gakkou', meaning: 'An institution for learning' },
    'work': { japanese: '仕事', romaji: 'Shigoto', meaning: 'Employment or job' },
    'money': { japanese: 'お金', romaji: 'Okane', meaning: 'Currency used for transactions' },
    'time': { japanese: '時間', romaji: 'Jikan', meaning: 'The indefinite continued progress of existence' },
    'today': { japanese: '今日', romaji: 'Kyou', meaning: 'This present day' },
    'tomorrow': { japanese: '明日', romaji: 'Ashita', meaning: 'The day after today' },
    'yesterday': { japanese: '昨日', romaji: 'Kinou', meaning: 'The day before today' },
    'japan': { japanese: '日本', romaji: 'Nihon/Nippon', meaning: 'The island country in East Asia' },
    'culture': { japanese: '文化', romaji: 'Bunka', meaning: 'The customs and traditions of a society' },
    'tradition': { japanese: '伝統', romaji: 'Dentou', meaning: 'Customs passed down through generations' },
    'festival': { japanese: '祭り', romaji: 'Matsuri', meaning: 'A celebration or ceremony' },
    'temple': { japanese: 'お寺', romaji: 'Otera', meaning: 'A Buddhist place of worship' },
    'shrine': { japanese: '神社', romaji: 'Jinja', meaning: 'A Shinto place of worship' },
    'cherry blossom': { japanese: '桜', romaji: 'Sakura', meaning: 'The flower of the cherry tree, symbol of spring' },
    'tea ceremony': { japanese: '茶道', romaji: 'Sadou/Chadou', meaning: 'Traditional Japanese ritual of preparing tea' },
    'kimono': { japanese: '着物', romaji: 'Kimono', meaning: 'Traditional Japanese clothing' },
    'sushi': { japanese: '寿司', romaji: 'Sushi', meaning: 'Japanese dish with vinegared rice and various toppings' },
    'ramen': { japanese: 'ラーメン', romaji: 'Raamen', meaning: 'Japanese noodle soup dish' },
    'samurai': { japanese: '侍', romaji: 'Samurai', meaning: 'Japanese warrior class' },
    'ninja': { japanese: '忍者', romaji: 'Ninja', meaning: 'Covert agent or mercenary in feudal Japan' },
    'anime': { japanese: 'アニメ', romaji: 'Anime', meaning: 'Japanese animated productions' },
    'manga': { japanese: '漫画', romaji: 'Manga', meaning: 'Japanese comic books and graphic novels' }
  };

  const handleTranslate = () => {
    if (!inputText.trim()) return;
    
    setIsTranslating(true);
    
    // Simulate translation delay
    setTimeout(() => {
      const lowerInput = inputText.toLowerCase().trim();
      const translation = translations[lowerInput];
      
      if (translation) {
        setTranslatedText(translation.japanese);
      } else {
        setTranslatedText('Translation not found. Please try common English words or phrases.');
      }
      
      setIsTranslating(false);
    }, 1000);
  };

  const handleClear = () => {
    setInputText('');
    setTranslatedText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
  };

  const currentTranslation = translations[inputText.toLowerCase().trim()];

  return (
    <div className="pt-16 min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            English to Japanese Translator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beauty of Japanese language by translating common English words and phrases
          </p>
        </div>

        {/* Translator Interface */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-4">
                English
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter English word or phrase..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg"
              />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleTranslate}
                  disabled={!inputText.trim() || isTranslating}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {isTranslating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Translating...
                    </>
                  ) : (
                    <>
                      <ArrowRight size={20} className="mr-2" />
                      Translate
                    </>
                  )}
                </button>
                <button
                  onClick={handleClear}
                  className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <RotateCcw size={20} className="mr-2" />
                  Clear
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-4">
                Japanese (日本語)
              </label>
              <div className="w-full h-32 p-4 border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                {translatedText ? (
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800 mb-2">{translatedText}</p>
                    {currentTranslation && (
                      <p className="text-lg text-gray-600">({currentTranslation.romaji})</p>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500">Translation will appear here...</p>
                )}
              </div>
              {translatedText && (
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleCopy}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <Copy size={16} className="mr-2" />
                    Copy
                  </button>
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
                    <Volume2 size={16} className="mr-2" />
                    Listen
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Meaning Section */}
          {currentTranslation && translatedText && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Meaning & Context</h3>
              <p className="text-gray-700 leading-relaxed">{currentTranslation.meaning}</p>
            </div>
          )}
        </div>

        {/* Common Phrases */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Common Phrases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(translations).slice(0, 12).map(([english, japanese]) => (
              <button
                key={english}
                onClick={() => {
                  setInputText(english);
                  setTranslatedText(japanese.japanese);
                }}
                className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300 text-left"
              >
                <p className="font-medium text-gray-800 capitalize">{english}</p>
                <p className="text-blue-600 text-lg">{japanese.japanese}</p>
                <p className="text-sm text-gray-500">{japanese.romaji}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Use</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-red-600 mb-3">Available Translations</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic greetings and polite expressions</li>
                <li>• Common daily vocabulary</li>
                <li>• Japanese cultural terms</li>
                <li>• Food and dining related words</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-red-600 mb-3">Features</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Japanese characters (Hiragana/Katakana/Kanji)</li>
                <li>• Romanized pronunciation (Romaji)</li>
                <li>• Cultural context and meaning</li>
                <li>• Copy and audio features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Translator;
