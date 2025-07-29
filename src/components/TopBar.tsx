import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const TopBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [goldPrice] = useState(6245);
  const [silverPrice] = useState(74850);
  const { t } = useLanguage();

  const breakingNews = [
    'भारत में AI की नई क्रांति: ChatGPT के बाद अब Google का Bard',
    'IND vs AUS: तीसरे टेस्ट में भारत की शानदार जीत, सीरीज में 2-1 से आगे',
    'आज का राशिफल: मकर संक्रांति के दिन इन राशियों के लिए खुशखबरी',
    'सपनों का अर्थ: यदि सपने में दिखे ये चीजें तो समझ जाएं कि होने वाला है धन लाभ'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
      {/* Top Info Bar */}
      <div className="border-b border-orange-500/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm">
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-300">🪙</span>
                <span>Gold: ₹{goldPrice.toLocaleString()}/10g</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">🥈</span>
                <span>Silver: ₹{silverPrice.toLocaleString()}/kg</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-200">🕒</span>
              <span>{currentTime.toLocaleTimeString('hi-IN', { 
                timeZone: 'Asia/Kolkata',
                hour12: true 
              })} IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News Ticker */}
      <div className="bg-red-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
              <span className="animate-pulse text-yellow-300">⚡</span>
              <span className="font-bold text-sm md:text-base">{t('breakingNews')}</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm md:text-base">
                {breakingNews.map((news, index) => (
                  <span key={index} className="inline-block mr-8">
                    • {news}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};