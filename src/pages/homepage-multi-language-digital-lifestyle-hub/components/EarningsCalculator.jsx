import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EarningsCalculator = ({ currentLanguage }) => {
  const [timeAvailable, setTimeAvailable] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [calculatedEarnings, setCalculatedEarnings] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const content = {
    en: {
      title: "Calculate Your Potential Monthly Earnings",
      subtitle: "See how much you can earn based on your available time and chosen method",
      timeLabel: "Hours available per day",
      methodLabel: "Preferred earning method",
      skillLabel: "Your skill level",
      calculateBtn: "Calculate Earnings",
      resultTitle: "Your Potential Monthly Earnings",
      disclaimer: "* Earnings may vary based on market conditions and individual performance",
      getStarted: "Get Started Now"
    },
    hi: {
      title: "अपनी संभावित मासिक आय की गणना करें",
      subtitle: "देखें कि आप अपने उपलब्ध समय और चुने गए तरीके के आधार पर कितना कमा सकते हैं",
      timeLabel: "प्रति दिन उपलब्ध घंटे",
      methodLabel: "पसंदीदा कमाई का तरीका",
      skillLabel: "आपका कौशल स्तर",
      calculateBtn: "आय की गणना करें",
      resultTitle: "आपकी संभावित मासिक आय",
      disclaimer: "* बाजार की स्थितियों और व्यक्तिगत प्रदर्शन के आधार पर आय भिन्न हो सकती है",
      getStarted: "अभी शुरू करें"
    },
    ta: {
      title: "உங்கள் சாத்தியமான மாதாந்திர வருமானத்தைக் கணக்கிடுங்கள்",
      subtitle: "உங்கள் கிடைக்கும் நேரம் மற்றும் தேர்ந்தெடுக்கப்பட்ட முறையின் அடிப்படையில் நீங்கள் எவ்வளவு சம்பாதிக்க முடியும் என்பதைப் பாருங்கள்",
      timeLabel: "ஒரு நாளுக்கு கிடைக்கும் மணிநேரங்கள்",
      methodLabel: "விருப்பமான வருமான முறை",
      skillLabel: "உங்கள் திறன் நிலை",
      calculateBtn: "வருமானத்தைக் கணக்கிடுங்கள்",
      resultTitle: "உங்கள் சாத்தியமான மாதாந்திர வருமானம்",
      disclaimer: "* சந்தை நிலைமைகள் மற்றும் தனிப்பட்ட செயல்திறனின் அடிப்படையில் வருமானம் மாறுபடலாம்",
      getStarted: "இப்போதே தொடங்குங்கள்"
    },
    te: {
      title: "మీ సంభావ్య నెలవారీ ఆదాయాన్ని లెక్కించండి",
      subtitle: "మీ అందుబాటులో ఉన్న సమయం మరియు ఎంచుకున్న పద్ధతి ఆధారంగా మీరు ఎంత సంపాదించగలరో చూడండి",
      timeLabel: "రోజుకు అందుబాటులో ఉన్న గంటలు",
      methodLabel: "ఇష్టపడే సంపాదన పద్ధతి",
      skillLabel: "మీ నైపుణ్య స్థాయి",
      calculateBtn: "ఆదాయాన్ని లెక్కించండి",
      resultTitle: "మీ సంభావ్య నెలవారీ ఆదాయం",
      disclaimer: "* మార్కెట్ పరిస్థితులు మరియు వ్యక్తిగత పనితీరు ఆధారంగా ఆదాయం మారవచ్చు",
      getStarted: "ఇప్పుడే ప్రారంభించండి"
    }
  };

  const timeOptions = [
    { value: '1-2', label: '1-2 hours' },
    { value: '3-4', label: '3-4 hours' },
    { value: '5-6', label: '5-6 hours' },
    { value: '7-8', label: '7-8 hours' },
    { value: '8+', label: '8+ hours' }
  ];

  const methodOptions = {
    en: [
      { value: 'blogging', label: 'Blogging & Content Writing' },
      { value: 'youtube', label: 'YouTube & Video Creation' },
      { value: 'affiliate', label: 'Affiliate Marketing' },
      { value: 'freelancing', label: 'Freelancing' },
      { value: 'ecommerce', label: 'E-commerce & Dropshipping' },
      { value: 'app-development', label: 'App Development' },
      { value: 'social-media', label: 'Social Media Management' },
      { value: 'online-tutoring', label: 'Online Tutoring' }
    ],
    hi: [
      { value: 'blogging', label: 'ब्लॉगिंग और कंटेंट राइटिंग' },
      { value: 'youtube', label: 'यूट्यूब और वीडियो बनाना' },
      { value: 'affiliate', label: 'एफिलिएट मार्केटिंग' },
      { value: 'freelancing', label: 'फ्रीलांसिंग' },
      { value: 'ecommerce', label: 'ई-कॉमर्स और ड्रॉपशिपिंग' },
      { value: 'app-development', label: 'ऐप डेवलपमेंट' },
      { value: 'social-media', label: 'सोशल मीडिया मैनेजमेंट' },
      { value: 'online-tutoring', label: 'ऑनलाइन ट्यूटरिंग' }
    ],
    ta: [
      { value: 'blogging', label: 'ப்ளாகிங் மற்றும் உள்ளடக்க எழுத்து' },
      { value: 'youtube', label: 'யூடியூப் மற்றும் வீடியோ உருவாக்கம்' },
      { value: 'affiliate', label: 'அஃபிலியேட் மார்க்கெட்டிங்' },
      { value: 'freelancing', label: 'ஃப்ரீலான்சிங்' },
      { value: 'ecommerce', label: 'ஈ-காமர்ஸ் மற்றும் ட்ராப்ஷிப்பிங்' },
      { value: 'app-development', label: 'ஆப் டெவலப்மென்ட்' },
      { value: 'social-media', label: 'சோஷியல் மீடியா மேனேஜ்மென்ட்' },
      { value: 'online-tutoring', label: 'ஆன்லைன் டியூட்டரிங்' }
    ],
    te: [
      { value: 'blogging', label: 'బ్లాగింగ్ మరియు కంటెంట్ రైటింగ్' },
      { value: 'youtube', label: 'యూట్యూబ్ మరియు వీడియో క్రియేషన్' },
      { value: 'affiliate', label: 'అఫిలియేట్ మార్కెటింగ్' },
      { value: 'freelancing', label: 'ఫ్రీలాన్సింగ్' },
      { value: 'ecommerce', label: 'ఈ-కామర్స్ మరియు డ్రాప్‌షిప్పింగ్' },
      { value: 'app-development', label: 'యాప్ డెవలప్‌మెంట్' },
      { value: 'social-media', label: 'సోషల్ మీడియా మేనేజ్‌మెంట్' },
      { value: 'online-tutoring', label: 'ఆన్‌లైన్ ట్యూటరింగ్' }
    ]
  };

  const skillOptions = {
    en: [
      { value: 'beginner', label: 'Beginner (Just starting)' },
      { value: 'intermediate', label: 'Intermediate (Some experience)' },
      { value: 'advanced', label: 'Advanced (Experienced)' },
      { value: 'expert', label: 'Expert (Professional level)' }
    ],
    hi: [
      { value: 'beginner', label: 'शुरुआती (अभी शुरुआत कर रहे हैं)' },
      { value: 'intermediate', label: 'मध्यम (कुछ अनुभव है)' },
      { value: 'advanced', label: 'उन्नत (अनुभवी)' },
      { value: 'expert', label: 'विशेषज्ञ (पेशेवर स्तर)' }
    ],
    ta: [
      { value: 'beginner', label: 'ஆரம்பநிலை (இப்போது தொடங்குகிறது)' },
      { value: 'intermediate', label: 'இடைநிலை (சில அனுபவம்)' },
      { value: 'advanced', label: 'மேம்பட்ட (அனுபவமுள்ள)' },
      { value: 'expert', label: 'நிபுணர் (தொழில்முறை நிலை)' }
    ],
    te: [
      { value: 'beginner', label: 'ప్రారంభ (ఇప్పుడే మొదలుపెట్టడం)' },
      { value: 'intermediate', label: 'మధ్యస్థ (కొంత అనుభవం)' },
      { value: 'advanced', label: 'అధునాతన (అనుభవజ్ఞుడు)' },
      { value: 'expert', label: 'నిపుణుడు (వృత్తిపరమైన స్థాయి)' }
    ]
  };

  const earningsData = {
    'blogging': { beginner: 15000, intermediate: 35000, advanced: 65000, expert: 120000 },
    'youtube': { beginner: 20000, intermediate: 45000, advanced: 85000, expert: 150000 },
    'affiliate': { beginner: 12000, intermediate: 30000, advanced: 70000, expert: 140000 },
    'freelancing': { beginner: 25000, intermediate: 50000, advanced: 90000, expert: 180000 },
    'ecommerce': { beginner: 30000, intermediate: 60000, advanced: 120000, expert: 250000 },
    'app-development': { beginner: 40000, intermediate: 80000, advanced: 150000, expert: 300000 },
    'social-media': { beginner: 18000, intermediate: 35000, advanced: 65000, expert: 120000 },
    'online-tutoring': { beginner: 20000, intermediate: 40000, advanced: 75000, expert: 140000 }
  };

  const timeMultipliers = {
    '1-2': 0.5,
    '3-4': 0.7,
    '5-6': 0.9,
    '7-8': 1.0,
    '8+': 1.2
  };

  const calculateEarnings = () => {
    if (!timeAvailable || !selectedMethod || !skillLevel) return;

    const baseEarning = earningsData[selectedMethod][skillLevel];
    const timeMultiplier = timeMultipliers[timeAvailable];
    const finalEarning = Math.round(baseEarning * timeMultiplier);

    setCalculatedEarnings(finalEarning);
    setShowResult(true);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const currentContent = content[currentLanguage];
  const currentMethods = methodOptions[currentLanguage];
  const currentSkills = skillOptions[currentLanguage];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins mb-4">
              {currentContent.title}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-cultural-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div>
                  <Input
                    label={currentContent.timeLabel}
                    type="text"
                    placeholder={currentLanguage === 'hi' ? 'जैसे: 4 घंटे' : 
                                currentLanguage === 'ta' ? 'உதாரணம்: 4 மணிநேரம்' :
                                currentLanguage === 'te' ? 'ఉదాహరణ: 4 గంటలు' : 'e.g., 4 hours'}
                    value={timeAvailable}
                    onChange={(e) => setTimeAvailable(e.target.value)}
                  />
                </div>

                <div>
                  <Select
                    label={currentContent.methodLabel}
                    placeholder={currentLanguage === 'hi' ? 'तरीका चुनें' : 
                               currentLanguage === 'ta' ? 'முறையைத் தேர்ந்தெடுக்கவும்' :
                               currentLanguage === 'te' ? 'పద్ధతిని ఎంచుకోండి' : 'Select method'}
                    options={currentMethods}
                    value={selectedMethod}
                    onChange={setSelectedMethod}
                  />
                </div>

                <div>
                  <Select
                    label={currentContent.skillLabel}
                    placeholder={currentLanguage === 'hi' ? 'स्तर चुनें' : 
                               currentLanguage === 'ta' ? 'நிலையைத் தேர்ந்தெடுக்கவும்' :
                               currentLanguage === 'te' ? 'స్థాయిని ఎంచుకోండి' : 'Select level'}
                    options={currentSkills}
                    value={skillLevel}
                    onChange={setSkillLevel}
                  />
                </div>

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={calculateEarnings}
                  disabled={!timeAvailable || !selectedMethod || !skillLevel}
                  className="bg-cultural-gradient hover:opacity-90"
                  iconName="Calculator"
                  iconPosition="left"
                >
                  {currentContent.calculateBtn}
                </Button>
              </div>

              {/* Results */}
              <div className="flex items-center justify-center">
                {showResult && calculatedEarnings ? (
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-cultural-gradient rounded-full flex items-center justify-center mx-auto">
                      <Icon name="TrendingUp" size={48} color="white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {currentContent.resultTitle}
                      </h3>
                      <div className="text-4xl font-bold text-success mb-4">
                        {formatCurrency(calculatedEarnings)}
                      </div>
                      <p className="text-sm text-text-secondary mb-6">
                        {currentContent.disclaimer}
                      </p>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                        iconName="Rocket"
                        iconPosition="left"
                      >
                        {currentContent.getStarted}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-text-secondary">
                    <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Calculator" size={48} color="var(--color-text-secondary)" />
                    </div>
                    <p className="text-lg">
                      {currentLanguage === 'hi' ? 'अपनी जानकारी भरें और अपनी संभावित आय देखें' : 
                       currentLanguage === 'ta' ? 'உங்கள் தகவலை நிரப்பி உங்கள் சாத்தியமான வருமானத்தைப் பாருங்கள்' :
                       currentLanguage === 'te' ? 'మీ సమాచారాన్ని పూరించి మీ సంభావ్య ఆదాయాన్ని చూడండి' : 'Fill in your details to see your potential earnings'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Popular Combinations */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={20} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {currentLanguage === 'hi' ? 'पार्ट-टाइम' : 
                     currentLanguage === 'ta' ? 'பகுதி நேரம்' :
                     currentLanguage === 'te' ? 'పార్ట్-టైమ్' : 'Part-Time'}
                  </h4>
                  <p className="text-sm text-text-secondary">2-4 hours/day</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-success">₹15,000 - ₹45,000</p>
              <p className="text-sm text-text-secondary mt-2">
                {currentLanguage === 'hi' ? 'छात्रों और नौकरी करने वालों के लिए आदर्श' : 
                 currentLanguage === 'ta' ? 'மாணவர்கள் மற்றும் வேலை செய்பவர்களுக்கு ஏற்றது' :
                 currentLanguage === 'te' ? 'విద్యార్థులు మరియు ఉద్యోగులకు అనువైనది' : 'Perfect for students and working professionals'}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Briefcase" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {currentLanguage === 'hi' ? 'फुल-टाइम' : 
                     currentLanguage === 'ta' ? 'முழு நேரம்' :
                     currentLanguage === 'te' ? 'ఫుల్-టైమ్' : 'Full-Time'}
                  </h4>
                  <p className="text-sm text-text-secondary">6-8 hours/day</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">₹50,000 - ₹1,20,000</p>
              <p className="text-sm text-text-secondary mt-2">
                {currentLanguage === 'hi' ? 'गंभीर उद्यमियों के लिए' : 
                 currentLanguage === 'ta' ? 'தீவிர தொழில்முனைவோருக்கு' :
                 currentLanguage === 'te' ? 'తీవ్రమైన వ్యవస్థాపకులకు' : 'For serious entrepreneurs'}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={20} color="var(--color-warning)" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {currentLanguage === 'hi' ? 'एक्सपर्ट' : 
                     currentLanguage === 'ta' ? 'நிபுணர்' :
                     currentLanguage === 'te' ? 'నిపుణుడు' : 'Expert'}
                  </h4>
                  <p className="text-sm text-text-secondary">8+ hours/day</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-warning">₹1,00,000 - ₹3,00,000</p>
              <p className="text-sm text-text-secondary mt-2">
                {currentLanguage === 'hi' ? 'अनुभवी पेशेवरों के लिए' : 
                 currentLanguage === 'ta' ? 'அனுபவமுள்ள நிபுணர்களுக்கு' :
                 currentLanguage === 'te' ? 'అనుభవజ్ఞులైన నిపుణులకు' : 'For experienced professionals'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;