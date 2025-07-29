import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, Squares2X2Icon, MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, Squares2X2Icon as Squares2X2IconSolid, MagnifyingGlassIcon as MagnifyingGlassIconSolid, EnvelopeIcon as EnvelopeIconSolid } from '@heroicons/react/24/solid';
import { useLanguage } from '../contexts/LanguageContext';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    {
      name: t('home'),
      path: '/',
      icon: HomeIcon,
      activeIcon: HomeIconSolid,
    },
    {
      name: t('categories'),
      path: '/categories',
      icon: Squares2X2Icon,
      activeIcon: Squares2X2IconSolid,
    },
    {
      name: t('search'),
      path: '/search',
      icon: MagnifyingGlassIcon,
      activeIcon: MagnifyingGlassIconSolid,
    },
    {
      name: t('contact'),
      path: '/contact',
      icon: EnvelopeIcon,
      activeIcon: EnvelopeIconSolid,
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = isActive ? item.activeIcon : item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-1 transition-colors ${
                isActive
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};