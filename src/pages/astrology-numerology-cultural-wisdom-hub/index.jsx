import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DailyHoroscope from './components/DailyHoroscope';
import NumerologyCalculator from './components/NumerologyCalculator';
import DreamInterpretation from './components/DreamInterpretation';
import ExpertConsultation from './components/ExpertConsultation';
import CulturalWisdomBlog from './components/CulturalWisdomBlog';

const AstrologyNumerologyHub = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('horoscope');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const sections = [
    {
      id: 'horoscope',
      name: currentLanguage === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope',
      icon: 'Star',
      description: currentLanguage === 'hi' ? 'व्यापारिक सफलता के लिए' : 'For Business Success'
    },
    {
      id: 'numerology',
      name: currentLanguage === 'hi' ? 'अंक ज्योतिष' : 'Numerology',
      icon: 'Calculator',
      description: currentLanguage === 'hi' ? 'संख्याओं की शक्ति' : 'Power of Numbers'
    },
    {
      id: 'dreams',
      name: currentLanguage === 'hi' ? 'स्वप्न व्याख्या' : 'Dream Interpretation',
      icon: 'Moon',
      description: currentLanguage === 'hi' ? 'भविष्य की जानकारी' : 'Future Insights'
    },
    {
      id: 'experts',
      name: currentLanguage === 'hi' ? 'विशेषज्ञ परामर्श' : 'Expert Consultation',
      icon: 'Users',
      description: currentLanguage === 'hi' ? 'व्यक्तिगत मार्गदर्शन' : 'Personal Guidance'
    },
    {
      id: 'blog',
      name: currentLanguage === 'hi' ? 'ज्ञान ब्लॉग' : 'Wisdom Blog',
      icon: 'BookOpen',
      description: currentLanguage === 'hi' ? 'गहरी अंतर्दृष्टि' : 'Deep Insights'
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'horoscope':
        return <DailyHoroscope />;
      case 'numerology':
        return <NumerologyCalculator />;
      case 'dreams':
        return <DreamInterpretation />;
      case 'experts':
        return <ExpertConsultation />;
      case 'blog':
        return <CulturalWisdomBlog />;
      default:
        return <DailyHoroscope />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-cultural-lg">
                <Icon name="Sparkles" size={32} color="white" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                  {currentLanguage === 'hi' ? 'ज्योतिष और अंक ज्योतिष' : 'Astrology & Numerology'}
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  {currentLanguage === 'hi' ? 'सांस्कृतिक ज्ञान केंद्र' : 'Cultural Wisdom Hub'}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {currentLanguage === 'hi' ?'प्राचीन भारतीय ज्ञान को आधुनिक डिजिटल सफलता के साथ जोड़ें। ज्योतिष, अंक ज्योतिष और स्वप्न व्याख्या के माध्यम से अपने व्यापारिक निर्णयों को बेहतर बनाएं।' :'Bridge ancient Indian wisdom with modern digital success. Enhance your business decisions through astrology, numerology, and dream interpretation guided by cultural authenticity.'
              }
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <Icon name="Shield" size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage === 'hi' ? 'प्रमाणित विशेषज्ञ' : 'Certified Experts'}
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <Icon name="Clock" size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage === 'hi' ? '24/7 उपलब्ध' : '24/7 Available'}
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <Icon name="Heart" size={16} className="text-red-600" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage === 'hi' ? '10,000+ खुश ग्राहक' : '10,000+ Happy Clients'}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-cultural mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
                  }`}
                >
                  <Icon name={section.icon} size={24} className="mx-auto mb-2" />
                  <div className="text-sm font-semibold">{section.name}</div>
                  <div className="text-xs opacity-80 mt-1">{section.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Section Content */}
          <div className="mb-12">
            {renderActiveSection()}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-cultural hover:shadow-cultural-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'तत्काल परिणाम' : 'Instant Results'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'hi' ?'अपने प्रश्नों के तुरंत उत्तर पाएं और व्यापारिक निर्णय लेने में तेजी लाएं।' :'Get immediate answers to your questions and accelerate your business decision-making process.'
                }
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-cultural hover:shadow-cultural-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Target" size={24} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'व्यापारिक फोकस' : 'Business Focused'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'hi' ?'सभी सेवाएं विशेष रूप से उद्यमियों और व्यापारिक सफलता के लिए डिज़ाइन की गई हैं।' :'All services are specifically designed for entrepreneurs and business success optimization.'
                }
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-cultural hover:shadow-cultural-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Globe" size={24} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'सांस्कृतिक प्रामाणिकता' : 'Cultural Authenticity'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'hi' ?'पारंपरिक भारतीय ज्ञान को आधुनिक डिजिटल युग के साथ सम्मानपूर्वक जोड़ा गया है।' :'Traditional Indian wisdom respectfully integrated with modern digital age requirements.'
                }
              </p>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-cultural mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
                {currentLanguage === 'hi' ? 'सफलता की कहानियां' : 'Success Stories'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {currentLanguage === 'hi' ?'हजारों उद्यमियों ने हमारे सांस्कृतिक ज्ञान का उपयोग करके अपने व्यापार में सफलता पाई है।' :'Thousands of entrepreneurs have achieved business success using our cultural wisdom guidance.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: currentLanguage === 'hi' ? 'राहुल शर्मा' : 'Rahul Sharma',
                  business: currentLanguage === 'hi' ? 'ई-कॉमर्स स्टार्टअप' : 'E-commerce Startup',
                  result: currentLanguage === 'hi' ? '300% बिक्री वृद्धि' : '300% Sales Growth',
                  testimonial: currentLanguage === 'hi' ?'अंक ज्योतिष के अनुसार व्यापार नाम बदलने के बाद हमारी बिक्री तीन गुना बढ़ गई।' :'After changing our business name according to numerology, our sales tripled within months.'
                },
                {
                  name: currentLanguage === 'hi' ? 'प्रिया पटेल' : 'Priya Patel',
                  business: currentLanguage === 'hi' ? 'यूट्यूब चैनल' : 'YouTube Channel',
                  result: currentLanguage === 'hi' ? '1M+ सब्सक्राइबर' : '1M+ Subscribers',
                  testimonial: currentLanguage === 'hi' ?'ज्योतिषीय समय के अनुसार वीडियो अपलोड करने से हमारे चैनल की तेजी से वृद्धि हुई।' :'Uploading videos according to astrological timing accelerated our channel growth exponentially.'
                },
                {
                  name: currentLanguage === 'hi' ? 'अमित गुप्ता' : 'Amit Gupta',
                  business: currentLanguage === 'hi' ? 'डिजिटल मार्केटिंग' : 'Digital Marketing',
                  result: currentLanguage === 'hi' ? '₹50L+ वार्षिक आय' : '₹50L+ Annual Revenue',
                  testimonial: currentLanguage === 'hi' ?'स्वप्न व्याख्या ने मुझे सही व्यापारिक अवसरों की पहचान करने में मदद की।' :'Dream interpretation helped me identify the right business opportunities at perfect timing.'
                }
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{story.name}</h4>
                      <p className="text-sm text-gray-600">{story.business}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      {story.result}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm italic">"{story.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600to-pink-600 rounded-2xl p-8 text-center text-white shadow-cultural-lg">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" size={32} color="white" strokeWidth={2} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                {currentLanguage === 'hi' ?'अपनी व्यापारिक यात्रा शुरू करें' :'Start Your Business Journey Today'
                }
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {currentLanguage === 'hi' ?'प्राचीन ज्ञान और आधुनिक रणनीति के साथ अपने सपनों को साकार करें' :'Transform your dreams into reality with ancient wisdom and modern strategy'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-50 font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  {currentLanguage === 'hi' ? 'मुफ्त परामर्श बुक करें' : 'Book Free Consultation'}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 font-semibold"
                  iconName="Play"
                  iconPosition="left"
                >
                  {currentLanguage === 'hi' ? 'डेमो देखें' : 'Watch Demo'}
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} />
                  <span className="text-sm">
                    {currentLanguage === 'hi' ? 'कोई छुपी फीस नहीं' : 'No Hidden Fees'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span className="text-sm">
                    {currentLanguage === 'hi' ? '100% सुरक्षित' : '100% Secure'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">
                    {currentLanguage === 'hi' ? 'तत्काल शुरुआत' : 'Instant Start'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyNumerologyHub;