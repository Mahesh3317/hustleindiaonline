import React from 'react';
import { NewsCard } from './NewsCard';
import { AdSpace } from './AdSpace';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  mainStory?: BlogPost; // Make optional
  sideStories?: BlogPost[]; // Make optional
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  mainStory, 
  sideStories = [] 
}) => {
  const { t } = useLanguage();

  // Loading state when no main story
  if (!mainStory) {
    return (
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Loading skeleton for main story */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="text-red-600 mr-2">🔥</span>
                {t('topStories') || 'Top Stories'}
              </h2>
            </div>
            <div className="h-64 md:h-80 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Loading stories...</p>
            </div>
          </div>

          {/* Loading skeleton for side stories */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  <span className="text-orange-600 mr-2">📰</span>
                  {t('moreNews') || 'More News'}
                </h3>
              </div>
              
              <AdSpace size="rectangle" className="mb-4" />
              
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex space-x-3 p-3 animate-pulse">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Story - Left Side */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="text-red-600 mr-2">🔥</span>
              {t('topStories') || 'Top Stories'}
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
                {t('moreNews') || 'More News'}
              </h3>
            </div>
            
            {/* Ad Space */}
            <AdSpace size="rectangle" className="mb-4" />
            
            {/* Side Stories */}
            <div className="space-y-3">
              {sideStories.length > 0 ? (
                sideStories.map((story) => (
                  <NewsCard key={story.id} post={story} variant="small" />
                ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    No additional stories available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};