import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArticleContent = ({ article, currentLanguage }) => {
  const [activeSection, setActiveSection] = useState('');
  const [showTOC, setShowTOC] = useState(false);

  const tableOfContents = [
    { id: 'introduction', title: currentLanguage === 'hi' ? 'परिचय' : 'Introduction' },
    { id: 'getting-started', title: currentLanguage === 'hi' ? 'शुरुआत कैसे करें' : 'Getting Started' },
    { id: 'step-by-step', title: currentLanguage === 'hi' ? 'चरणबद्ध गाइड' : 'Step-by-Step Guide' },
    { id: 'tips-tricks', title: currentLanguage === 'hi' ? 'टिप्स और ट्रिक्स' : 'Tips & Tricks' },
    { id: 'common-mistakes', title: currentLanguage === 'hi' ? 'सामान्य गलतियां' : 'Common Mistakes' },
    { id: 'conclusion', title: currentLanguage === 'hi' ? 'निष्कर्ष' : 'Conclusion' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowTOC(false);
    }
  };

  const handleTweetQuote = (quote) => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - HustleIndiaOnline')}&url=${encodeURIComponent(window.location.href)}`;
    window.open(tweetUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="flex-1">
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-cultural">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Mobile TOC Toggle */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setShowTOC(!showTOC)}
              className="w-full justify-between"
            >
              <span>{currentLanguage === 'hi' ? 'विषय सूची' : 'Table of Contents'}</span>
              <Icon name={showTOC ? "ChevronUp" : "ChevronDown"} size={16} />
            </Button>
            
            {showTOC && (
              <div className="mt-4 bg-muted rounded-lg p-4">
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === item.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-text-secondary hover:text-primary hover:bg-primary/10'
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Ad Banner */}
          <div className="mb-8 p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Icon name="Zap" size={20} />
              <span className="text-sm font-medium">Advertisement</span>
            </div>
            <div className="mt-2 text-xs text-gray-400">728x90 Banner Ad</div>
          </div>

          {/* Introduction Section */}
          <section id="introduction" className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'परिचय' : 'Introduction'}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-4">
                {currentLanguage === 'hi' 
                  ? `आज के डिजिटल युग में, ऑनलाइन पैसे कमाना एक वास्तविकता बन गया है। इस लेख में हम आपको बताएंगे कि कैसे आप घर बैठे अपने मोबाइल फोन से महीने के ₹25,000 तक कमा सकते हैं। यह गाइड विशेष रूप से भारतीय उपयोगकर्ताओं के लिए तैयार की गई है।`
                  : `In today's digital age, making money online has become a reality for millions. This comprehensive guide will show you exactly how to earn up to ₹25,000 per month from your mobile phone, right from the comfort of your home. This guide is specifically designed for Indian users.`
                }
              </p>
              
              {/* Key Takeaway Box */}
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="Lightbulb" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      {currentLanguage === 'hi' ? 'मुख्य बात' : 'Key Takeaway'}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {currentLanguage === 'hi' ?'इस गाइड को फॉलो करके आप पहले महीने में ही ₹5,000-₹10,000 कमा सकते हैं।' :'Following this guide, you can earn ₹5,000-₹10,000 in your first month itself.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'शुरुआत कैसे करें' : 'Getting Started'}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-4">
                {currentLanguage === 'hi' ?'ऑनलाइन पैसे कमाने के लिए आपको कुछ बुनियादी चीजों की जरूरत होगी:' :'To start earning money online, you will need some basic requirements:'
                }
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: 'Smartphone',
                    title: currentLanguage === 'hi' ? 'स्मार्टफोन' : 'Smartphone',
                    desc: currentLanguage === 'hi' ? 'कोई भी एंड्रॉइड फोन' : 'Any Android phone'
                  },
                  {
                    icon: 'Wifi',
                    title: currentLanguage === 'hi' ? 'इंटरनेट कनेक्शन' : 'Internet Connection',
                    desc: currentLanguage === 'hi' ? '2G/3G/4G/WiFi' : '2G/3G/4G/WiFi'
                  },
                  {
                    icon: 'CreditCard',
                    title: currentLanguage === 'hi' ? 'बैंक अकाउंट' : 'Bank Account',
                    desc: currentLanguage === 'hi' ? 'पेमेंट के लिए' : 'For payments'
                  },
                  {
                    icon: 'Clock',
                    title: currentLanguage === 'hi' ? 'समय' : 'Time',
                    desc: currentLanguage === 'hi' ? 'दिन में 2-3 घंटे' : '2-3 hours daily'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Native Ad */}
          <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-text-secondary uppercase tracking-wide">Sponsored</span>
              <Icon name="ExternalLink" size={14} className="text-text-secondary" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">
              {currentLanguage === 'hi' ? 'तुरंत ₹500 बोनस पाएं' : 'Get ₹500 Instant Bonus'}
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              {currentLanguage === 'hi' ?'नए यूजर्स के लिए विशेष ऑफर - साइन अप करें और तुरंत ₹500 का बोनस पाएं।' :'Special offer for new users - Sign up and get ₹500 bonus instantly.'
              }
            </p>
            <Button variant="default" size="sm">
              {currentLanguage === 'hi' ? 'अभी क्लेम करें' : 'Claim Now'}
            </Button>
          </div>

          {/* Step by Step Section */}
          <section id="step-by-step" className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'चरणबद्ध गाइड' : 'Step-by-Step Guide'}
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: currentLanguage === 'hi' ? 'सही ऐप चुनें' : 'Choose the Right Apps',
                  content: currentLanguage === 'hi' ?'पहले आपको विश्वसनीय ऐप्स चुनने होंगे। हमारी सिफारिश: Paytm, Google Pay, PhonePe, और Swagbucks जैसे ऐप्स का उपयोग करें।' :'First, you need to choose reliable apps. Our recommendation: Use apps like Paytm, Google Pay, PhonePe, and Swagbucks.'
                },
                {
                  step: 2,
                  title: currentLanguage === 'hi' ? 'अकाउंट सेटअप करें' : 'Set Up Your Account',
                  content: currentLanguage === 'hi' ?'अपनी सही जानकारी के साथ अकाउंट बनाएं। KYC पूरी करें और बैंक अकाउंट लिंक करें।' :'Create accounts with correct information. Complete KYC and link your bank account.'
                },
                {
                  step: 3,
                  title: currentLanguage === 'hi' ? 'दैनिक टास्क पूरे करें' : 'Complete Daily Tasks',
                  content: currentLanguage === 'hi' ?'रोज़ाना के टास्क जैसे सर्वे, वीडियो देखना, और रेफरल करना। इससे आप दिन में ₹200-₹500 कमा सकते हैं।' :'Daily tasks like surveys, watching videos, and referrals. You can earn ₹200-₹500 per day.'
                }
              ].map((item) => (
                <div key={item.step} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tweet Quote */}
          <div className="mb-8 p-6 bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-400 rounded-r-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <blockquote className="text-lg font-medium text-text-primary italic mb-3">
                  {currentLanguage === 'hi' ?'"सफलता का राज है निरंतरता। रोज़ाना 2-3 घंटे काम करके आप महीने में ₹25,000 कमा सकते हैं।"' : '"The secret to success is consistency. Working 2-3 hours daily can earn you ₹25,000 per month."'
                  }
                </blockquote>
                <cite className="text-sm text-text-secondary">- HustleIndia Team</cite>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleTweetQuote(currentLanguage === 'hi' ?'सफलता का राज है निरंतरता। रोज़ाना 2-3 घंटे काम करके आप महीने में ₹25,000 कमा सकते हैं।' :'The secret to success is consistency. Working 2-3 hours daily can earn you ₹25,000 per month.'
                )}
                className="text-sky-600 hover:bg-sky-100"
              >
                <Icon name="Twitter" size={16} />
              </Button>
            </div>
          </div>

          {/* Tips & Tricks Section */}
          <section id="tips-tricks" className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'टिप्स और ट्रिक्स' : 'Tips & Tricks'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: 'Target',
                  title: currentLanguage === 'hi' ? 'लक्ष्य निर्धारित करें' : 'Set Goals',
                  tip: currentLanguage === 'hi' ? 'दैनिक ₹500 का लक्ष्य रखें' : 'Set a daily goal of ₹500'
                },
                {
                  icon: 'Users',
                  title: currentLanguage === 'hi' ? 'रेफरल का उपयोग करें' : 'Use Referrals',
                  tip: currentLanguage === 'hi' ? 'दोस्तों को रेफर करके अधिक कमाएं' : 'Refer friends to earn more'
                },
                {
                  icon: 'Calendar',
                  title: currentLanguage === 'hi' ? 'समय का प्रबंधन' : 'Time Management',
                  tip: currentLanguage === 'hi' ? 'सुबह और शाम के समय काम करें' : 'Work during morning and evening'
                },
                {
                  icon: 'Shield',
                  title: currentLanguage === 'hi' ? 'सुरक्षा बनाए रखें' : 'Stay Safe',
                  tip: currentLanguage === 'hi' ? 'केवल विश्वसनीय ऐप्स का उपयोग करें' : 'Use only trusted apps'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-success/5 border border-success/20 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={16} className="text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section id="common-mistakes" className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'सामान्य गलतियां' : 'Common Mistakes'}
            </h2>
            
            <div className="space-y-4">
              {[
                currentLanguage === 'hi' ? 'जल्दबाजी में गलत ऐप्स चुनना' : 'Choosing wrong apps in hurry',
                currentLanguage === 'hi' ? 'KYC पूरी नहीं करना' : 'Not completing KYC',
                currentLanguage === 'hi' ? 'नियमित काम नहीं करना' : 'Not working regularly',
                currentLanguage === 'hi' ? 'फर्जी ऐप्स का उपयोग करना' : 'Using fake apps'
              ].map((mistake, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-warning/5 border border-warning/20 rounded-lg">
                  <Icon name="AlertTriangle" size={20} className="text-warning mt-1" />
                  <div>
                    <p className="text-text-primary font-medium">{mistake}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'निष्कर्ष' : 'Conclusion'}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed mb-4">
                {currentLanguage === 'hi' ?'ऑनलाइन पैसे कमाना आज के समय में एक वास्तविकता है। इस गाइड को फॉलो करके आप भी महीने में ₹25,000 तक कमा सकते हैं। याद रखें, सफलता के लिए धैर्य और निरंतरता जरूरी है।' :'Making money online is a reality in today\'s time. By following this guide, you can also earn up to ₹25,000 per month. Remember, patience and consistency are essential for success.'
                }
              </p>
              
              <div className="bg-cultural-gradient p-6 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-3">
                  {currentLanguage === 'hi' ? 'आज ही शुरुआत करें!' : 'Start Today!'}
                </h3>
                <p className="mb-4">
                  {currentLanguage === 'hi' ?'अपनी ऑनलाइन कमाई की यात्रा आज से ही शुरू करें। हमारे साथ जुड़ें और सफल बनें।' :'Start your online earning journey today. Join us and become successful.'
                  }
                </p>
                <Button variant="secondary" size="lg">
                  <Icon name="Rocket" size={20} />
                  <span className="ml-2">
                    {currentLanguage === 'hi' ? 'अभी शुरू करें' : 'Start Now'}
                  </span>
                </Button>
              </div>
            </div>
          </section>
        </article>

        {/* Desktop TOC Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white border border-border rounded-lg p-4 shadow-cultural">
              <h3 className="font-semibold text-text-primary mb-4">
                {currentLanguage === 'hi' ? 'विषय सूची' : 'Table of Contents'}
              </h3>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left w-full px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-text-secondary hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleContent;