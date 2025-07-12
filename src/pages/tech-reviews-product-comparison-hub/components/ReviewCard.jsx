import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ReviewCard = ({ review, currentLanguage }) => {
  const getDisplayText = (enText, hiText) => {
    return currentLanguage === 'hi' ? hiText : enText;
  };

  const formatEarningPotential = (amount) => {
    return currentLanguage === 'hi' ? `₹${amount}/महीना` : `₹${amount}/month`;
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-blue-600';
    if (rating >= 3.5) return 'text-yellow-600';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-cultural hover:shadow-cultural-lg transition-all duration-300 overflow-hidden group">
      {/* Header with App Icon and Badge */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={review.appIcon}
                alt={review.appName}
                className="w-16 h-16 rounded-xl object-cover"
              />
              {review.isVerified && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} color="white" strokeWidth={3} />
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                {review.appName}
              </h3>
              <p className="text-sm text-text-secondary">{review.category}</p>
            </div>
          </div>
          
          {review.isFeatured && (
            <div className="bg-cultural-gradient text-white px-3 py-1 rounded-full text-xs font-medium">
              {getDisplayText('Featured', 'फीचर्ड')}
            </div>
          )}
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name={i < Math.floor(review.rating) ? "Star" : "Star"}
                  size={16}
                  color={i < Math.floor(review.rating) ? "#FCD34D" : "#E5E7EB"}
                  className={i < Math.floor(review.rating) ? "fill-current" : ""}
                />
              ))}
            </div>
            <span className={`text-sm font-medium ${getRatingColor(review.rating)}`}>
              {review.rating}
            </span>
          </div>
          <span className="text-sm text-text-secondary">
            ({review.reviewCount} {getDisplayText('reviews', 'रिव्यू')})
          </span>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="DollarSign" size={14} color="var(--color-primary)" />
              <span className="text-xs text-text-secondary">
                {getDisplayText('Earning Potential', 'कमाई की संभावना')}
              </span>
            </div>
            <p className="text-sm font-semibold text-text-primary">
              {formatEarningPotential(review.earningPotential)}
            </p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Wallet" size={14} color="var(--color-secondary)" />
              <span className="text-xs text-text-secondary">
                {getDisplayText('Min Payout', 'न्यूनतम पेआउट')}
              </span>
            </div>
            <p className="text-sm font-semibold text-text-primary">₹{review.minPayout}</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-4">
          <p className="text-xs text-text-secondary mb-2">
            {getDisplayText('Payment Methods', 'भुगतान के तरीके')}
          </p>
          <div className="flex flex-wrap gap-2">
            {review.paymentMethods.map((method, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Pros and Cons Preview */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start space-x-2">
            <Icon name="Plus" size={12} color="var(--color-success)" className="mt-0.5" />
            <p className="text-xs text-text-secondary">{review.topPro}</p>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Minus" size={12} color="var(--color-error)" className="mt-0.5" />
            <p className="text-xs text-text-secondary">{review.topCon}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {review.isHustleIndiaTested && (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
              <Icon name="Shield" size={12} />
              <span>{getDisplayText('HustleIndia Tested', 'हसल इंडिया टेस्टेड')}</span>
            </div>
          )}
          {review.hasWithdrawalProof && (
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
              <Icon name="Receipt" size={12} />
              <span>{getDisplayText('Withdrawal Proof', 'निकासी प्रमाण')}</span>
            </div>
          )}
          {review.isNewLaunch && (
            <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
              <Icon name="Sparkles" size={12} />
              <span>{getDisplayText('New Launch', 'नया लॉन्च')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 space-y-3">
        <Button
          variant="default"
          fullWidth
          className="bg-cultural-gradient hover:opacity-90"
          iconName="ExternalLink"
          iconPosition="right"
        >
          {getDisplayText('Read Full Review', 'पूरी समीक्षा पढ़ें')}
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex-1"
            iconName="BarChart3"
            iconPosition="left"
          >
            {getDisplayText('Compare', 'तुलना करें')}
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            iconName="Download"
            iconPosition="left"
          >
            {getDisplayText('Download', 'डाउनलोड')}
          </Button>
        </div>
      </div>

      {/* Last Updated */}
      <div className="px-6 pb-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-text-secondary pt-3">
          <span>
            {getDisplayText('Last updated:', 'अंतिम अपडेट:')} {review.lastUpdated}
          </span>
          <div className="flex items-center space-x-1">
            <Icon name="Eye" size={12} />
            <span>{review.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;