import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchAndSort = ({ 
  searchQuery, 
  onSearchChange, 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  onFilterToggle,
  currentLanguage,
  resultsCount 
}) => {
  const getDisplayText = (enText, hiText) => {
    return currentLanguage === 'hi' ? hiText : enText;
  };

  const sortOptions = [
    { value: 'relevance', label: getDisplayText('Relevance', 'प्रासंगिकता') },
    { value: 'rating', label: getDisplayText('Highest Rated', 'सर्वोच्च रेटेड') },
    { value: 'earning', label: getDisplayText('Highest Earning', 'सर्वोच्च कमाई') },
    { value: 'newest', label: getDisplayText('Newest First', 'नवीनतम पहले') },
    { value: 'popular', label: getDisplayText('Most Popular', 'सबसे लोकप्रिय') },
    { value: 'verified', label: getDisplayText('HustleIndia Tested', 'हसल इंडिया टेस्टेड') }
  ];

  return (
    <div className="bg-white rounded-xl shadow-cultural p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search Section */}
        <div className="flex-1 lg:max-w-md">
          <div className="relative">
            <Input
              type="search"
              placeholder={getDisplayText(
                'Search apps, reviews, categories...',
                'ऐप्स, समीक्षाएं, श्रेणियां खोजें...'
              )}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              size={18} 
              color="var(--color-text-secondary)" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex items-center space-x-4">
          {/* Results Count */}
          <div className="hidden sm:block text-sm text-text-secondary">
            {resultsCount} {getDisplayText('results found', 'परिणाम मिले')}
          </div>

          {/* Sort Dropdown */}
          <div className="min-w-[180px]">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              placeholder={getDisplayText('Sort by...', 'इसके अनुसार क्रमबद्ध करें...')}
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('grid')}
              className="px-3"
            >
              <Icon name="Grid3X3" size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewModeChange('list')}
              className="px-3"
            >
              <Icon name="List" size={16} />
            </Button>
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={onFilterToggle}
            className="lg:hidden"
            iconName="Filter"
            iconPosition="left"
          >
            {getDisplayText('Filters', 'फिल्टर')}
          </Button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Zap" size={16} color="var(--color-primary)" />
          <span className="text-sm font-medium text-text-primary">
            {getDisplayText('Quick Filters', 'त्वरित फिल्टर')}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'hustleTested', label: getDisplayText('HustleIndia Tested', 'हसल इंडिया टेस्टेड') },
            { key: 'highEarning', label: getDisplayText('High Earning (₹5000+)', 'उच्च कमाई (₹5000+)') },
            { key: 'instantPayout', label: getDisplayText('Instant Payout', 'तत्काल पेआउट') },
            { key: 'upiSupport', label: getDisplayText('UPI Support', 'UPI सपोर्ट') },
            { key: 'newLaunches', label: getDisplayText('New Launches', 'नए लॉन्च') },
            { key: 'noInvestment', label: getDisplayText('No Investment', 'कोई निवेश नहीं') }
          ].map((filter) => (
            <Button
              key={filter.key}
              variant="outline"
              size="sm"
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Search Suggestions */}
      {searchQuery && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="TrendingUp" size={16} color="var(--color-secondary)" />
            <span className="text-sm font-medium text-text-primary">
              {getDisplayText('Popular Searches', 'लोकप्रिय खोजें')}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[
              'Swagbucks review',
              'Google Opinion Rewards',
              'Meesho earning',
              'Survey apps India',
              'Cashback apps',
              'Gaming earning apps'
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSearchChange(suggestion)}
                className="text-xs text-primary hover:text-primary/80 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndSort;