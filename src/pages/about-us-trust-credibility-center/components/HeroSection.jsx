import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Meet the Team Behind Your Digital Success",
      subtitle: "From Traditional Jobs to Digital Freedom - Our Journey to Empower Digital Bharat",
      description: "Started in 2019 with a simple mission: Make online earning accessible to every Indian, regardless of their language or technical background. Today, we've helped over 2.5 lakh Indians start their digital journey.",
      founderName: "Rajesh Kumar Sharma",
      founderTitle: "Founder & Chief Digital Mentor",
      founderStory: "From a ₹25,000/month corporate job in Pune to ₹5+ lakh monthly digital income. My journey began with a simple blog about technology, and today HustleIndiaOnline reaches millions across India.",
      stats: [
        { number: "2.5L+", label: "Community Members" },
        { number: "₹50Cr+", label: "Community Earnings" },
        { number: "8", label: "Languages Supported" },
        { number: "5", label: "Years of Trust" }
      ]
    },
    hi: {
      title: "आपकी डिजिटल सफलता के पीछे की टीम से मिलें",
      subtitle: "पारंपरिक नौकरी से डिजिटल स्वतंत्रता तक - डिजिटल भारत को सशक्त बनाने की हमारी यात्रा",
      description: "2019 में एक सरल मिशन के साथ शुरुआत: हर भारतीय के लिए ऑनलाइन कमाई को सुलभ बनाना, चाहे उनकी भाषा या तकनीकी पृष्ठभूमि कुछ भी हो। आज हमने 2.5 लाख से अधिक भारतीयों को उनकी डिजिटल यात्रा शुरू करने में मदद की है।",
      founderName: "राजेश कुमार शर्मा",
      founderTitle: "संस्थापक और मुख्य डिजिटल मेंटर",
      founderStory: "पुणे में ₹25,000/महीने की कॉर्पोरेट नौकरी से ₹5+ लाख मासिक डिजिटल आय तक। मेरी यात्रा प्रौद्योगिकी के बारे में एक सरल ब्लॉग से शुरू हुई, और आज हसलइंडियाऑनलाइन पूरे भारत में लाखों लोगों तक पहुंचता है।",
      stats: [
        { number: "2.5L+", label: "समुदाय के सदस्य" },
        { number: "₹50Cr+", label: "समुदाय की कमाई" },
        { number: "8", label: "समर्थित भाषाएं" },
        { number: "5", label: "विश्वास के वर्ष" }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Users" size={16} />
                <span>{currentLanguage === 'hi' ? 'हमारी कहानी' : 'Our Story'}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                {currentContent.title}
              </h1>
              
              <p className="text-xl text-primary font-semibold">
                {currentContent.subtitle}
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-cultural-lg p-8 border border-border">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt={currentContent.founderName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {currentContent.founderName}
                  </h3>
                  <p className="text-primary font-medium">
                    {currentContent.founderTitle}
                  </p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {currentContent.founderStory}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} />
                  <span>{currentLanguage === 'hi' ? 'पुणे, महाराष्ट्र' : 'Pune, Maharashtra'}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Calendar" size={14} />
                  <span>{currentLanguage === 'hi' ? '2019 से' : 'Since 2019'}</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-cultural-gradient text-white px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span className="text-sm font-semibold">
                  {currentLanguage === 'hi' ? 'टॉप मेंटर' : 'Top Mentor'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;