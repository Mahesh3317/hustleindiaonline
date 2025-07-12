import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterBar = ({ onFilterChange, activeFilters, totalMethods }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const earningRanges = [
    { value: 'all', label: 'All Ranges' },
    { value: '1000-10000', label: '₹1,000 - ₹10,000' },
    { value: '10000-50000', label: '₹10,000 - ₹50,000' },
    { value: '50000+', label: '₹50,000+' }
  ];

  const timeInvestments = [
    { value: 'all', label: 'All Time Types' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const skillLevels = [
    { value: 'all', label: 'All Skill Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'earning-high', label: 'Highest Earning' },
    { value: 'earning-low', label: 'Lowest Investment' },
    { value: 'success-rate', label: 'Success Rate' },
    { value: 'newest', label: 'Newest First' }
  ];

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const clearAllFilters = () => {
    onFilterChange('clear', null);
  };

  const hasActiveFilters = Object.values(activeFilters).some(filter => filter !== 'all');

  return (
    <div className="bg-white rounded-lg shadow-cultural border border-border p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} color="var(--color-primary)" />
          <h3 className="text-lg font-semibold text-text-primary">
            Filter Methods
          </h3>
          <span className="text-sm text-text-secondary bg-muted px-2 py-1 rounded-full">
            {totalMethods} methods
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-text-secondary hover:text-primary"
            >
              <Icon name="X" size={16} />
              Clear All
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 ${
        isExpanded ? 'block' : 'hidden lg:grid'
      }`}>
        {/* Earning Range Filter */}
        <div>
          <Select
            label="Earning Range"
            options={earningRanges}
            value={activeFilters.earningRange}
            onChange={(value) => handleFilterChange('earningRange', value)}
            className="w-full"
          />
        </div>

        {/* Time Investment Filter */}
        <div>
          <Select
            label="Time Investment"
            options={timeInvestments}
            value={activeFilters.timeInvestment}
            onChange={(value) => handleFilterChange('timeInvestment', value)}
            className="w-full"
          />
        </div>

        {/* Skill Level Filter */}
        <div>
          <Select
            label="Skill Level"
            options={skillLevels}
            value={activeFilters.skillLevel}
            onChange={(value) => handleFilterChange('skillLevel', value)}
            className="w-full"
          />
        </div>

        {/* Sort Options */}
        <div>
          <Select
            label="Sort By"
            options={sortOptions}
            value={activeFilters.sortBy}
            onChange={(value) => handleFilterChange('sortBy', value)}
            className="w-full"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-text-primary">Quick Filters</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilters.trending ? "default" : "outline"}
              size="xs"
              onClick={() => handleFilterChange('trending', !activeFilters.trending)}
            >
              <Icon name="TrendingUp" size={14} />
              Trending
            </Button>
            <Button
              variant={activeFilters.beginner ? "default" : "outline"}
              size="xs"
              onClick={() => handleFilterChange('beginner', !activeFilters.beginner)}
            >
              <Icon name="Star" size={14} />
              Beginner
            </Button>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-text-secondary">Active filters:</span>
            {Object.entries(activeFilters).map(([key, value]) => {
              if (value === 'all' || value === false) return null;
              
              let displayValue = value;
              if (key === 'earningRange' && value !== 'all') {
                displayValue = earningRanges.find(r => r.value === value)?.label || value;
              } else if (key === 'timeInvestment' && value !== 'all') {
                displayValue = timeInvestments.find(t => t.value === value)?.label || value;
              } else if (key === 'skillLevel' && value !== 'all') {
                displayValue = skillLevels.find(s => s.value === value)?.label || value;
              } else if (key === 'sortBy') {
                displayValue = sortOptions.find(s => s.value === value)?.label || value;
              }

              return (
                <span
                  key={key}
                  className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                >
                  <span>{displayValue}</span>
                  <button
                    onClick={() => handleFilterChange(key, key === 'trending' || key === 'beginner' ? false : 'all')}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;