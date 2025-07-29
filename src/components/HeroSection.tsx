import React from 'react';
import { NewsCard } from './NewsCard';
import { AdSpace } from './AdSpace';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  mainStory: BlogPost;
  sideStories: BlogPost[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mainStory, sideStories }) => {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Story - Left Side */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="text-red-600 mr-2">🔥</span>
              {t('topStories')}
            </h2>
          </div>
          <NewsCard post={mainStory} variant="hero" />
        </div>

        {/* Side Stories - Right Side */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <span className="text-orange-600 mr-2">📰</span>
                {t('moreNews')}
              </h3>
            </div>
            
            {/* Ad Space */}
            <AdSpace size="rectangle" className="mb-4" />
            
            {/* Side Stories */}
            <div className="space-y-3">
              {sideStories.map((story) => (
                <NewsCard key={story.id} post={story} variant="small" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};