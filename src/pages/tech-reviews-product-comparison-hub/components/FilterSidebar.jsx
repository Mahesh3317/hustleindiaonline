import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  currentLanguage,
  isOpen,
  onClose 
}) => {
  const getDisplayText = (enText, hiText) => {
    return currentLanguage === 'hi' ? hiText : enText;
  };

  const categories = [
    { id: 'survey', label: getDisplayText('Survey Apps', 'सर्वे ऐप्स'), count: 12 },
    { id: 'cashback', label: getDisplayText('Cashback', 'कैशबैक'), count: 8 },
    { id: 'gaming', label: getDisplayText('Gaming', 'गेमिंग'), count: 15 },
    { id: 'freelancing', label: getDisplayText('Freelancing', 'फ्रीलांसिंग'), count: 6 },
    { id: 'investment', label: getDisplayText('Investment', 'निवेश'), count: 9 },
    { id: 'ecommerce', label: getDisplayText('E-commerce', 'ई-कॉमर्स'), count: 11 }
  ];

  const earningRanges = [
    { id: 'low', label: getDisplayText('₹0 - ₹1,000', '₹0 - ₹1,000'), min: 0, max: 1000 },
    { id: 'medium', label: getDisplayText('₹1,000 - ₹5,000', '₹1,000 - ₹5,000'), min: 1000, max: 5000 },
    { id: 'high', label: getDisplayText('₹5,000 - ₹15,000', '₹5,000 - ₹15,000'), min: 5000, max: 15000 },
    { id: 'premium', label: getDisplayText('₹15,000+', '₹15,000+'), min: 15000, max: Infinity }
  ];

  const paymentMethods = [
    { id: 'upi', label: 'UPI', count: 25 },
    { id: 'paytm', label: 'Paytm', count: 18 },
    { id: 'bank', label: getDisplayText('Bank Transfer', 'बैंक ट्रांसफर'), count: 22 },
    { id: 'paypal', label: 'PayPal', count: 12 },
    { id: 'amazon', label: getDisplayText('Amazon Voucher', 'अमेज़न वाउचर'), count: 16 }
  ];

  const ratings = [
    { id: '4plus', label: getDisplayText('4+ Stars', '4+ स्टार'), min: 4, count: 28 },
    { id: '3plus', label: getDisplayText('3+ Stars', '3+ स्टार'), min: 3, count: 35 },
    { id: '2plus', label: getDisplayText('2+ Stars', '2+ स्टार'), min: 2, count: 42 }
  ];

  const specialFeatures = [
    { id: 'hustleIndiaTested', label: getDisplayText('HustleIndia Tested', 'हसल इंडिया टेस्टेड'), count: 15 },
    { id: 'withdrawalProof', label: getDisplayText('Withdrawal Proof', 'निकासी प्रमाण'), count: 22 },
    { id: 'newLaunch', label: getDisplayText('New Launch', 'नया लॉन्च'), count: 8 },
    { id: 'featured', label: getDisplayText('Featured', 'फीचर्ड'), count: 12 },
    { id: 'scamAlert', label: getDisplayText('Scam Alert', 'स्कैम अलर्ट'), count: 3 }
  ];

  const handleFilterChange = (filterType, value, checked) => {
    onFilterChange(filterType, value, checked);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).reduce((count, filterArray) => {
      return count + (Array.isArray(filterArray) ? filterArray.length : 0);
    }, 0);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-80 lg:w-full bg-white lg:bg-transparent
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto lg:overflow-visible
      `}>
        <div className="p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="text-lg font-semibold text-text-primary">
              {getDisplayText('Filters', 'फिल्टर')}
            </h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Filter Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
              <Icon name="Filter" size={20} />
              <span>{getDisplayText('Filters', 'फिल्टर')}</span>
              {getActiveFiltersCount() > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {getActiveFiltersCount()}
                </span>
              )}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-text-secondary hover:text-primary"
            >
              {getDisplayText('Clear All', 'सभी साफ़ करें')}
            </Button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white lg:bg-muted rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Grid3X3" size={16} />
                <span>{getDisplayText('Categories', 'श्रेणियां')}</span>
              </h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Checkbox
                    key={category.id}
                    label={
                      <div className="flex items-center justify-between w-full">
                        <span>{category.label}</span>
                        <span className="text-xs text-text-secondary">({category.count})</span>
                      </div>
                    }
                    checked={filters.categories?.includes(category.id) || false}
                    onChange={(e) => handleFilterChange('categories', category.id, e.target.checked)}
                  />
                ))}
              </div>
            </div>

            {/* Earning Potential */}
            <div className="bg-white lg:bg-muted rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="DollarSign" size={16} />
                <span>{getDisplayText('Earning Potential', 'कमाई की संभावना')}</span>
              </h4>
              <div className="space-y-2">
                {earningRanges.map((range) => (
                  <Checkbox
                    key={range.id}
                    label={range.label}
                    checked={filters.earningRanges?.includes(range.id) || false}
                    onChange={(e) => handleFilterChange('earningRanges', range.id, e.target.checked)}
                  />
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white lg:bg-muted rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="CreditCard" size={16} />
                <span>{getDisplayText('Payment Methods', 'भुगतान के तरीके')}</span>
              </h4>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <Checkbox
                    key={method.id}
                    label={
                      <div className="flex items-center justify-between w-full">
                        <span>{method.label}</span>
                        <span className="text-xs text-text-secondary">({method.count})</span>
                      </div>
                    }
                    checked={filters.paymentMethods?.includes(method.id) || false}
                    onChange={(e) => handleFilterChange('paymentMethods', method.id, e.target.checked)}
                  />
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="bg-white lg:bg-muted rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Star" size={16} />
                <span>{getDisplayText('Ratings', 'रेटिंग')}</span>
              </h4>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <Checkbox
                    key={rating.id}
                    label={
                      <div className="flex items-center justify-between w-full">
                        <span>{rating.label}</span>
                        <span className="text-xs text-text-secondary">({rating.count})</span>
                      </div>
                    }
                    checked={filters.ratings?.includes(rating.id) || false}
                    onChange={(e) => handleFilterChange('ratings', rating.id, e.target.checked)}
                  />
                ))}
              </div>
            </div>

            {/* Special Features */}
            <div className="bg-white lg:bg-muted rounded-lg p-4">
              <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>{getDisplayText('Special Features', 'विशेष सुविधाएं')}</span>
              </h4>
              <div className="space-y-2">
                {specialFeatures.map((feature) => (
                  <Checkbox
                    key={feature.id}
                    label={
                      <div className="flex items-center justify-between w-full">
                        <span>{feature.label}</span>
                        <span className="text-xs text-text-secondary">({feature.count})</span>
                      </div>
                    }
                    checked={filters.specialFeatures?.includes(feature.id) || false}
                    onChange={(e) => handleFilterChange('specialFeatures', feature.id, e.target.checked)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="mt-6 lg:hidden">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
              className="bg-cultural-gradient"
            >
              {getDisplayText('Apply Filters', 'फिल्टर लागू करें')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;