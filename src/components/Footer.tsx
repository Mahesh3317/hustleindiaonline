import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../constants/categories';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">HustleIndia</h1>
                <p className="text-sm text-orange-400">Online</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted source for latest news, technology updates, astrology predictions, and lifestyle content in multiple Indian languages.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{t('newsletter')}</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-r-lg hover:from-orange-600 hover:to-red-700 transition-all font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('categories')}</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span className="text-xs">{category.icon}</span>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('termsConditions')}
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 HustleIndiaOnline. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-xl">
              📘
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-xl">
              🐦
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-xl">
              📷
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-xl">
              📺
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-xl">
              💬
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};