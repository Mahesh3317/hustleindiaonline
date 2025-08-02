import React, { useEffect, useState } from 'react';
import { useLanguage } from "../contexts/LanguageContext"; // or whatever the correct path is

export const TopBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { t } = useLanguage();

  const breakingNews = [
    'भारत में AI की नई क्रांति: ChatGPT के बाद अब Google का Bard',
    'HustleIndiaOnline launches new features!',
    'अब ऐप रिव्यूज़ और न्यूमरोलॉजी एक ही जगह पर!',
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-700 text-white text-sm md:text-base">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center overflow-hidden">
          <div className="flex items-center mr-4 space-x-2 flex-shrink-0">
            <span className="animate-pulse text-yellow-300">⚡</span>
            <span className="font-bold">{t('breakingNews')}</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {breakingNews.map((item, i) => (
                <span key={i} className="inline-block mr-8">• {item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
