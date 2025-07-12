import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MethodCard = ({ method, currentLanguage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'text-success bg-success/10';
      case 'intermediate':
        return 'text-warning bg-warning/10';
      case 'advanced':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getSuccessRateColor = (rate) => {
    if (rate >= 80) return 'text-success';
    if (rate >= 60) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="bg-white rounded-xl shadow-cultural border border-border hover:shadow-cultural-lg transition-all duration-300 overflow-hidden group">
      {/* Header Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={method.image}
          alt={method.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {method.trending && (
            <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Icon name="TrendingUp" size={12} />
              <span>{currentLanguage === 'hi' ? 'ट्रेंडिंग' : 'Trending'}</span>
            </span>
          )}
          
          {method.featured && (
            <span className="bg-success text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Icon name="Star" size={12} />
              <span>{currentLanguage === 'hi' ? 'फीचर्ड' : 'Featured'}</span>
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(method.difficulty)}`}>
            {currentLanguage === 'hi' ? method.difficultyHi : method.difficulty}
          </span>
        </div>

        {/* Quick Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-lg font-bold">{method.earningRange}</div>
                <div className="text-xs opacity-80">
                  {currentLanguage === 'hi' ? 'मासिक' : 'Monthly'}
                </div>
              </div>
              <div className="text-center">
                <div className={`text-lg font-bold ${getSuccessRateColor(method.successRate)}`}>
                  {method.successRate}%
                </div>
                <div className="text-xs opacity-80">
                  {currentLanguage === 'hi' ? 'सफलता' : 'Success'}
                </div>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
            >
              <Icon name="Bookmark" size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-text-primary font-poppins line-clamp-2">
            {currentLanguage === 'hi' ? method.titleHi : method.title}
          </h3>
          <div className="flex items-center space-x-1 text-warning ml-2">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                color={i < method.rating ? "var(--color-warning)" : "var(--color-border)"}
                fill={i < method.rating ? "var(--color-warning)" : "none"}
              />
            ))}
            <span className="text-sm text-text-secondary ml-1">({method.reviews})</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {currentLanguage === 'hi' ? method.descriptionHi : method.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Clock" size={14} color="var(--color-text-secondary)" />
              <span className="text-xs text-text-secondary">
                {currentLanguage === 'hi' ? 'समय निवेश' : 'Time Investment'}
              </span>
            </div>
            <div className="text-sm font-semibold text-text-primary">
              {currentLanguage === 'hi' ? method.timeInvestmentHi : method.timeInvestment}
            </div>
          </div>

          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="DollarSign" size={14} color="var(--color-text-secondary)" />
              <span className="text-xs text-text-secondary">
                {currentLanguage === 'hi' ? 'प्रारंभिक निवेश' : 'Initial Investment'}
              </span>
            </div>
            <div className="text-sm font-semibold text-text-primary">
              {method.initialInvestment}
            </div>
          </div>
        </div>

        {/* Skills Required */}
        <div className="mb-4">
          <div className="text-xs text-text-secondary mb-2">
            {currentLanguage === 'hi' ? 'आवश्यक कौशल:' : 'Skills Required:'}
          </div>
          <div className="flex flex-wrap gap-1">
            {method.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
            {method.skills.length > 3 && (
              <span className="text-xs text-text-secondary">
                +{method.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mb-4 space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-2">
                {currentLanguage === 'hi' ? 'मुख्य लाभ:' : 'Key Benefits:'}
              </h4>
              <ul className="space-y-1">
                {method.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <Icon name="Check" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-2">
                {currentLanguage === 'hi' ? 'चुनौतियां:' : 'Challenges:'}
              </h4>
              <ul className="space-y-1">
                {method.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <Icon name="AlertTriangle" size={14} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            className="flex-1 bg-cultural-gradient hover:opacity-90"
          >
            <Icon name="Play" size={16} />
            {currentLanguage === 'hi' ? 'शुरू करें' : 'Start Learning'}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            {isExpanded 
              ? (currentLanguage === 'hi' ? 'कम दिखाएं' : 'Show Less')
              : (currentLanguage === 'hi' ? 'और देखें' : 'Show More')
            }
          </Button>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <span className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>{method.studentsCount} {currentLanguage === 'hi' ? 'छात्र' : 'students'}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{method.lastUpdated}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Icon name="Share2" size={14} />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Icon name="Heart" size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodCard;