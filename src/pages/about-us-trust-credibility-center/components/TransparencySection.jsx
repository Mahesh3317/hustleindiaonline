import React from 'react';
import Icon from '../../../components/AppIcon';

const TransparencySection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Complete Transparency",
      subtitle: "Open books, honest numbers, and verified results - because trust is earned through transparency",
      stats: [
        {
          icon: "Users",
          number: "2,50,000+",
          label: "Monthly Active Users",
          description: "Verified through Google Analytics"
        },
        {
          icon: "Eye",
          number: "50L+",
          label: "Monthly Page Views",
          description: "Consistent growth over 5 years"
        },
        {
          icon: "DollarSign",
          number: "₹8.5L",
          label: "Monthly Revenue",
          description: "Last 3 months average"
        },
        {
          icon: "TrendingUp",
          number: "45%",
          label: "YoY Growth",
          description: "Sustainable business model"
        }
      ],
      revenueBreakdown: [
        { source: "Google AdSense", percentage: 35, amount: "₹2.98L" },
        { source: "Affiliate Marketing", percentage: 40, amount: "₹3.40L" },
        { source: "Sponsored Content", percentage: 15, amount: "₹1.28L" },
        { source: "Digital Products", percentage: 10, amount: "₹85K" }
      ],
      methodology: [
        {
          title: "Content Creation Process",
          steps: [
            "Personal testing of every method/app for minimum 30 days",
            "Documentation of actual earnings with screenshots",
            "Cross-verification with community members",
            "Regular updates based on platform changes"
          ]
        },
        {
          title: "Review Standards",
          steps: [
            "Hands-on usage for at least 2 weeks",
            "Testing across different devices and scenarios",
            "Comparison with similar apps/platforms",
            "Community feedback integration"
          ]
        },
        {
          title: "Earnings Verification",
          steps: [
            "Monthly income reports with proof",
            "Bank statement screenshots (sensitive info redacted)",
            "Platform-wise breakdown with analytics",
            "Year-over-year comparison data"
          ]
        }
      ]
    },
    hi: {
      title: "पूर्ण पारदर्शिता",
      subtitle: "खुली किताबें, ईमानदार संख्याएं, और सत्यापित परिणाम - क्योंकि विश्वास पारदर्शिता के माध्यम से अर्जित किया जाता है",
      stats: [
        {
          icon: "Users",
          number: "2,50,000+",
          label: "मासिक सक्रिय उपयोगकर्ता",
          description: "गूगल एनालिटिक्स के माध्यम से सत्यापित"
        },
        {
          icon: "Eye",
          number: "50L+",
          label: "मासिक पेज व्यूज",
          description: "5 वर्षों में निरंतर वृद्धि"
        },
        {
          icon: "DollarSign",
          number: "₹8.5L",
          label: "मासिक आय",
          description: "पिछले 3 महीनों का औसत"
        },
        {
          icon: "TrendingUp",
          number: "45%",
          label: "वार्षिक वृद्धि",
          description: "टिकाऊ व्यापार मॉडल"
        }
      ],
      revenueBreakdown: [
        { source: "गूगल एडसेंस", percentage: 35, amount: "₹2.98L" },
        { source: "एफिलिएट मार्केटिंग", percentage: 40, amount: "₹3.40L" },
        { source: "स्पॉन्सर्ड कंटेंट", percentage: 15, amount: "₹1.28L" },
        { source: "डिजिटल उत्पाद", percentage: 10, amount: "₹85K" }
      ],
      methodology: [
        {
          title: "कंटेंट निर्माण प्रक्रिया",
          steps: [
            "हर तरीके/ऐप का व्यक्तिगत परीक्षण कम से कम 30 दिनों के लिए",
            "स्क्रीनशॉट के साथ वास्तविक कमाई का दस्तावेजीकरण",
            "समुदाय के सदस्यों के साथ क्रॉस-वेरिफिकेशन",
            "प्लेटफॉर्म परिवर्तनों के आधार पर नियमित अपडेट"
          ]
        },
        {
          title: "समीक्षा मानक",
          steps: [
            "कम से कम 2 सप्ताह के लिए व्यावहारिक उपयोग",
            "विभिन्न डिवाइस और परिस्थितियों में परीक्षण",
            "समान ऐप्स/प्लेटफॉर्म के साथ तुलना",
            "समुदाय की प्रतिक्रिया का एकीकरण"
          ]
        },
        {
          title: "कमाई सत्यापन",
          steps: [
            "प्रमाण के साथ मासिक आय रिपोर्ट",
            "बैंक स्टेटमेंट स्क्रीनशॉट (संवेदनशील जानकारी छुपाई गई)",
            "एनालिटिक्स के साथ प्लेटफॉर्म-वार विवरण",
            "वर्ष-दर-वर्ष तुलना डेटा"
          ]
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentContent.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-cultural-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} color="white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-text-primary mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            {currentLanguage === 'hi' ? 'आय विवरण (मासिक)' : 'Revenue Breakdown (Monthly)'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Revenue Chart */}
            <div className="space-y-4">
              {currentContent.revenueBreakdown.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-text-primary">{item.source}</span>
                    <span className="text-primary font-bold">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-cultural-gradient h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-text-secondary mt-1">
                    {item.percentage}% {currentLanguage === 'hi' ? 'कुल आय का' : 'of total revenue'}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Shield" size={20} color="var(--color-success)" />
                  <h4 className="font-bold text-text-primary">
                    {currentLanguage === 'hi' ? 'सत्यापन प्रमाण' : 'Verification Proof'}
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span>{currentLanguage === 'hi' ? 'बैंक स्टेटमेंट उपलब्ध' : 'Bank statements available'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span>{currentLanguage === 'hi' ? 'प्लेटफॉर्म स्क्रीनशॉट' : 'Platform screenshots'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span>{currentLanguage === 'hi' ? 'तृतीय-पक्ष सत्यापन' : 'Third-party verification'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Calendar" size={20} color="var(--color-primary)" />
                  <h4 className="font-bold text-text-primary">
                    {currentLanguage === 'hi' ? 'अपडेट आवृत्ति' : 'Update Frequency'}
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} color="var(--color-primary)" />
                    <span>{currentLanguage === 'hi' ? 'मासिक आय रिपोर्ट' : 'Monthly income reports'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} color="var(--color-primary)" />
                    <span>{currentLanguage === 'hi' ? 'साप्ताहिक ट्रैफिक अपडेट' : 'Weekly traffic updates'}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} color="var(--color-primary)" />
                    <span>{currentLanguage === 'hi' ? 'दैनिक कंटेंट ऑडिट' : 'Daily content audits'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="grid lg:grid-cols-3 gap-8">
          {currentContent.methodology.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-cultural-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                {method.title}
              </h3>
              <div className="space-y-4">
                {method.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;