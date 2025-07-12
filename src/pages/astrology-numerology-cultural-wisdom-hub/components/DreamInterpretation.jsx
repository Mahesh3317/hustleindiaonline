import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DreamInterpretation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDream, setSelectedDream] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const dreamCategories = [
    {
      id: 'all',
      name: currentLanguage === 'hi' ? 'सभी' : 'All',
      icon: 'Grid3X3'
    },
    {
      id: 'money',
      name: currentLanguage === 'hi' ? 'पैसा' : 'Money',
      icon: 'DollarSign'
    },
    {
      id: 'business',
      name: currentLanguage === 'hi' ? 'व्यापार' : 'Business',
      icon: 'Briefcase'
    },
    {
      id: 'success',
      name: currentLanguage === 'hi' ? 'सफलता' : 'Success',
      icon: 'Trophy'
    },
    {
      id: 'technology',
      name: currentLanguage === 'hi' ? 'तकनीक' : 'Technology',
      icon: 'Smartphone'
    },
    {
      id: 'animals',
      name: currentLanguage === 'hi' ? 'जानवर' : 'Animals',
      icon: 'Heart'
    }
  ];

  const dreamSymbols = [
    {
      id: 1,
      symbol: currentLanguage === 'hi' ? 'सोना' : 'Gold',
      symbolHi: 'सोना',
      category: 'money',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop',
      interpretation: {
        en: "Dreaming of gold indicates upcoming financial opportunities and prosperity. This is an excellent time to start new business ventures or invest in digital assets.",
        hi: "सोने का सपना देखना आगामी वित्तीय अवसरों और समृद्धि का संकेत है। यह नए व्यापारिक उद्यम शुरू करने या डिजिटल संपत्ति में निवेश करने का उत्कृष्ट समय है।"
      },
      businessAdvice: {
        en: "Focus on premium services, luxury market, or high-value digital products. Consider gold-related affiliate marketing or investment content.",
        hi: "प्रीमियम सेवाओं, लक्जरी बाजार या उच्च-मूल्य डिजिटल उत्पादों पर ध्यान दें। सोने से संबंधित एफिलिएट मार्केटिंग या निवेश सामग्री पर विचार करें।"
      },
      luckyNumbers: [3, 7, 21],
      timing: currentLanguage === 'hi' ? 'अगले 21 दिन' : 'Next 21 days'
    },
    {
      id: 2,
      symbol: currentLanguage === 'hi' ? 'मोबाइल फोन' : 'Mobile Phone',
      symbolHi: 'मोबाइल फोन',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      interpretation: {
        en: "Mobile phone dreams suggest digital communication opportunities and online business success. New connections and digital ventures are favored.",
        hi: "मोबाइल फोन के सपने डिजिटल संचार अवसरों और ऑनलाइन व्यापार सफलता का सुझाव देते हैं। नए कनेक्शन और डिजिटल उद्यम अनुकूल हैं।"
      },
      businessAdvice: {
        en: "Perfect time for mobile app development, social media marketing, or mobile-first business strategies. Consider app reviews or mobile technology content.",
        hi: "मोबाइल ऐप विकास, सोशल मीडिया मार्केटिंग या मोबाइल-फर्स्ट व्यापार रणनीतियों के लिए आदर्श समय। ऐप रिव्यू या मोबाइल तकनीक सामग्री पर विचार करें।"
      },
      luckyNumbers: [5, 9, 14],
      timing: currentLanguage === 'hi' ? 'अगले 14 दिन' : 'Next 14 days'
    },
    {
      id: 3,
      symbol: currentLanguage === 'hi' ? 'हाथी' : 'Elephant',
      symbolHi: 'हाथी',
      category: 'animals',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop',
      interpretation: {
        en: "Elephant dreams symbolize wisdom, strength, and long-term success. This indicates stable business growth and wise investment decisions ahead.",
        hi: "हाथी के सपने ज्ञान, शक्ति और दीर्घकालिक सफलता का प्रतीक हैं। यह स्थिर व्यापारिक विकास और आगे बुद्धिमान निवेश निर्णयों का संकेत है।"
      },
      businessAdvice: {
        en: "Focus on building long-term, sustainable businesses. Consider educational content, wisdom-sharing platforms, or traditional business models with modern twists.",
        hi: "दीर्घकालिक, टिकाऊ व्यापार बनाने पर ध्यान दें। शैक्षिक सामग्री, ज्ञान-साझाकरण प्लेटफॉर्म या आधुनिक मोड़ के साथ पारंपरिक व्यापार मॉडल पर विचार करें।"
      },
      luckyNumbers: [8, 16, 24],
      timing: currentLanguage === 'hi' ? 'अगले 30 दिन' : 'Next 30 days'
    },
    {
      id: 4,
      symbol: currentLanguage === 'hi' ? 'सीढ़ी' : 'Ladder',
      symbolHi: 'सीढ़ी',
      category: 'success',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      interpretation: {
        en: "Climbing a ladder in dreams represents career advancement and step-by-step progress toward goals. Success through gradual improvement is indicated.",
        hi: "सपनों में सीढ़ी चढ़ना करियर की उन्नति और लक्ष्यों की ओर चरणबद्ध प्रगति का प्रतिनिधित्व करता है। क्रमिक सुधार के माध्यम से सफलता का संकेत है।"
      },
      businessAdvice: {
        en: "Perfect time for skill development, course creation, or step-by-step tutorial content. Consider building educational ladders for your audience.",
        hi: "कौशल विकास, कोर्स निर्माण या चरणबद्ध ट्यूटोरियल सामग्री के लिए आदर्श समय। अपने दर्शकों के लिए शैक्षिक सीढ़ियां बनाने पर विचार करें।"
      },
      luckyNumbers: [4, 12, 28],
      timing: currentLanguage === 'hi' ? 'अगले 28 दिन' : 'Next 28 days'
    },
    {
      id: 5,
      symbol: currentLanguage === 'hi' ? 'पैसे की बारिश' : 'Money Rain',
      symbolHi: 'पैसे की बारिश',
      category: 'money',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
      interpretation: {
        en: "Money raining from sky indicates multiple income streams and unexpected financial gains. Abundance and prosperity are coming your way.",
        hi: "आसमान से पैसों की बारिश कई आय धाराओं और अप्रत्याशित वित्तीय लाभ का संकेत है। प्रचुरता और समृद्धि आपके रास्ते में आ रही है।"
      },
      businessAdvice: {
        en: "Diversify income sources, explore passive income opportunities, and consider multiple monetization strategies for your content or business.",
        hi: "आय स्रोतों में विविधता लाएं, निष्क्रिय आय के अवसरों का पता लगाएं, और अपनी सामग्री या व्यापार के लिए कई मुद्रीकरण रणनीतियों पर विचार करें।"
      },
      luckyNumbers: [6, 15, 33],
      timing: currentLanguage === 'hi' ? 'अगले 15 दिन' : 'Next 15 days'
    },
    {
      id: 6,
      symbol: currentLanguage === 'hi' ? 'कंप्यूटर' : 'Computer',
      symbolHi: 'कंप्यूटर',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
      interpretation: {
        en: "Computer dreams indicate digital opportunities, online business success, and technological advancement in your career path.",
        hi: "कंप्यूटर के सपने डिजिटल अवसरों, ऑनलाइन व्यापार सफलता और आपके करियर पथ में तकनीकी उन्नति का संकेत देते हैं।"
      },
      businessAdvice: {
        en: "Focus on digital skills, online courses, software development, or tech-related content creation. The digital world holds your success.",
        hi: "डिजिटल कौशल, ऑनलाइन कोर्स, सॉफ्टवेयर विकास या तकनीक-संबंधी सामग्री निर्माण पर ध्यान दें। डिजिटल दुनिया में आपकी सफलता है।"
      },
      luckyNumbers: [2, 11, 20],
      timing: currentLanguage === 'hi' ? 'अगले 20 दिन' : 'Next 20 days'
    }
  ];

  const filteredDreams = dreamSymbols.filter(dream => {
    const matchesCategory = selectedCategory === 'all' || dream.category === selectedCategory;
    const matchesSearch = dream.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dream.symbolHi.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-cultural">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Icon name="Moon" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 font-poppins">
            {currentLanguage === 'hi' ? 'स्वप्न व्याख्या' : 'Dream Interpretation'}
          </h2>
          <p className="text-sm text-gray-600">
            {currentLanguage === 'hi' ? 'व्यापारिक सफलता के लिए स्वप्न संकेत' : 'Dream Symbols for Business Success'}
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <Input
          type="search"
          placeholder={currentLanguage === 'hi' ? 'स्वप्न खोजें...' : 'Search dreams...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />

        <div className="flex flex-wrap gap-2">
          {dreamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dream Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredDreams.map((dream) => (
          <div
            key={dream.id}
            onClick={() => setSelectedDream(dream)}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-lg mb-3">
              <Image
                src={dream.image}
                alt={dream.symbol}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{dream.symbol}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {dream.interpretation[currentLanguage].substring(0, 80)}...
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-indigo-600 font-medium">
                {dream.timing}
              </span>
              <Icon name="ChevronRight" size={16} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Dream Detail Modal */}
      {selectedDream && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedDream.symbol}</h3>
                <button
                  onClick={() => setSelectedDream(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={selectedDream.image}
                  alt={selectedDream.symbol}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Icon name="Eye" size={16} className="mr-2 text-indigo-500" />
                    {currentLanguage === 'hi' ? 'स्वप्न व्याख्या' : 'Dream Interpretation'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedDream.interpretation[currentLanguage]}
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Icon name="Lightbulb" size={16} className="mr-2 text-green-500" />
                    {currentLanguage === 'hi' ? 'व्यापारिक सलाह' : 'Business Advice'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedDream.businessAdvice[currentLanguage]}
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                    {currentLanguage === 'hi' ? 'भाग्यशाली विवरण' : 'Lucky Details'}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">
                        {currentLanguage === 'hi' ? 'भाग्यशाली संख्याएं:' : 'Lucky Numbers:'}
                      </span> {selectedDream.luckyNumbers.join(', ')}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        {currentLanguage === 'hi' ? 'समय सीमा:' : 'Timing:'}
                      </span> {selectedDream.timing}
                    </p>
                  </div>
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
                  iconName="BookOpen"
                  iconPosition="left"
                >
                  {currentLanguage === 'hi' ? 'और पढ़ें' : 'Read More'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Tips */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Icon name="Sparkles" size={20} className="mr-2 text-indigo-500" />
          {currentLanguage === 'hi' ? 'स्वप्न टिप्स' : 'Dream Tips'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Clock" size={16} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'सुबह याद करें' : 'Remember in Morning'}
              </h4>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ?'जागने के तुरंत बाद अपने सपनों को याद करने की कोशिश करें।' :'Try to recall your dreams immediately after waking up.'
                }
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="PenTool" size={16} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">
                {currentLanguage === 'hi' ? 'डायरी रखें' : 'Keep a Journal'}
              </h4>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ?'अपने सपनों को लिखकर रखें और पैटर्न देखें।' :'Write down your dreams and look for patterns.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamInterpretation;