import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'mr', label: 'Marathi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
];

// ✅ Sample categories – update if needed
const categories = [
  { id: 1, name: 'News', slug: 'news' },
  { id: 2, name: 'Tech', slug: 'tech' },
  { id: 3, name: 'AI', slug: 'ai' },
  { id: 4, name: 'Tips', slug: 'tips' },
  { id: 5, name: 'Reviews', slug: 'reviews' },
];

const Header: React.FC = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang as any);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-orange-600">
            HustleIndiaOnline
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors"
            >
              {t('home')}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors"
              >
                {t(category.name.toLowerCase()) || category.name}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
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

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-xl"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
