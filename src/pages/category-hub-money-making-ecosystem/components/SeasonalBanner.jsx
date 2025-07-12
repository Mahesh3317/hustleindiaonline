import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SeasonalBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const banners = [
    {
      id: 1,
      title: "Diwali Season Affiliate Marketing",
      titleHi: "दिवाली सीज़न एफिलिएट मार्केटिंग",
      subtitle: "Earn ₹25,000+ during festival season with gift recommendations",
      subtitleHi: "त्योहारी सीज़न में गिफ्ट रेकमेंडेशन से ₹25,000+ कमाएं",
      image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-500 to-red-600",
      icon: "Gift",
      cta: "Start Now",
      ctaHi: "अभी शुरू करें",
      badge: "Limited Time",
      badgeHi: "सीमित समय"
    },
    {
      id: 2,
      title: "New Year App Launch Strategies",
      titleHi: "नए साल की ऐप लॉन्च रणनीति",
      subtitle: "Launch your app idea and earn ₹50,000+ in first quarter",
      subtitleHi: "अपना ऐप आइडिया लॉन्च करें और पहली तिमाही में ₹50,000+ कमाएं",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-purple-600",
      icon: "Rocket",
      cta: "Learn More",
      ctaHi: "और जानें",
      badge: "Trending",
      badgeHi: "ट्रेंडिंग"
    },
    {
      id: 3,
      title: "YouTube Shorts Monetization",
      titleHi: "यूट्यूब शॉर्ट्स मुद्रीकरण",
      subtitle: "Create viral shorts and earn ₹15,000+ monthly",
      subtitleHi: "वायरल शॉर्ट्स बनाएं और मासिक ₹15,000+ कमाएं",
      image: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-500 to-pink-600",
      icon: "Video",
      cta: "Watch Tutorial",
      ctaHi: "ट्यूटोरियल देखें",
      badge: "Hot",
      badgeHi: "हॉट"
    }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banner = banners[currentBanner];

  return (
    <div className="relative bg-white rounded-xl shadow-cultural-lg overflow-hidden mb-8">
      <div className={`bg-gradient-to-r ${banner.gradient} relative`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentLanguage === 'hi' ? banner.badgeHi : banner.badge}
              </span>
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Icon name={banner.icon} size={24} color="white" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 font-poppins">
                {currentLanguage === 'hi' ? banner.titleHi : banner.title}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                {currentLanguage === 'hi' ? banner.subtitleHi : banner.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
              >
                <Icon name="Play" size={20} />
                {currentLanguage === 'hi' ? banner.ctaHi : banner.cta}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Icon name="BookOpen" size={20} />
                {currentLanguage === 'hi' ? 'गाइड पढ़ें' : 'Read Guide'}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2.5K+</div>
                <div className="text-white/80 text-sm">
                  {currentLanguage === 'hi' ? 'सफल उपयोगकर्ता' : 'Success Stories'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">₹45L+</div>
                <div className="text-white/80 text-sm">
                  {currentLanguage === 'hi' ? 'कुल कमाई' : 'Total Earned'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/80 text-sm">
                  {currentLanguage === 'hi' ? 'सफलता दर' : 'Success Rate'}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-video lg:aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <Icon name="TrendingUp" size={24} color="var(--color-success)" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-success text-white rounded-lg p-3 shadow-lg">
              <div className="text-sm font-semibold">Live Earnings</div>
              <div className="text-lg font-bold">₹12,450</div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevBanner}
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full w-10 h-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextBanner}
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full w-10 h-10"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner 
                  ? 'bg-white scale-110' :'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalBanner;