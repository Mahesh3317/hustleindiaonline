import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NumerologyCalculator = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('name');
  const [nameInput, setNameInput] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [results, setResults] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const calculateNameNumber = (name) => {
    const letterValues = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    let sum = 0;
    for (let char of name.toUpperCase()) {
      if (letterValues[char]) {
        sum += letterValues[char];
      }
    }

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
  };

  const calculateLifePath = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let sum = day + month + year;
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
  };

  const getNumberMeaning = (number) => {
    const meanings = {
      1: {
        en: {
          title: "Leadership & Innovation",
          description: "Perfect for starting new ventures, leadership roles, and pioneering business ideas. Excellent for YouTube channels, personal branding, and solo entrepreneurship.",
          business: "Ideal for: Content Creation, Consulting, Personal Coaching, Tech Startups"
        },
        hi: {
          title: "नेतृत्व और नवाचार",
          description: "नए उद्यम शुरू करने, नेतृत्व की भूमिकाओं और अग्रणी व्यापारिक विचारों के लिए आदर्श। यूट्यूब चैनल, व्यक्तिगत ब्रांडिंग और एकल उद्यमिता के लिए उत्कृष्ट।",
          business: "आदर्श: सामग्री निर्माण, परामर्श, व्यक्तिगत कोचिंग, टेक स्टार्टअप"
        }
      },
      2: {
        en: {
          title: "Cooperation & Partnership",
          description: "Excellent for collaborative businesses, partnerships, and team-based ventures. Great for affiliate marketing and joint ventures.",
          business: "Ideal for: Affiliate Marketing, Partnerships, Team Projects, Social Media Management"
        },
        hi: {
          title: "सहयोग और साझेदारी",
          description: "सहयोगी व्यापार, साझेदारी और टीम-आधारित उद्यमों के लिए उत्कृष्ट। एफिलिएट मार्केटिंग और संयुक्त उद्यमों के लिए बेहतरीन।",
          business: "आदर्श: एफिलिएट मार्केटिंग, साझेदारी, टीम प्रोजेक्ट, सोशल मीडिया प्रबंधन"
        }
      },
      3: {
        en: {
          title: "Creativity & Communication",
          description: "Perfect for creative businesses, content creation, and communication-based ventures. Excellent for blogging, video creation, and artistic pursuits.",
          business: "Ideal for: Blogging, Video Creation, Graphic Design, Creative Services"
        },
        hi: {
          title: "रचनात्मकता और संचार",
          description: "रचनात्मक व्यापार, सामग्री निर्माण और संचार-आधारित उद्यमों के लिए आदर्श। ब्लॉगिंग, वीडियो निर्माण और कलात्मक गतिविधियों के लिए उत्कृष्ट।",
          business: "आदर्श: ब्लॉगिंग, वीडियो निर्माण, ग्राफिक डिज़ाइन, रचनात्मक सेवाएं"
        }
      },
      4: {
        en: {
          title: "Stability & Organization",
          description: "Great for systematic businesses, process-oriented ventures, and long-term building. Perfect for e-commerce and structured online businesses.",
          business: "Ideal for: E-commerce, Online Courses, Systematic Trading, Business Consulting"
        },
        hi: {
          title: "स्थिरता और संगठन",
          description: "व्यवस्थित व्यापार, प्रक्रिया-उन्मुख उद्यमों और दीर्घकालिक निर्माण के लिए बेहतरीन। ई-कॉमर्स और संरचित ऑनलाइन व्यापार के लिए आदर्श।",
          business: "आदर्श: ई-कॉमर्स, ऑनलाइन कोर्स, व्यवस्थित ट्रेडिंग, व्यापार परामर्श"
        }
      },
      5: {
        en: {
          title: "Freedom & Adventure",
          description: "Perfect for dynamic businesses, travel-related ventures, and flexible work arrangements. Great for digital nomad lifestyle and varied income streams.",
          business: "Ideal for: Travel Blogging, Freelancing, Multiple Income Streams, Digital Marketing"
        },
        hi: {
          title: "स्वतंत्रता और साहसिक कार्य",
          description: "गतिशील व्यापार, यात्रा-संबंधी उद्यमों और लचीली कार्य व्यवस्था के लिए आदर्श। डिजिटल खानाबदोश जीवनशैली और विविध आय धाराओं के लिए बेहतरीन।",
          business: "आदर्श: ट्रैवल ब्लॉगिंग, फ्रीलांसिंग, कई आय धाराएं, डिजिटल मार्केटिंग"
        }
      },
      6: {
        en: {
          title: "Service & Responsibility",
          description: "Excellent for service-based businesses, helping others, and community-focused ventures. Perfect for coaching, consulting, and educational content.",
          business: "Ideal for: Coaching, Educational Content, Community Building, Service-Based Business"
        },
        hi: {
          title: "सेवा और जिम्मेदारी",
          description: "सेवा-आधारित व्यापार, दूसरों की मदद करने और समुदाय-केंद्रित उद्यमों के लिए उत्कृष्ट। कोचिंग, परामर्श और शैक्षिक सामग्री के लिए आदर्श।",
          business: "आदर्श: कोचिंग, शैक्षिक सामग्री, समुदाय निर्माण, सेवा-आधारित व्यापार"
        }
      },
      7: {
        en: {
          title: "Analysis & Research",
          description: "Perfect for research-based businesses, technical analysis, and specialized knowledge sharing. Great for niche expertise and analytical content.",
          business: "Ideal for: Technical Analysis, Research Services, Niche Expertise, Data Analytics"
        },
        hi: {
          title: "विश्लेषण और अनुसंधान",
          description: "अनुसंधान-आधारित व्यापार, तकनीकी विश्लेषण और विशेष ज्ञान साझाकरण के लिए आदर्श। विशिष्ट विशेषज्ञता और विश्लेषणात्मक सामग्री के लिए बेहतरीन।",
          business: "आदर्श: तकनीकी विश्लेषण, अनुसंधान सेवाएं, विशिष्ट विशेषज्ञता, डेटा एनालिटिक्स"
        }
      },
      8: {
        en: {
          title: "Material Success & Authority",
          description: "Excellent for high-earning businesses, authority building, and material success. Perfect for premium services and high-ticket offerings.",
          business: "Ideal for: Premium Services, High-Ticket Coaching, Investment Advice, Authority Building"
        },
        hi: {
          title: "भौतिक सफलता और अधिकार",
          description: "उच्च-आय व्यापार, अधिकार निर्माण और भौतिक सफलता के लिए उत्कृष्ट। प्रीमियम सेवाओं और उच्च-टिकट पेशकशों के लिए आदर्श।",
          business: "आदर्श: प्रीमियम सेवाएं, उच्च-टिकट कोचिंग, निवेश सलाह, अधिकार निर्माण"
        }
      },
      9: {
        en: {
          title: "Humanitarian & Global",
          description: "Perfect for global businesses, humanitarian causes, and wide-reaching impact. Great for content that helps masses and social entrepreneurship.",
          business: "Ideal for: Global Content, Social Impact, Mass Education, Humanitarian Business"
        },
        hi: {
          title: "मानवीय और वैश्विक",
          description: "वैश्विक व्यापार, मानवीय कारणों और व्यापक प्रभाव के लिए आदर्श। जनता की मदद करने वाली सामग्री और सामाजिक उद्यमिता के लिए बेहतरीन।",
          business: "आदर्श: वैश्विक सामग्री, सामाजिक प्रभाव, जन शिक्षा, मानवीय व्यापार"
        }
      }
    };

    return meanings[number] || meanings[1];
  };

  const handleCalculate = () => {
    let result = {};

    if (activeTab === 'name' && nameInput.trim()) {
      const nameNumber = calculateNameNumber(nameInput);
      result = {
        type: 'name',
        number: nameNumber,
        input: nameInput,
        meaning: getNumberMeaning(nameNumber)
      };
    } else if (activeTab === 'birth' && birthDate) {
      const lifePathNumber = calculateLifePath(birthDate);
      result = {
        type: 'birth',
        number: lifePathNumber,
        input: birthDate,
        meaning: getNumberMeaning(lifePathNumber)
      };
    } else if (activeTab === 'business' && businessName.trim()) {
      const businessNumber = calculateNameNumber(businessName);
      result = {
        type: 'business',
        number: businessNumber,
        input: businessName,
        meaning: getNumberMeaning(businessNumber)
      };
    }

    setResults(result);
  };

  const tabs = [
    {
      id: 'name',
      name: currentLanguage === 'hi' ? 'नाम संख्या' : 'Name Number',
      icon: 'User'
    },
    {
      id: 'birth',
      name: currentLanguage === 'hi' ? 'जन्म संख्या' : 'Life Path',
      icon: 'Calendar'
    },
    {
      id: 'business',
      name: currentLanguage === 'hi' ? 'व्यापार संख्या' : 'Business Number',
      icon: 'Briefcase'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-cultural">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
          <Icon name="Calculator" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 font-poppins">
            {currentLanguage === 'hi' ? 'अंक ज्योतिष कैलकुलेटर' : 'Numerology Calculator'}
          </h2>
          <p className="text-sm text-gray-600">
            {currentLanguage === 'hi' ? 'व्यापारिक सफलता के लिए संख्याओं की शक्ति' : 'Harness the Power of Numbers for Business Success'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Input Forms */}
      <div className="bg-white rounded-xl p-6 mb-6">
        {activeTab === 'name' && (
          <div>
            <Input
              label={currentLanguage === 'hi' ? 'अपना पूरा नाम दर्ज करें' : 'Enter Your Full Name'}
              type="text"
              placeholder={currentLanguage === 'hi' ? 'उदाहरण: राहुल शर्मा' : 'e.g., Rahul Sharma'}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              {currentLanguage === 'hi' ?'आपके नाम की संख्या आपके व्यक्तित्व और व्यापारिक क्षमताओं को दर्शाती है।' :'Your name number reflects your personality and business capabilities.'
              }
            </p>
          </div>
        )}

        {activeTab === 'birth' && (
          <div>
            <Input
              label={currentLanguage === 'hi' ? 'अपनी जन्म तिथि चुनें' : 'Select Your Birth Date'}
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              {currentLanguage === 'hi' ?'आपकी जीवन पथ संख्या आपके जीवन के उद्देश्य और करियर दिशा को दर्शाती है।' :'Your life path number reveals your life purpose and career direction.'
              }
            </p>
          </div>
        )}

        {activeTab === 'business' && (
          <div>
            <Input
              label={currentLanguage === 'hi' ? 'व्यापार/चैनल का नाम दर्ज करें' : 'Enter Business/Channel Name'}
              type="text"
              placeholder={currentLanguage === 'hi' ? 'उदाहरण: HustleIndia' : 'e.g., HustleIndia'}
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              {currentLanguage === 'hi' ?'व्यापार नाम की संख्या आपके व्यापारिक सफलता की संभावनाओं को दर्शाती है।' :'Business name number indicates your venture\'s success potential.'
              }
            </p>
          </div>
        )}

        <Button
          variant="default"
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90"
          iconName="Zap"
          iconPosition="left"
          disabled={
            (activeTab === 'name' && !nameInput.trim()) ||
            (activeTab === 'birth' && !birthDate) ||
            (activeTab === 'business' && !businessName.trim())
          }
        >
          {currentLanguage === 'hi' ? 'गणना करें' : 'Calculate Now'}
        </Button>
      </div>

      {/* Results */}
      {results && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">{results.number}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {results.meaning[currentLanguage].title}
            </h3>
            <p className="text-sm text-gray-600">
              {currentLanguage === 'hi' ? 'आपकी संख्या:' : 'Your Number:'} {results.number}
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'विवरण' : 'Description'}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {results.meaning[currentLanguage].description}
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                {currentLanguage === 'hi' ? 'व्यापारिक सुझाव' : 'Business Recommendations'}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {results.meaning[currentLanguage].business}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-3">
            <Button
              variant="outline"
              className="flex-1"
              iconName="Share2"
              iconPosition="left"
            >
              {currentLanguage === 'hi' ? 'साझा करें' : 'Share'}
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              iconName="Download"
              iconPosition="left"
            >
              {currentLanguage === 'hi' ? 'रिपोर्ट डाउनलोड करें' : 'Download Report'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NumerologyCalculator;