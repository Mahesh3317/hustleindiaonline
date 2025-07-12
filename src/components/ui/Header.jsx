import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Home', 
      nameHi: 'होम', 
      path: '/homepage-multi-language-digital-lifestyle-hub',
      icon: 'Home'
    },
    { 
      name: 'Money Making', 
      nameHi: 'पैसे कमाएं', 
      path: '/category-hub-money-making-ecosystem',
      icon: 'DollarSign'
    },
    { 
      name: 'Blog', 
      nameHi: 'ब्लॉग', 
      path: '/individual-blog-post-seo-optimized-article',
      icon: 'FileText'
    },
    { 
      name: 'Tech Reviews', 
      nameHi: 'टेक रिव्यू', 
      path: '/tech-reviews-product-comparison-hub',
      icon: 'Smartphone'
    },
    { 
      name: 'Astrology', 
      nameHi: 'ज्योतिष', 
      path: '/astrology-numerology-cultural-wisdom-hub',
      icon: 'Star'
    },
    { 
      name: 'About Us', 
      nameHi: 'हमारे बारे में', 
      path: '/about-us-trust-credibility-center',
      icon: 'Users'
    }
  ];

  const languages = [
    { code: 'en', name: 'English', nameNative: 'English' },
    { code: 'hi', name: 'Hindi', nameNative: 'हिंदी' },
    { code: 'ta', name: 'Tamil', nameNative: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nameNative: 'తెలుగు' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('hustleIndia_language', langCode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const getDisplayName = (item) => {
    return currentLanguage === 'hi' ? item.nameHi : item.name;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-cultural border-b border-border' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo Section */}
          <Link 
            to="/homepage-multi-language-digital-lifestyle-hub" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-cultural-gradient rounded-lg flex items-center justify-center shadow-cultural">
                <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-prosperity-green rounded-full flex items-center justify-center">
                <Icon name="Zap" size={10} color="white" strokeWidth={3} />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-poppins bg-cultural-gradient bg-clip-text text-transparent">
                HustleIndia
              </h1>
              <p className="text-xs text-text-secondary font-medium -mt-1">
                {currentLanguage === 'hi' ? 'डिजिटल सफलता' : 'Digital Success'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{getDisplayName(item)}</span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary"
              >
                <Icon name="Globe" size={16} />
                <span className="hidden sm:inline text-sm">
                  {languages.find(lang => lang.code === currentLanguage)?.nameNative}
                </span>
                <Icon name="ChevronDown" size={14} />
              </Button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-cultural-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        currentLanguage === lang.code ? 'text-primary font-medium' : 'text-text-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{lang.nameNative}</span>
                        {currentLanguage === lang.code && (
                          <Icon name="Check" size={14} color="var(--color-primary)" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex items-center space-x-2 bg-cultural-gradient hover:opacity-90 transition-opacity"
            >
              <Icon name="Rocket" size={16} />
              <span className="font-semibold">
                {currentLanguage === 'hi' ? 'शुरू करें' : 'Start Now'}
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="lg:hidden p-2"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 touch-target ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{getDisplayName(item)}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-cultural-gradient hover:opacity-90 transition-opacity touch-target"
                >
                  <Icon name="Rocket" size={18} />
                  <span className="font-semibold ml-2">
                    {currentLanguage === 'hi' ? 'अभी शुरू करें' : 'Start Your Journey'}
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;