import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { categories } from '../constants/categories';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
];

const Header: React.FC = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Active menu highlight
  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-white dark:bg-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link
  to="/"
  className="group mr-8"
  style={{
    display: "flex",
    alignItems: "center",
  }}
>
 <img
  src={theme === "dark" ? "/logo-white.png" : "/logo.png"}
  alt="HustleIndiaOnline"
  style={{
    height: "80px",   // apna height
    width: "150px",   // apna width
    objectFit: "fill",  // image ko stretch karke fit karega
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
  }}
  loading="lazy"
/>

</Link>


          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <select
              value={currentLanguage}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Switch Language"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-lg hover:bg-orange-100 dark:hover:bg-orange-700 transition"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-black text-white shadow">
        <div
          className="max-w-7xl mx-auto flex items-center overflow-x-auto px-2"
          style={{
            scrollbarWidth: 'none',   // Firefox
            msOverflowStyle: 'none'   // IE/Edge
          }}
        >
          {/* Hide Chrome/Safari scrollbar */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <Link
            to="/"
            className={`px-4 py-3 rounded-md font-semibold mx-1 transition ${
              isActive('/') ? 'bg-red-600 text-white' : 'hover:bg-white/10'
            }`}
          >
            {t('home')}
          </Link>
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className={`px-4 py-3 rounded-md font-semibold mx-1 whitespace-nowrap transition ${
                isActive(`/category/${category.slug}`) ? 'bg-red-600 text-white' : 'hover:bg-white/10'
              }`}
            >
              {t(category.slug) || category.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
