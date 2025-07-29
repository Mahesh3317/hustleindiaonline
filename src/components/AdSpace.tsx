import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdSpaceProps {
  size: 'banner' | 'rectangle' | 'leaderboard' | 'sidebar' | 'mobile-banner' | 'square';
  className?: string;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ size, className = '' }) => {
  const { t } = useLanguage();

  const getAdDimensions = () => {
    switch (size) {
      case 'banner':
        return 'h-24 md:h-32';
      case 'rectangle':
        return 'h-64 w-full max-w-sm';
      case 'leaderboard':
        return 'h-20 w-full';
      case 'sidebar':
        return 'h-80 w-full';
      case 'mobile-banner':
        return 'h-16 md:h-20';
      case 'square':
        return 'h-64 w-64';
      default:
        return 'h-32';
    }
  };

  return (
    <div className={`bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center ${getAdDimensions()} ${className}`}>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <div className="text-2xl mb-2">📢</div>
        <div className="text-sm font-medium">{t('advertisement')}</div>
        <div className="text-xs opacity-60">{size.replace('-', ' ')}</div>
      </div>
    </div>
  );
};