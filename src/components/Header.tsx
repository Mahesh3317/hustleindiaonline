import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { categories } from '../constants/categories';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'mr', label: 'Marathi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
];

const Header: React.FC = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang as any);
  };

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Logo + Language + Theme Toggle */}
      <div className="bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-bold text-orange-600">
              HustleIndiaOnline
            </Link>
            <div className="flex items-center space-x-4">
              <select
                value={currentLanguage}
                onChange={handleLanguageChange}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded px-2 py-1 text-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-xl"
              >
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Bar Below Header */}
      <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow">
  <div className="border-t border-orange-500/30">
    <div className="container mx-auto px-2 py-2">
      <div className="flex flex-wrap gap-3 justify-center text-sm">

              <Link 
                to="/" 
                className={`px-2 py-1 rounded transition-colors ${
                  isActive('/') ? 'bg-orange-700 font-bold' : 'hover:bg-orange-700'
                }`}
              >
                {t('home')}
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className={`px-2 py-1 rounded transition-colors ${
                    isActive(`/category/${category.slug}`) ? 'bg-orange-700 font-bold' : 'hover:bg-orange-700'
                  }`}
                >
                  {t(category.slug) || category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
