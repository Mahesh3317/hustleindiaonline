import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = ({ currentLanguage }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liveCounter, setLiveCounter] = useState(12847);

  const content = {
    en: {
      title: "Join 50,000+ Indians Earning Online Daily",
      subtitle: "Get exclusive money-making strategies, trending opportunities, and success stories delivered to your inbox",
      emailPlaceholder: "Enter your email address",
      ctaButton: "Get Free Guide",
      incentive: "Get \'50 Ways to Earn Money Online in Hindi\' eBook FREE!",
      successMessage: "🎉 Welcome to the HustleIndia family! Check your email for the free eBook.",
      liveCounterText: "People earning online right now:",
      trendingHashtags: "#OnlineEarning #DigitalIndia #WorkFromHome #MakeMoneyOnline #IndianEntrepreneurs",
      benefits: [
        "Weekly earning opportunities",
        "Exclusive app reviews & deals",
        "Success stories & case studies",
        "Live webinars & Q&A sessions"
      ]
    },
    hi: {
      title: "50,000+ भारतीयों के साथ जुड़ें जो रोज़ाना ऑनलाइन कमा रहे हैं",
      subtitle: "अपने इनबॉक्स में विशेष पैसे कमाने की रणनीतियां, ट्रेंडिंग अवसर और सफलता की कहानियां पाएं",
      emailPlaceholder: "अपना ईमेल पता दर्ज करें",
      ctaButton: "मुफ्त गाइड पाएं",
      incentive: "'हिंदी में ऑनलाइन पैसे कमाने के 50 तरीके\' ईबुक मुफ्त पाएं!",
      successMessage: "🎉 हसल इंडिया परिवार में आपका स्वागत है! मुफ्त ईबुक के लिए अपना ईमेल चेक करें।",
      liveCounterText: "अभी ऑनलाइन पैसे कमाने वाले लोग:",
      trendingHashtags: "#ऑनलाइनकमाई #डिजिटलइंडिया #घरसेकाम #ऑनलाइनपैसे #भारतीयउद्यमी",
      benefits: [
        "साप्ताहिक कमाई के अवसर",
        "विशेष ऐप रिव्यू और डील्स",
        "सफलता की कहानियां और केस स्टडी",
        "लाइव वेबिनार और Q&A सेशन"
      ]
    },
    ta: {
      title: "தினமும் ஆன்லைனில் சம்பாதிக்கும் 50,000+ இந்தியர்களுடன் சேருங்கள்",
      subtitle: "உங்கள் இன்பாக்ஸில் பிரத்யேக பணம் சம்பாதிக்கும் உத்திகள், டிரெண்டிங் வாய்ப்புகள் மற்றும் வெற்றிக் கதைகளைப் பெறுங்கள்",
      emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்",
      ctaButton: "இலவச வழிகாட்டியைப் பெறுங்கள்",
      incentive: "'தமிழில் ஆன்லைனில் பணம் சம்பாதிக்க 50 வழிகள்\' மின்னூல் இலவசம்!",
      successMessage: "🎉 ஹஸ்டில் இந்தியா குடும்பத்திற்கு வரவேற்கிறோம்! இலவச மின்னூலுக்கு உங்கள் மின்னஞ்சலைச் சரிபார்க்கவும்.",
      liveCounterText: "இப்போது ஆன்லைனில் சம்பாதிக்கும் மக்கள்:",
      trendingHashtags: "#ஆன்லைன்சம்பாதிப்பு #டிஜிட்டல்இந்தியா #வீட்டிலிருந்துவேலை #ஆன்லைன்பணம் #இந்தியதொழில்முனைவோர்",
      benefits: [
        "வாராந்திர வருமான வாய்ப்புகள்",
        "பிரத்யேக ஆப் மதிப்புரைகள் மற்றும் ஒப்பந்தங்கள்",
        "வெற்றிக் கதைகள் மற்றும் வழக்கு ஆய்வுகள்",
        "நேரடி வெபினார்கள் மற்றும் Q&A அமர்வுகள்"
      ]
    },
    te: {
      title: "ప్రతిరోజూ ఆన్‌లైన్‌లో సంపాదిస్తున్న 50,000+ భారతీయులతో చేరండి",
      subtitle: "మీ ఇన్‌బాక్స్‌లో ప్రత్యేక డబ్బు సంపాదన వ్యూహాలు, ట్రెండింగ్ అవకాశాలు మరియు విజయ కథలను పొందండి",
      emailPlaceholder: "మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి",
      ctaButton: "ఉచిత గైడ్ పొందండి",
      incentive: "'తెలుగులో ఆన్‌లైన్‌లో డబ్బు సంపాదించడానికి 50 మార్గాలు\' ఇబుక్ ఉచితం!",
      successMessage: "🎉 హస్టిల్ ఇండియా కుటుంబానికి స్వాగతం! ఉచిత ఇబుక్ కోసం మీ ఇమెయిల్‌ను తనిఖీ చేయండి.",
      liveCounterText: "ఇప్పుడు ఆన్‌లైన్‌లో సంపాదిస్తున్న వ్యక్తులు:",
      trendingHashtags: "#ఆన్‌లైన్సంపాదన #డిజిటల్ఇండియా #ఇంటినుండివేల #ఆన్‌లైన్డబ్బు #భారతీయవ్యవస్థాపకులు",
      benefits: [
        "వారపు సంపాదన అవకాశాలు",
        "ప్రత్యేక యాప్ రివ్యూలు మరియు డీల్స్",
        "విజయ కథలు మరియు కేస్ స్టడీలు",
        "లైవ్ వెబినార్లు మరియు Q&A సెషన్లు"
      ]
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Simulate counter increase
      setLiveCounter(prev => prev + 1);
    }
  };

  // Simulate live counter updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = content[currentLanguage];

  return (
    <section className="py-16 bg-cultural-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
              {currentContent.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>

            {/* Newsletter Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder={currentContent.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/70"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-semibold"
                    iconName="Gift"
                    iconPosition="left"
                  >
                    {currentContent.ctaButton}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-white/10 rounded-lg p-6 mb-8 max-w-md mx-auto">
                <p className="text-lg">{currentContent.successMessage}</p>
              </div>
            )}

            {/* Incentive */}
            <div className="bg-white/10 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="BookOpen" size={24} color="white" />
                <p className="font-semibold">{currentContent.incentive}</p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon 
                    name={index === 0 ? "Calendar" : index === 1 ? "Smartphone" : index === 2 ? "Users" : "Video"} 
                    size={24} 
                    color="white" 
                  />
                </div>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Live Counter */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{currentContent.liveCounterText}</span>
              </div>
              <div className="text-2xl font-bold font-poppins">
                {liveCounter.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Trending Hashtags */}
          <div className="bg-white/5 rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Hash" size={20} color="white" />
              <span className="font-semibold">
                {currentLanguage === 'hi' ? 'ट्रेंडिंग हैशटैग' : 
                 currentLanguage === 'ta' ? 'டிரெண்டிங் ஹேஷ்டேக்ஸ்' :
                 currentLanguage === 'te' ? 'ట్రెండింగ్ హ్యాష్‌ట్యాగ్‌లు' : 'Trending Hashtags'}
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {currentContent.trendingHashtags}
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins mb-2">50,000+</div>
              <div className="text-sm text-white/80">
                {currentLanguage === 'hi' ? 'सक्रिय सदस्य' : 
                 currentLanguage === 'ta' ? 'செயலில் உள்ள உறுப்பினர்கள்' :
                 currentLanguage === 'te' ? 'క్రియాశీల సభ్యులు' : 'Active Members'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins mb-2">₹15Cr+</div>
              <div className="text-sm text-white/80">
                {currentLanguage === 'hi' ? 'कुल कमाई' : 
                 currentLanguage === 'ta' ? 'மொத்த வருமானம்' :
                 currentLanguage === 'te' ? 'మొత్తం ఆదాయం' : 'Total Earnings'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins mb-2">4.8/5</div>
              <div className="text-sm text-white/80">
                {currentLanguage === 'hi' ? 'सफलता दर' : 
                 currentLanguage === 'ta' ? 'வெற்றி விகிதம்' :
                 currentLanguage === 'te' ? 'విజయ రేటు' : 'Success Rate'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins mb-2">24/7</div>
              <div className="text-sm text-white/80">
                {currentLanguage === 'hi' ? 'सहायता' : 
                 currentLanguage === 'ta' ? 'ஆதரவு' :
                 currentLanguage === 'te' ? 'మద్దతు' : 'Support'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;