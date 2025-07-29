import React from 'react';
import { NewsCard } from './NewsCard';
import { AdSpace } from './AdSpace';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  popularPosts: BlogPost[];
  latestPosts: BlogPost[];
}

export const Sidebar: React.FC<SidebarProps> = ({ popularPosts, latestPosts }) => {
  const { t } = useLanguage();

  return (
    <aside className="space-y-8">
      {/* Ad Space */}
      <AdSpace size="sidebar" />

      {/* Popular Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="text-orange-600 mr-2">🔥</span>
          {t('popular')}
        </h3>
        <div className="space-y-4">
          {popularPosts.slice(0, 5).map((post, index) => (
            <div key={post.id} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              <NewsCard post={post} variant="small" showImage={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="text-green-600 mr-2">🆕</span>
          {t('latest')}
        </h3>
        <div className="space-y-4">
          {latestPosts.slice(0, 5).map((post) => (
            <NewsCard key={post.id} post={post} variant="small" />
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-md p-6 text-white">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <span className="mr-2">📧</span>
          {t('newsletter')}
        </h3>
        <p className="text-orange-100 text-sm mb-4">
          Get daily updates directly in your inbox
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-300 focus:outline-none"
          />
          <button className="w-full bg-white text-orange-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Another Ad Space */}
      <AdSpace size="square" />
    </aside>
  );
};