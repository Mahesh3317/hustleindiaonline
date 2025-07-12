import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertConsultation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [selectedService, setSelectedService] = useState('astrology');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const experts = [
    {
      id: 1,
      name: 'Pandit Rajesh Sharma',
      nameHi: 'पंडित राजेश शर्मा',
      specialization: currentLanguage === 'hi' ? 'वैदिक ज्योतिष और व्यापारिक परामर्श' : 'Vedic Astrology & Business Consultation',
      experience: currentLanguage === 'hi' ? '15+ वर्ष का अनुभव' : '15+ Years Experience',
      rating: 4.9,
      reviews: 1247,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      languages: ['Hindi', 'English', 'Sanskrit'],
      services: ['astrology', 'numerology', 'business'],
      price: {
        astrology: { amount: 999, duration: '30 min' },
        numerology: { amount: 799, duration: '25 min' },
        business: { amount: 1499, duration: '45 min' }
      },
      availability: currentLanguage === 'hi' ? 'आज उपलब्ध' : 'Available Today',
      description: {
        en: "Expert in Vedic astrology with specialization in business and career guidance. Helped over 5000+ entrepreneurs make informed decisions using ancient wisdom.",
        hi: "व्यापार और करियर मार्गदर्शन में विशेषज्ञता के साथ वैदिक ज्योतिष के विशेषज्ञ। प्राचीन ज्ञान का उपयोग करके 5000+ उद्यमियों को सूचित निर्णय लेने में मदद की है।"
      }
    },
    {
      id: 2,
      name: 'Dr. Priya Agarwal',
      nameHi: 'डॉ. प्रिया अग्रवाल',
      specialization: currentLanguage === 'hi' ? 'अंक ज्योतिष और डिजिटल व्यापार' : 'Numerology & Digital Business',
      experience: currentLanguage === 'hi' ? '12+ वर्ष का अनुभव' : '12+ Years Experience',
      rating: 4.8,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      languages: ['Hindi', 'English', 'Marathi'],
      services: ['numerology', 'business', 'astrology'],
      price: {
        astrology: { amount: 899, duration: '30 min' },
        numerology: { amount: 1199, duration: '35 min' },
        business: { amount: 1699, duration: '50 min' }
      },
      availability: currentLanguage === 'hi' ? 'कल उपलब्ध' : 'Available Tomorrow',
      description: {
        en: "PhD in Mathematics with expertise in numerology. Specializes in helping digital entrepreneurs choose optimal business names and launch timings.",
        hi: "गणित में पीएचडी के साथ अंक ज्योतिष में विशेषज्ञता। डिजिटल उद्यमियों को इष्टतम व्यापार नाम और लॉन्च समय चुनने में मदद करने में विशेषज्ञ।"
      }
    },
    {
      id: 3,
      name: 'Acharya Vikram Singh',
      nameHi: 'आचार्य विक्रम सिंह',
      specialization: currentLanguage === 'hi' ? 'स्वप्न विश्लेषण और भविष्यवाणी' : 'Dream Analysis & Predictions',
      experience: currentLanguage === 'hi' ? '20+ वर्ष का अनुभव' : '20+ Years Experience',
      rating: 4.9,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      languages: ['Hindi', 'English', 'Punjabi'],
      services: ['astrology', 'dreams', 'business'],
      price: {
        astrology: { amount: 1299, duration: '40 min' },
        dreams: { amount: 899, duration: '30 min' },
        business: { amount: 1799, duration: '60 min' }
      },
      availability: currentLanguage === 'hi' ? 'आज उपलब्ध' : 'Available Today',
      description: {
        en: "Master in dream interpretation and predictive astrology. Known for accurate business predictions and timing recommendations for entrepreneurs.",
        hi: "स्वप्न व्याख्या और भविष्यवाणी ज्योतिष में मास्टर। उद्यमियों के लिए सटीक व्यापारिक भविष्यवाणियों और समय सिफारिशों के लिए जाने जाते हैं।"
      }
    }
  ];

  const services = [
    {
      id: 'astrology',
      name: currentLanguage === 'hi' ? 'ज्योतिष परामर्श' : 'Astrology Consultation',
      icon: 'Star',
      description: currentLanguage === 'hi' ? 'व्यापारिक सफलता के लिए ज्योतिषीय मार्गदर्शन' : 'Astrological guidance for business success'
    },
    {
      id: 'numerology',
      name: currentLanguage === 'hi' ? 'अंक ज्योतिष' : 'Numerology',
      icon: 'Calculator',
      description: currentLanguage === 'hi' ? 'संख्याओं की शक्ति से व्यापारिक निर्णय' : 'Business decisions through the power of numbers'
    },
    {
      id: 'business',
      name: currentLanguage === 'hi' ? 'व्यापारिक परामर्श' : 'Business Consultation',
      icon: 'Briefcase',
      description: currentLanguage === 'hi' ? 'पारंपरिक ज्ञान के साथ आधुनिक व्यापार' : 'Modern business with traditional wisdom'
    },
    {
      id: 'dreams',
      name: currentLanguage === 'hi' ? 'स्वप्न विश्लेषण' : 'Dream Analysis',
      icon: 'Moon',
      description: currentLanguage === 'hi' ? 'स्वप्नों के माध्यम से भविष्य की जानकारी' : 'Future insights through dream interpretation'
    }
  ];

  const filteredExperts = experts.filter(expert => 
    expert.services.includes(selectedService)
  );

  const getExpertName = (expert) => {
    return currentLanguage === 'hi' ? expert.nameHi : expert.name;
  };

  return (
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 shadow-cultural">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
          <Icon name="Users" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 font-poppins">
            {currentLanguage === 'hi' ? 'विशेषज्ञ परामर्श' : 'Expert Consultation'}
          </h2>
          <p className="text-sm text-gray-600">
            {currentLanguage === 'hi' ? 'प्रमाणित विशेषज्ञों से व्यक्तिगत मार्गदर्शन' : 'Personal guidance from certified experts'}
          </p>
        </div>
      </div>

      {/* Service Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {currentLanguage === 'hi' ? 'सेवा चुनें' : 'Select Service'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-4 rounded-xl text-center transition-all duration-200 ${
                selectedService === service.id
                  ? 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-50 hover:shadow-md'
              }`}
            >
              <Icon name={service.icon} size={24} className="mx-auto mb-2" />
              <div className="text-sm font-medium">{service.name}</div>
              <div className="text-xs opacity-80 mt-1">{service.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Experts List */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          {currentLanguage === 'hi' ? 'उपलब्ध विशेषज्ञ' : 'Available Experts'}
        </h3>
        {filteredExperts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} color="white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{getExpertName(expert)}</h4>
                    <p className="text-sm text-gray-600">{expert.specialization}</p>
                    <p className="text-xs text-gray-500">{expert.experience}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{expert.rating}</span>
                      <span className="text-xs text-gray-500">({expert.reviews})</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">{expert.availability}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {expert.description[currentLanguage]}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Globe" size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-600">
                        {expert.languages.join(', ')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-600">
                        ₹{expert.price[selectedService]?.amount} / {expert.price[selectedService]?.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedExpert(expert)}
                      iconName="Eye"
                      iconPosition="left"
                    >
                      {currentLanguage === 'hi' ? 'विवरण' : 'View'}
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-90"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      {currentLanguage === 'hi' ? 'बुक करें' : 'Book Now'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expert Detail Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {currentLanguage === 'hi' ? 'विशेषज्ञ विवरण' : 'Expert Details'}
                </h3>
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>

              <div className="flex items-start space-x-6 mb-6">
                <div className="relative">
                  <Image
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} color="white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {getExpertName(selectedExpert)}
                  </h4>
                  <p className="text-gray-600 mb-2">{selectedExpert.specialization}</p>
                  <p className="text-sm text-gray-500 mb-3">{selectedExpert.experience}</p>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                      <span className="font-medium">{selectedExpert.rating}</span>
                      <span className="text-sm text-gray-500">({selectedExpert.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} className="text-green-500" />
                      <span className="text-sm text-green-600 font-medium">{selectedExpert.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Icon name="Globe" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {selectedExpert.languages.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-2">
                  {currentLanguage === 'hi' ? 'विवरण' : 'Description'}
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  {selectedExpert.description[currentLanguage]}
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">
                  {currentLanguage === 'hi' ? 'सेवाएं और मूल्य' : 'Services & Pricing'}
                </h5>
                <div className="space-y-3">
                  {selectedExpert.services.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    const pricing = selectedExpert.price[serviceId];
                    return (
                      <div key={serviceId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name={service.icon} size={20} className="text-rose-500" />
                          <div>
                            <p className="font-medium text-gray-800">{service.name}</p>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">₹{pricing.amount}</p>
                          <p className="text-sm text-gray-500">{pricing.duration}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  {currentLanguage === 'hi' ? 'चैट करें' : 'Chat Now'}
                </Button>
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-90"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  {currentLanguage === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Icon name="Shield" size={20} className="mr-2 text-green-500" />
          {currentLanguage === 'hi' ? 'भरोसे की गारंटी' : 'Trust Guarantee'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircle" size={20} className="text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {currentLanguage === 'hi' ? 'प्रमाणित विशेषज्ञ' : 'Certified Experts'}
              </p>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'सभी विशेषज्ञ सत्यापित हैं' : 'All experts are verified'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon name="Lock" size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {currentLanguage === 'hi' ? 'सुरक्षित भुगतान' : 'Secure Payment'}
              </p>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? '100% सुरक्षित लेनदेन' : '100% secure transactions'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon name="Headphones" size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {currentLanguage === 'hi' ? '24/7 सहायता' : '24/7 Support'}
              </p>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'hi' ? 'हमेशा आपकी सेवा में' : 'Always at your service'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertConsultation;