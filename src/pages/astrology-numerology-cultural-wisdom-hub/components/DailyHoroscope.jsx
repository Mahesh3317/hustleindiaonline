import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const DailyHoroscope = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedSign, setSelectedSign] = useState('aries');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const zodiacSigns = [
    {
      id: 'aries',
      name: 'Aries',
      nameHi: 'मेष',
      icon: '♈',
      dates: 'Mar 21 - Apr 19',
      datesHi: '21 मार्च - 19 अप्रैल',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'taurus',
      name: 'Taurus',
      nameHi: 'वृषभ',
      icon: '♉',
      dates: 'Apr 20 - May 20',
      datesHi: '20 अप्रैल - 20 मई',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      nameHi: 'मिथुन',
      icon: '♊',
      dates: 'May 21 - Jun 20',
      datesHi: '21 मई - 20 जून',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'cancer',
      name: 'Cancer',
      nameHi: 'कर्क',
      icon: '♋',
      dates: 'Jun 21 - Jul 22',
      datesHi: '21 जून - 22 जुलाई',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'leo',
      name: 'Leo',
      nameHi: 'सिंह',
      icon: '♌',
      dates: 'Jul 23 - Aug 22',
      datesHi: '23 जुलाई - 22 अगस्त',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'virgo',
      name: 'Virgo',
      nameHi: 'कन्या',
      icon: '♍',
      dates: 'Aug 23 - Sep 22',
      datesHi: '23 अगस्त - 22 सितंबर',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    }
  ];

  const horoscopeData = {
    aries: {
      general: {
        en: "Today brings excellent opportunities for new business ventures. Your natural leadership will attract potential partners and investors.",
        hi: "आज नए व्यापारिक उद्यमों के लिए उत्कृष्ट अवसर लाता है। आपका प्राकृतिक नेतृत्व संभावित भागीदारों और निवेशकों को आकर्षित करेगा।"
      },
      business: {
        en: "Perfect day to launch your online business or YouTube channel. Mars energy supports bold digital initiatives.",
        hi: "अपना ऑनलाइन व्यापार या यूट्यूब चैनल शुरू करने के लिए आदर्श दिन। मंगल की ऊर्जा साहसिक डिजिटल पहल का समर्थन करती है।"
      },
      lucky: {
        en: "Lucky Numbers: 3, 9, 21 | Lucky Color: Red | Lucky Time: 10:00 AM - 12:00 PM",
        hi: "भाग्यशाली संख्या: 3, 9, 21 | भाग्यशाली रंग: लाल | भाग्यशाली समय: सुबह 10:00 - दोपहर 12:00"
      }
    },
    taurus: {
      general: {
        en: "Financial stability improves today. Focus on long-term investments and passive income strategies.",
        hi: "आज वित्तीय स्थिरता में सुधार होता है। दीर्घकालिक निवेश और निष्क्रिय आय रणनीतियों पर ध्यान दें।"
      },
      business: {
        en: "Excellent time for affiliate marketing and creating digital products. Venus supports creative monetization.",
        hi: "एफिलिएट मार्केटिंग और डिजिटल उत्पाद बनाने के लिए उत्कृष्ट समय। शुक्र रचनात्मक मुद्रीकरण का समर्थन करता है।"
      },
      lucky: {
        en: "Lucky Numbers: 6, 15, 24 | Lucky Color: Green | Lucky Time: 2:00 PM - 4:00 PM",
        hi: "भाग्यशाली संख्या: 6, 15, 24 | भाग्यशाली रंग: हरा | भाग्यशाली समय: दोपहर 2:00 - शाम 4:00"
      }
    },
    gemini: {
      general: {
        en: "Communication skills are heightened. Perfect day for content creation and social media marketing.",
        hi: "संचार कौशल बढ़े हुए हैं। सामग्री निर्माण और सोशल मीडिया मार्केटिंग के लिए आदर्श दिन।"
      },
      business: {
        en: "Mercury supports blogging, copywriting, and digital marketing campaigns. Multiple income streams activate.",
        hi: "बुध ब्लॉगिंग, कॉपी राइटिंग और डिजिटल मार्केटिंग अभियानों का समर्थन करता है। कई आय धाराएं सक्रिय होती हैं।"
      },
      lucky: {
        en: "Lucky Numbers: 5, 14, 23 | Lucky Color: Yellow | Lucky Time: 9:00 AM - 11:00 AM",
        hi: "भाग्यशाली संख्या: 5, 14, 23 | भाग्यशाली रंग: पीला | भाग्यशाली समय: सुबह 9:00 - सुबह 11:00"
      }
    },
    cancer: {
      general: {
        en: "Intuition guides you toward profitable opportunities. Trust your instincts in business decisions.",
        hi: "अंतर्ज्ञान आपको लाभदायक अवसरों की ओर मार्गदर्शन करता है। व्यापारिक निर्णयों में अपनी प्रवृत्ति पर भरोसा करें।"
      },
      business: {
        en: "Home-based business ventures flourish. Moon energy supports family-oriented earning strategies.",
        hi: "घर-आधारित व्यापारिक उद्यम फलते-फूलते हैं। चंद्र ऊर्जा पारिवारिक-उन्मुख कमाई रणनीतियों का समर्थन करती है।"
      },
      lucky: {
        en: "Lucky Numbers: 2, 7, 16 | Lucky Color: Silver | Lucky Time: 6:00 PM - 8:00 PM",
        hi: "भाग्यशाली संख्या: 2, 7, 16 | भाग्यशाली रंग: चांदी | भाग्यशाली समय: शाम 6:00 - रात 8:00"
      }
    },
    leo: {
      general: {
        en: "Your charisma attracts business opportunities. Perfect time for personal branding and influencer marketing.",
        hi: "आपका करिश्मा व्यापारिक अवसरों को आकर्षित करता है। व्यक्तिगत ब्रांडिंग और प्रभावशाली मार्केटिंग के लिए आदर्श समय।"
      },
      business: {
        en: "Sun energy supports creative ventures and entertainment-based earning. YouTube and Instagram thrive.",
        hi: "सूर्य ऊर्जा रचनात्मक उद्यमों और मनोरंजन-आधारित कमाई का समर्थन करती है। यूट्यूब और इंस्टाग्राम फलते-फूलते हैं।"
      },
      lucky: {
        en: "Lucky Numbers: 1, 8, 19 | Lucky Color: Gold | Lucky Time: 12:00 PM - 2:00 PM",
        hi: "भाग्यशाली संख्या: 1, 8, 19 | भाग्यशाली रंग: सुनहरा | भाग्यशाली समय: दोपहर 12:00 - दोपहर 2:00"
      }
    },
    virgo: {
      general: {
        en: "Attention to detail pays off in digital projects. Perfect day for optimizing and improving existing ventures.",
        hi: "डिजिटल परियोजनाओं में विस्तार पर ध्यान देना फायदेमंद है। मौजूदा उद्यमों को अनुकूलित और सुधारने के लिए आदर्श दिन।"
      },
      business: {
        en: "Mercury supports technical skills and data analysis. SEO and analytics work brings profitable insights.",
        hi: "बुध तकनीकी कौशल और डेटा विश्लेषण का समर्थन करता है। एसईओ और एनालिटिक्स कार्य लाभदायक अंतर्दृष्टि लाता है।"
      },
      lucky: {
        en: "Lucky Numbers: 6, 15, 27 | Lucky Color: Navy Blue | Lucky Time: 3:00 PM - 5:00 PM",
        hi: "भाग्यशाली संख्या: 6, 15, 27 | भाग्यशाली रंग: नेवी ब्लू | भाग्यशाली समय: दोपहर 3:00 - शाम 5:00"
      }
    }
  };

  const getCurrentHoroscope = () => {
    return horoscopeData[selectedSign] || horoscopeData.aries;
  };

  const getDisplayName = (sign) => {
    return currentLanguage === 'hi' ? sign.nameHi : sign.name;
  };

  const getDisplayDates = (sign) => {
    return currentLanguage === 'hi' ? sign.datesHi : sign.dates;
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-cultural">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Icon name="Star" size={24} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 font-poppins">
              {currentLanguage === 'hi' ? 'दैनिक राशिफल' : 'Daily Horoscope'}
            </h2>
            <p className="text-sm text-gray-600">
              {currentLanguage === 'hi' ? 'व्यापारिक सफलता के लिए' : 'For Business Success'}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString(currentLanguage === 'hi' ? 'hi-IN' : 'en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {/* Zodiac Signs Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.id}
            onClick={() => setSelectedSign(sign.id)}
            className={`p-3 rounded-xl text-center transition-all duration-200 ${
              selectedSign === sign.id
                ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-purple-50 hover:shadow-md'
            }`}
          >
            <div className="text-2xl mb-1">{sign.icon}</div>
            <div className="text-xs font-medium">{getDisplayName(sign)}</div>
          </button>
        ))}
      </div>

      {/* Selected Horoscope */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">
              {zodiacSigns.find(s => s.id === selectedSign)?.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                {getDisplayName(zodiacSigns.find(s => s.id === selectedSign))}
              </h3>
              <p className="text-sm text-gray-500">
                {getDisplayDates(zodiacSigns.find(s => s.id === selectedSign))}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* General Prediction */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Icon name="Sparkles" size={16} className="mr-2 text-purple-500" />
              {currentLanguage === 'hi' ? 'सामान्य भविष्यवाणी' : 'General Prediction'}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {getCurrentHoroscope().general[currentLanguage]}
            </p>
          </div>

          {/* Business Prediction */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Icon name="TrendingUp" size={16} className="mr-2 text-green-500" />
              {currentLanguage === 'hi' ? 'व्यापारिक भविष्यवाणी' : 'Business Prediction'}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {getCurrentHoroscope().business[currentLanguage]}
            </p>
          </div>

          {/* Lucky Elements */}
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
              <Icon name="Clover" size={16} className="mr-2 text-yellow-500" />
              {currentLanguage === 'hi' ? 'भाग्यशाली तत्व' : 'Lucky Elements'}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {getCurrentHoroscope().lucky[currentLanguage]}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            className="w-full"
            iconName="Share2"
            iconPosition="left"
          >
            {currentLanguage === 'hi' ? 'राशिफल साझा करें' : 'Share Horoscope'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DailyHoroscope;