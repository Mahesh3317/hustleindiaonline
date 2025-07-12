import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ContentShowcase = ({ currentLanguage }) => {
  const moneyMakingOpportunities = {
    en: [
      {
        id: 1,
        title: "YouTube Shorts Monetization",
        earnings: "₹45,000/month",
        difficulty: "Beginner",
        timeRequired: "2-3 hours/day",
        description: "Create viral shorts and earn through AdSense, brand partnerships, and affiliate marketing.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      },
      {
        id: 2,
        title: "Freelance Content Writing",
        earnings: "₹35,000/month",
        difficulty: "Intermediate",
        timeRequired: "4-5 hours/day",
        description: "Write articles, blogs, and web content for international clients on Upwork and Fiverr.",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop",
        verified: true,
        trending: false
      },
      {
        id: 3,
        title: "Dropshipping Business",
        earnings: "₹80,000/month",
        difficulty: "Advanced",
        timeRequired: "6-8 hours/day",
        description: "Start your own e-commerce store without inventory using Shopify and Facebook Ads.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      }
    ],
    hi: [
      {
        id: 1,
        title: "यूट्यूब शॉर्ट्स से कमाई",
        earnings: "₹45,000/महीना",
        difficulty: "शुरुआती",
        timeRequired: "2-3 घंटे/दिन",
        description: "वायरल शॉर्ट्स बनाएं और एडसेंस, ब्रांड पार्टनरशिप और एफिलिएट मार्केटिंग से कमाएं।",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      },
      {
        id: 2,
        title: "फ्रीलांस कंटेंट राइटिंग",
        earnings: "₹35,000/महीना",
        difficulty: "मध्यम",
        timeRequired: "4-5 घंटे/दिन",
        description: "अपवर्क और फाइवर पर अंतर्राष्ट्रीय क्लाइंट्स के लिए आर्टिकल, ब्लॉग और वेब कंटेंट लिखें।",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop",
        verified: true,
        trending: false
      },
      {
        id: 3,
        title: "ड्रॉपशिपिंग बिजनेस",
        earnings: "₹80,000/महीना",
        difficulty: "उन्नत",
        timeRequired: "6-8 घंटे/दिन",
        description: "शॉपिफाई और फेसबुक एड्स का उपयोग करके बिना इन्वेंटरी के अपना ई-कॉमर्स स्टोर शुरू करें।",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      }
    ],
    ta: [
      {
        id: 1,
        title: "யூடியூப் ஷார்ட்ஸ் பணமாக்கல்",
        earnings: "₹45,000/மாதம்",
        difficulty: "ஆரம்பநிலை",
        timeRequired: "2-3 மணி/நாள்",
        description: "வைரல் ஷார்ட்ஸ் உருவாக்கி AdSense, பிராண்ட் கூட்டாண்மை மற்றும் அஃபிலியேட் மார்க்கெட்டிங் மூலம் சம்பாதிக்கவும்.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      },
      {
        id: 2,
        title: "ஃப்ரீலான்ஸ் உள்ளடக்க எழுத்து",
        earnings: "₹35,000/மாதம்",
        difficulty: "இடைநிலை",
        timeRequired: "4-5 மணி/நாள்",
        description: "Upwork மற்றும் Fiverr இல் சர்வதேச வாடிக்கையாளர்களுக்கு கட்டுரைகள், வலைப்பதிவுகள் மற்றும் வலை உள்ளடக்கம் எழுதுங்கள்.",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop",
        verified: true,
        trending: false
      },
      {
        id: 3,
        title: "ட்ராப்ஷிப்பிங் வணிகம்",
        earnings: "₹80,000/மாதம்",
        difficulty: "மேம்பட்ட",
        timeRequired: "6-8 மணி/நாள்",
        description: "Shopify மற்றும் Facebook Ads ஐப் பயன்படுத்தி சரக்கு இல்லாமல் உங்கள் சொந்த ஈ-காமர்ஸ் ஸ்டோரைத் தொடங்குங்கள்.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      }
    ],
    te: [
      {
        id: 1,
        title: "యూట్యూబ్ షార్ట్స్ మనీటైజేషన్",
        earnings: "₹45,000/నెల",
        difficulty: "ప్రారంభ",
        timeRequired: "2-3 గంటలు/రోజు",
        description: "వైరల్ షార్ట్స్ సృష్టించి AdSense, బ్రాండ్ పార్టనర్‌షిప్‌లు మరియు అఫిలియేట్ మార్కెటింగ్ ద్వారా సంపాదించండి.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      },
      {
        id: 2,
        title: "ఫ్రీలాన్స్ కంటెంట్ రైటింగ్",
        earnings: "₹35,000/నెల",
        difficulty: "మధ్యస్థ",
        timeRequired: "4-5 గంటలు/రోజు",
        description: "Upwork మరియు Fiverr లో అంతర్జాతీయ క్లయింట్‌ల కోసం వ్యాసాలు, బ్లాగులు మరియు వెబ్ కంటెంట్ రాయండి.",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop",
        verified: true,
        trending: false
      },
      {
        id: 3,
        title: "డ్రాప్‌షిప్పింగ్ వ్యాపారం",
        earnings: "₹80,000/నెల",
        difficulty: "అధునాతన",
        timeRequired: "6-8 గంటలు/రోజు",
        description: "Shopify మరియు Facebook Ads ఉపయోగించి ఇన్వెంటరీ లేకుండా మీ స్వంత ఈ-కామర్స్ స్టోర్‌ను ప్రారంభించండి.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        verified: true,
        trending: true
      }
    ]
  };

  const techReviews = {
    en: [
      {
        id: 1,
        title: "Best Earning Apps 2025",
        rating: 4.8,
        reviews: 1250,
        category: "Finance Apps",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 2,
        title: "Top 10 Freelancing Platforms",
        rating: 4.6,
        reviews: 890,
        category: "Work Platforms",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 3,
        title: "AI Tools for Content Creation",
        rating: 4.9,
        reviews: 2100,
        category: "AI Tools",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        affiliate: true
      }
    ],
    hi: [
      {
        id: 1,
        title: "बेस्ट कमाई ऐप्स 2025",
        rating: 4.8,
        reviews: 1250,
        category: "फाइनेंस ऐप्स",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 2,
        title: "टॉप 10 फ्रीलांसिंग प्लेटफॉर्म",
        rating: 4.6,
        reviews: 890,
        category: "वर्क प्लेटफॉर्म",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 3,
        title: "कंटेंट क्रिएशन के लिए AI टूल्स",
        rating: 4.9,
        reviews: 2100,
        category: "AI टूल्स",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        affiliate: true
      }
    ],
    ta: [
      {
        id: 1,
        title: "சிறந்த வருமான ஆப்ஸ் 2025",
        rating: 4.8,
        reviews: 1250,
        category: "நிதி ஆப்ஸ்",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 2,
        title: "முதல் 10 ஃப்ரீலான்சிங் தளங்கள்",
        rating: 4.6,
        reviews: 890,
        category: "வேலை தளங்கள்",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 3,
        title: "உள்ளடக்க உருவாக்கத்திற்கான AI கருவிகள்",
        rating: 4.9,
        reviews: 2100,
        category: "AI கருவிகள்",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        affiliate: true
      }
    ],
    te: [
      {
        id: 1,
        title: "ఉత్తమ సంపాదన యాప్‌లు 2025",
        rating: 4.8,
        reviews: 1250,
        category: "ఫైనాన్స్ యాప్‌లు",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 2,
        title: "టాప్ 10 ఫ్రీలాన్సింగ్ ప్లాట్‌ఫారమ్‌లు",
        rating: 4.6,
        reviews: 890,
        category: "వర్క్ ప్లాట్‌ఫారమ్‌లు",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        affiliate: true
      },
      {
        id: 3,
        title: "కంటెంట్ క్రియేషన్ కోసం AI టూల్స్",
        rating: 4.9,
        reviews: 2100,
        category: "AI టూల్స్",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        affiliate: true
      }
    ]
  };

  const astrologyContent = {
    en: [
      {
        id: 1,
        title: "Today\'s Business Horoscope",
        description: "Auspicious time for new investments and partnerships. Mercury favors communication.",
        icon: "Star",
        time: "Best Time: 10:30 AM - 2:00 PM"
      },
      {
        id: 2,
        title: "Lucky Numbers for Trading",
        description: "Numbers 3, 7, 21 are favorable for financial decisions today.",
        icon: "Hash",
        time: "Valid until midnight"
      },
      {
        id: 3,
        title: "Dream Interpretation",
        description: "Dreaming of money indicates upcoming opportunities. Stay alert for signs.",
        icon: "Moon",
        time: "Updated daily"
      }
    ],
    hi: [
      {
        id: 1,
        title: "आज का व्यापारिक राशिफल",
        description: "नए निवेश और साझेदारी के लिए शुभ समय। बुध संचार का समर्थन करता है।",
        icon: "Star",
        time: "सर्वोत्तम समय: सुबह 10:30 - दोपहर 2:00"
      },
      {
        id: 2,
        title: "ट्रेडिंग के लिए भाग्यशाली संख्याएं",
        description: "आज वित्तीय निर्णयों के लिए संख्या 3, 7, 21 अनुकूल हैं।",
        icon: "Hash",
        time: "आधी रात तक वैध"
      },
      {
        id: 3,
        title: "सपनों की व्याख्या",
        description: "पैसे का सपना देखना आने वाले अवसरों का संकेत है। संकेतों के लिए सतर्क रहें।",
        icon: "Moon",
        time: "दैनिक अपडेट"
      }
    ],
    ta: [
      {
        id: 1,
        title: "இன்றைய வணிக ராசிபலன்",
        description: "புதிய முதலீடுகள் மற்றும் கூட்டாண்மைகளுக்கு நல்ல நேரம். புதன் தொடர்பாடலை ஆதரிக்கிறது.",
        icon: "Star",
        time: "சிறந்த நேரம்: காலை 10:30 - மதியம் 2:00"
      },
      {
        id: 2,
        title: "வர்த்தகத்திற்கான அதிர்ஷ்ட எண்கள்",
        description: "இன்று நிதி முடிவுகளுக்கு 3, 7, 21 எண்கள் சாதகமானவை.",
        icon: "Hash",
        time: "நள்ளிரவு வரை செல்லுபடியாகும்"
      },
      {
        id: 3,
        title: "கனவு விளக்கம்",
        description: "பணத்தைப் பற்றி கனவு காண்பது வரவிருக்கும் வாய்ப்புகளைக் குறிக்கிறது. அறிகுறிகளுக்கு எச்சரிக்கையாக இருங்கள்.",
        icon: "Moon",
        time: "தினசரி புதுப்பிக்கப்படுகிறது"
      }
    ],
    te: [
      {
        id: 1,
        title: "నేటి వ్యాపార రాశిఫలం",
        description: "కొత్త పెట్టుబడులు మరియు భాగస్వామ్యాలకు శుభ సమయం. బుధుడు కమ్యూనికేషన్‌కు అనుకూలంగా ఉన్నాడు.",
        icon: "Star",
        time: "ఉత్తమ సమయం: ఉదయం 10:30 - మధ్యాహ్నం 2:00"
      },
      {
        id: 2,
        title: "ట్రేడింగ్ కోసం అదృష్ట సంఖ్యలు",
        description: "ఈరోజు ఆర్థిక నిర్ణయాలకు 3, 7, 21 సంఖ్యలు అనుకూలంగా ఉన్నాయి.",
        icon: "Hash",
        time: "అర్ధరాత్రి వరకు చెల్లుబాటు"
      },
      {
        id: 3,
        title: "కల వివరణ",
        description: "డబ్బు గురించి కలలు కనడం రాబోయే అవకాశాలను సూచిస్తుంది. సంకేతాల కోసం అప్రమత్తంగా ఉండండి.",
        icon: "Moon",
        time: "ప్రతిరోజూ అప్‌డేట్ చేయబడుతుంది"
      }
    ]
  };

  const sectionTitles = {
    en: {
      moneyMaking: "Latest Money-Making Opportunities",
      techReviews: "Trending Tech Reviews",
      astrology: "Aaj Ka Rashifal"
    },
    hi: {
      moneyMaking: "नवीनतम पैसे कमाने के अवसर",
      techReviews: "ट्रेंडिंग टेक रिव्यू",
      astrology: "आज का राशिफल"
    },
    ta: {
      moneyMaking: "சமீபத்திய பணம் சம்பாதிக்கும் வாய்ப்புகள்",
      techReviews: "டிரெண்டிங் டெக் ரிவியூக்கள்",
      astrology: "இன்றைய ராசிபலன்"
    },
    te: {
      moneyMaking: "తాజా డబ్బు సంపాదన అవకాశాలు",
      techReviews: "ట్రెండింగ్ టెక్ రివ్యూలు",
      astrology: "నేటి రాశిఫలం"
    }
  };

  const currentMoneyMaking = moneyMakingOpportunities[currentLanguage];
  const currentTechReviews = techReviews[currentLanguage];
  const currentAstrology = astrologyContent[currentLanguage];
  const titles = sectionTitles[currentLanguage];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Money-Making Opportunities */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-primary font-poppins">
                {titles.moneyMaking}
              </h2>
              <Link to="/category-hub-money-making-ecosystem">
                <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                  {currentLanguage === 'hi' ? 'सभी देखें' : 
                   currentLanguage === 'ta' ? 'அனைத்தையும் பார்க்கவும்' :
                   currentLanguage === 'te' ? 'అన్నీ చూడండి' : 'View All'}
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {currentMoneyMaking.map((opportunity) => (
                <div key={opportunity.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-cultural transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="relative overflow-hidden rounded-lg w-20 h-20 flex-shrink-0">
                      <Image
                        src={opportunity.image}
                        alt={opportunity.title}
                        className="w-full h-full object-cover"
                      />
                      {opportunity.trending && (
                        <div className="absolute top-1 right-1 bg-error text-white text-xs px-1 py-0.5 rounded">
                          🔥
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-text-primary text-sm line-clamp-1">
                          {opportunity.title}
                        </h3>
                        {opportunity.verified && (
                          <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                        )}
                      </div>
                      <p className="text-xs text-text-secondary mb-2 line-clamp-2">
                        {opportunity.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-success">{opportunity.earnings}</span>
                        <span className="text-text-secondary">{opportunity.timeRequired}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Reviews */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-primary font-poppins">
                {titles.techReviews}
              </h2>
              <Link to="/tech-reviews-product-comparison-hub">
                <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                  {currentLanguage === 'hi' ? 'सभी देखें' : 
                   currentLanguage === 'ta' ? 'அனைத்தையும் பார்க்கவும்' :
                   currentLanguage === 'te' ? 'అన్నీ చూడండి' : 'View All'}
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {currentTechReviews.map((review) => (
                <div key={review.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-cultural transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="relative overflow-hidden rounded-lg w-20 h-20 flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.title}
                        className="w-full h-full object-cover"
                      />
                      {review.affiliate && (
                        <div className="absolute top-1 right-1 bg-primary text-white text-xs px-1 py-0.5 rounded">
                          AD
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text-primary text-sm mb-2 line-clamp-1">
                        {review.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={12}
                              color={i < Math.floor(review.rating) ? "var(--color-warning)" : "var(--color-border)"}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium">{review.rating}</span>
                        <span className="text-xs text-text-secondary">({review.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-muted px-2 py-1 rounded text-text-secondary">
                          {review.category}
                        </span>
                        <Button variant="ghost" size="xs" iconName="ExternalLink">
                          {currentLanguage === 'hi' ? 'देखें' : 
                           currentLanguage === 'ta' ? 'பார்க்கவும்' :
                           currentLanguage === 'te' ? 'చూడండి' : 'View'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Astrology Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-primary font-poppins">
                {titles.astrology}
              </h2>
              <Link to="/astrology-numerology-cultural-wisdom-hub">
                <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                  {currentLanguage === 'hi' ? 'सभी देखें' : 
                   currentLanguage === 'ta' ? 'அனைத்தையும் பார்க்கவும்' :
                   currentLanguage === 'te' ? 'అన్నీ చూడండి' : 'View All'}
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {currentAstrology.map((item) => (
                <div key={item.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-cultural transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cultural-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text-primary text-sm mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-secondary mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-medium">
                          {item.time}
                        </span>
                        <Button variant="ghost" size="xs" iconName="ArrowRight">
                          {currentLanguage === 'hi' ? 'पढ़ें' : 
                           currentLanguage === 'ta' ? 'படிக்கவும்' :
                           currentLanguage === 'te' ? 'చదవండి' : 'Read'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;