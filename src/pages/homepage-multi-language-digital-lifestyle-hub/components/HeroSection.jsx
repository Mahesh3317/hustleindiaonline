import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ currentLanguage }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = {
    en: [
      {
        id: 1,
        name: "Rajesh Kumar",
        location: "Mumbai, Maharashtra",
        earnings: "₹85,000",
        method: "Blogging & Affiliate Marketing",
        story: "From a struggling office worker to earning more than my salary through blogging. Started with just ₹500 investment!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        duration: "8 months"
      },
      {
        id: 2,
        name: "Priya Sharma",
        location: "Delhi, NCR",
        earnings: "₹65,000",
        method: "YouTube & Course Creation",
        story: "Teaching cooking online transformed my kitchen hobby into a thriving business. Now I help others do the same!",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        duration: "6 months"
      },
      {
        id: 3,
        name: "Amit Patel",
        location: "Ahmedabad, Gujarat",
        earnings: "₹1,20,000",
        method: "App Development & Freelancing",
        story: "Built my first app during lockdown. Now running a team of 5 developers and earning 6 figures monthly!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        duration: "1 year"
      }
    ],
    hi: [
      {
        id: 1,
        name: "राजेश कुमार",
        location: "मुंबई, महाराष्ट्र",
        earnings: "₹85,000",
        method: "ब्लॉगिंग और एफिलिएट मार्केटिंग",
        story: "एक संघर्षरत ऑफिस वर्कर से ब्लॉगिंग के जरिए अपनी सैलरी से ज्यादा कमाने तक का सफर। सिर्फ ₹500 के निवेश से शुरुआत की थी!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        duration: "8 महीने"
      },
      {
        id: 2,
        name: "प्रिया शर्मा",
        location: "दिल्ली, एनसीआर",
        earnings: "₹65,000",
        method: "यूट्यूब और कोर्स बनाना",
        story: "खाना बनाने के शौक को ऑनलाइन सिखाकर एक फलता-फूलता बिजनेस बना दिया। अब मैं दूसरों की भी मदद करती हूं!",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        duration: "6 महीने"
      },
      {
        id: 3,
        name: "अमित पटेल",
        location: "अहमदाबाद, गुजरात",
        earnings: "₹1,20,000",
        method: "ऐप डेवलपमेंट और फ्रीलांसिंग",
        story: "लॉकडाउन के दौरान पहला ऐप बनाया। अब 5 डेवलपर्स की टीम चलाता हूं और महीने में 6 अंकों की कमाई!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        duration: "1 साल"
      }
    ],
    ta: [
      {
        id: 1,
        name: "ராஜேஷ் குமார்",
        location: "சென்னை, தமிழ்நாடு",
        earnings: "₹85,000",
        method: "ப்ளாகிங் மற்றும் அஃபிலியேட் மார்க்கெட்டிங்",
        story: "ஒரு போராடும் அலுவலக ஊழியரிலிருந்து ப்ளாகிங் மூலம் என் சம்பளத்தை விட அதிகம் சம்பாதிக்கும் வரை! வெறும் ₹500 முதலீட்டில் தொடங்கினேன்!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        duration: "8 மாதங்கள்"
      },
      {
        id: 2,
        name: "பிரியா ஷர்மா",
        location: "சென்னை, தமிழ்நாடு",
        earnings: "₹65,000",
        method: "யூடியூப் மற்றும் கோர்ஸ் உருவாக்கம்",
        story: "சமையல் பொழுதுபோக்கை ஆன்லைனில் கற்பிப்பதன் மூலம் ஒரு வளர்ந்து வரும் வணிகமாக மாற்றினேன். இப்போது மற்றவர்களுக்கும் உதவுகிறேன்!",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        duration: "6 மாதங்கள்"
      },
      {
        id: 3,
        name: "அமித் பட்டேல்",
        location: "சென்னை, தமிழ்நாடு",
        earnings: "₹1,20,000",
        method: "ஆப் டெவலப்மென்ட் மற்றும் ஃப்ரீலான்சிங்",
        story: "லாக்டவுனின் போது முதல் ஆப்பை உருவாக்கினேன். இப்போது 5 டெவலப்பர்களின் குழுவை நடத்தி மாதம் 6 இலக்க வருமானம்!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        duration: "1 வருடம்"
      }
    ],
    te: [
      {
        id: 1,
        name: "రాజేష్ కుమార్",
        location: "హైదరాబాద్, తెలంగాణ",
        earnings: "₹85,000",
        method: "బ్లాగింగ్ మరియు అఫిలియేట్ మార్కెటింగ్",
        story: "కష్టపడుతున్న ఆఫీస్ వర్కర్ నుండి బ్లాగింగ్ ద్వారా నా జీతం కంటే ఎక్కువ సంపాదించడం వరకు! కేవలం ₹500 పెట్టుబడితో మొదలుపెట్టాను!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        duration: "8 నెలలు"
      },
      {
        id: 2,
        name: "ప్రియా శర్మ",
        location: "హైదరాబాద్, తెలంగాణ",
        earnings: "₹65,000",
        method: "యూట్యూబ్ మరియు కోర్స్ క్రియేషన్",
        story: "వంట అభిరుచిని ఆన్‌లైన్‌లో నేర్పడం ద్వారా అభివృద్ధి చెందుతున్న వ్యాపారంగా మార్చాను. ఇప్పుడు ఇతరులకు కూడా సహాయం చేస్తున్నాను!",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        duration: "6 నెలలు"
      },
      {
        id: 3,
        name: "అమిత్ పటేల్",
        location: "హైదరాబాద్, తెలంగాణ",
        earnings: "₹1,20,000",
        method: "యాప్ డెవలప్‌మెంట్ మరియు ఫ్రీలాన్సింగ్",
        story: "లాక్‌డౌన్ సమయంలో మొదటి యాప్‌ను నిర్మించాను. ఇప్పుడు 5 డెవలపర్ల బృందాన్ని నడుపుతూ నెలకు 6 అంకెల ఆదాయం!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        duration: "1 సంవత్సరం"
      }
    ]
  };

  const heroContent = {
    en: {
      title: "Transform Your Life with Digital India",
      subtitle: "Join 50,000+ Indians earning ₹25,000 to ₹2,00,000 monthly from home",
      description: "Learn proven methods, get step-by-step guidance, and start your digital earning journey today. No experience needed - just dedication!",
      cta: "Start Earning Now",
      watchStory: "Watch Success Stories",
      stats: [
        { number: "50,000+", label: "Active Earners" },
        { number: "₹15 Cr+", label: "Total Earnings" },
        { number: "4.8/5", label: "Success Rate" }
      ]
    },
    hi: {
      title: "डिजिटल इंडिया के साथ अपनी जिंदगी बदलें",
      subtitle: "50,000+ भारतीयों के साथ जुड़ें जो घर से ₹25,000 से ₹2,00,000 महीना कमा रहे हैं",
      description: "सिद्ध तरीके सीखें, स्टेप-बाई-स्टेप गाइडेंस पाएं, और आज ही अपनी डिजिटल कमाई की यात्रा शुरू करें। कोई अनुभव की जरूरत नहीं - बस समर्पण चाहिए!",
      cta: "अभी कमाना शुरू करें",
      watchStory: "सफलता की कहानियां देखें",
      stats: [
        { number: "50,000+", label: "सक्रिय कमाने वाले" },
        { number: "₹15 करोड़+", label: "कुल कमाई" },
        { number: "4.8/5", label: "सफलता दर" }
      ]
    },
    ta: {
      title: "டிஜிட்டல் இந்தியாவுடன் உங்கள் வாழ்க்கையை மாற்றுங்கள்",
      subtitle: "வீட்டிலிருந்து மாதம் ₹25,000 முதல் ₹2,00,000 வரை சம்பாதிக்கும் 50,000+ இந்தியர்களுடன் சேருங்கள்",
      description: "நிரூபிக்கப்பட்ட முறைகளைக் கற்றுக்கொள்ளுங்கள், படிப்படியான வழிகாட்டுதலைப் பெறுங்கள், இன்றே உங்கள் டிஜிட்டல் வருமானப் பயணத்தைத் தொடங்குங்கள். அனுபவம் தேவையில்லை - வெறும் அர்ப்பணிப்பு மட்டுமே!",
      cta: "இப்போதே சம்பாதிக்க ஆரம்பிக்கவும்",
      watchStory: "வெற்றிக் கதைகளைப் பாருங்கள்",
      stats: [
        { number: "50,000+", label: "செயலில் உள்ள சம்பாதிப்பவர்கள்" },
        { number: "₹15 கோடி+", label: "மொத்த வருமானம்" },
        { number: "4.8/5", label: "வெற்றி விகிதம்" }
      ]
    },
    te: {
      title: "డిజిటల్ ఇండియాతో మీ జీవితాన్ని మార్చుకోండి",
      subtitle: "ఇంటి నుండి నెలకు ₹25,000 నుండి ₹2,00,000 వరకు సంపాదిస్తున్న 50,000+ భారతీయులతో చేరండి",
      description: "నిరూపితమైన పద్ధతులను నేర్చుకోండి, దశల వారీ మార్గదర్శకత్వం పొందండి, మరియు ఈరోజే మీ డిజిటల్ సంపాదన ప్రయాణాన్ని ప్రారంభించండి. అనుభవం అవసరం లేదు - కేవలం అంకితభావం మాత్రమే!",
      cta: "ఇప్పుడే సంపాదించడం ప్రారంభించండి",
      watchStory: "విజయ కథలను చూడండి",
      stats: [
        { number: "50,000+", label: "క్రియాశీల సంపాదకులు" },
        { number: "₹15 కోటి+", label: "మొత్తం సంపాదన" },
        { number: "4.8/5", label: "విజయ రేటు" }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => 
        (prev + 1) % successStories[currentLanguage].length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentLanguage]);

  const currentStory = successStories[currentLanguage][currentStoryIndex];
  const content = heroContent[currentLanguage];

  return (
    <section className="relative min-h-screen bg-cultural-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white/90">
                {content.subtitle}
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                {content.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold font-poppins">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/category-hub-money-making-ecosystem">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
                  iconName="Rocket"
                  iconPosition="left"
                >
                  {content.cta}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                iconName="Play"
                iconPosition="left"
              >
                {content.watchStory}
              </Button>
            </div>
          </div>

          {/* Right Content - Success Story Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-cultural-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={currentStory.image}
                    alt={currentStory.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {currentStory.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {currentStory.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">
                      {currentLanguage === 'hi' ? 'मासिक आय' : 
                       currentLanguage === 'ta' ? 'மாதாந்திர வருமானம்' :
                       currentLanguage === 'te' ? 'నెలవారీ ఆదాయం' : 'Monthly Earnings'}
                    </p>
                    <p className="text-3xl font-bold text-success">
                      {currentStory.earnings}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-secondary">
                      {currentLanguage === 'hi' ? 'समय अवधि' : 
                       currentLanguage === 'ta' ? 'கால அளவு' :
                       currentLanguage === 'te' ? 'కాల వ్యవధి' : 'Duration'}
                    </p>
                    <p className="text-lg font-semibold text-text-primary">
                      {currentStory.duration}
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm font-medium text-primary mb-2">
                    {currentStory.method}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    "{currentStory.story}"
                  </p>
                </div>
              </div>

              {/* Story Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {successStories[currentLanguage].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentStoryIndex ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Icon name="TrendingUp" size={16} className="inline mr-1" />
              {currentLanguage === 'hi' ? 'सत्यापित' : 
               currentLanguage === 'ta' ? 'சரிபார்க்கப்பட்டது' :
               currentLanguage === 'te' ? 'ధృవీకరించబడింది' : 'Verified'}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Icon name="ChevronDown" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;