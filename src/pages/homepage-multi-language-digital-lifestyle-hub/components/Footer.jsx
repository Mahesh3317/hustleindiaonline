import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = ({ currentLanguage }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      tagline: "Empowering Digital India, One Success Story at a Time",
      quickLinks: "Quick Links",
      categories: "Categories",
      support: "Support & Legal",
      connect: "Connect With Us",
      newsletter: "Stay Updated",
      newsletterText: "Get the latest earning opportunities delivered to your inbox",
      copyright: `© ${currentYear} HustleIndia. All rights reserved.`,
      disclaimer: "Earnings disclaimer: Results may vary. Past performance does not guarantee future results.",
      links: {
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        sitemap: "Sitemap",
        careers: "Careers"
      },
      categoryLinks: {
        moneyMaking: "Money Making",
        techReviews: "Tech Reviews",
        astrology: "Astrology",
        blog: "Blog",
        courses: "Courses",
        tools: "Tools"
      }
    },
    hi: {
      tagline: "डिजिटल इंडिया को सशक्त बनाना, एक सफलता की कहानी के साथ",
      quickLinks: "त्वरित लिंक",
      categories: "श्रेणियां",
      support: "सहायता और कानूनी",
      connect: "हमसे जुड़ें",
      newsletter: "अपडेट रहें",
      newsletterText: "नवीनतम कमाई के अवसर अपने इनबॉक्स में पाएं",
      copyright: `© ${currentYear} हसल इंडिया। सभी अधिकार सुरक्षित।`,
      disclaimer: "कमाई अस्वीकरण: परिणाम भिन्न हो सकते हैं। पिछला प्रदर्शन भविष्य के परिणामों की गारंटी नहीं देता।",
      links: {
        about: "हमारे बारे में",
        contact: "संपर्क",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        sitemap: "साइटमैप",
        careers: "करियर"
      },
      categoryLinks: {
        moneyMaking: "पैसे कमाना",
        techReviews: "टेक रिव्यू",
        astrology: "ज्योतिष",
        blog: "ब्लॉग",
        courses: "कोर्स",
        tools: "टूल्स"
      }
    },
    ta: {
      tagline: "டிஜிட்டல் இந்தியாவை வலுப்படுத்துதல், ஒரு வெற்றிக் கதையுடன்",
      quickLinks: "விரைவு இணைப்புகள்",
      categories: "வகைகள்",
      support: "ஆதரவு மற்றும் சட்டம்",
      connect: "எங்களுடன் இணைக்கவும்",
      newsletter: "புதுப்பித்த நிலையில் இருங்கள்",
      newsletterText: "சமீபத்திய வருமான வாய்ப்புகளை உங்கள் இன்பாக்ஸில் பெறுங்கள்",
      copyright: `© ${currentYear} ஹஸ்டில் இந்தியா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.`,
      disclaimer: "வருமான மறுப்பு: முடிவுகள் மாறுபடலாம். கடந்தகால செயல்திறன் எதிர்கால முடிவுகளுக்கு உத்தரவாதம் அளிக்காது.",
      links: {
        about: "எங்களைப் பற்றி",
        contact: "தொடர்பு",
        privacy: "தனியுரிமைக் கொள்கை",
        terms: "சேவை விதிமுறைகள்",
        sitemap: "தளவரைபடம்",
        careers: "வேலைவாய்ப்புகள்"
      },
      categoryLinks: {
        moneyMaking: "பணம் சம்பாதித்தல்",
        techReviews: "டெக் மதிப்புரைகள்",
        astrology: "ஜோதிடம்",
        blog: "வலைப்பதிவு",
        courses: "பாடநெறிகள்",
        tools: "கருவிகள்"
      }
    },
    te: {
      tagline: "డిజిటల్ ఇండియాను శక్తివంతం చేయడం, ఒక విజయ కథతో",
      quickLinks: "త్వరిత లింక్‌లు",
      categories: "వర్గాలు",
      support: "మద్దతు మరియు చట్టపరమైన",
      connect: "మాతో కనెక్ట్ అవ్వండి",
      newsletter: "అప్‌డేట్‌గా ఉండండి",
      newsletterText: "తాజా సంపాదన అవకాశాలను మీ ఇన్‌బాక్స్‌లో పొందండి",
      copyright: `© ${currentYear} హస్టిల్ ఇండియా. అన్ని హక్కులు రక్షించబడ్డాయి.`,
      disclaimer: "సంపాదన నిరాకరణ: ఫలితాలు మారవచ్చు. గత పనితీరు భవిష్యత్తు ఫలితాలకు హామీ ఇవ్వదు.",
      links: {
        about: "మా గురించి",
        contact: "సంప్రదింపులు",
        privacy: "గోప్యతా విధానం",
        terms: "సేవా నిబంధనలు",
        sitemap: "సైట్‌మ్యాప్",
        careers: "కెరీర్‌లు"
      },
      categoryLinks: {
        moneyMaking: "డబ్బు సంపాదన",
        techReviews: "టెక్ రివ్యూలు",
        astrology: "జ్యోతిష్యం",
        blog: "బ్లాగ్",
        courses: "కోర్సులు",
        tools: "టూల్స్"
      }
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Telegram', icon: 'Send', url: '#' }
  ];

  const currentContent = content[currentLanguage];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-cultural-gradient rounded-lg flex items-center justify-center shadow-cultural">
                  <Icon name="TrendingUp" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-prosperity-green rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={12} color="white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins bg-cultural-gradient bg-clip-text text-transparent">
                  HustleIndia
                </h3>
                <p className="text-xs text-white/70 font-medium -mt-1">
                  {currentLanguage === 'hi' ? 'डिजिटल सफलता' : 
                   currentLanguage === 'ta' ? 'டிஜிட்டல் வெற்றி' :
                   currentLanguage === 'te' ? 'డిజిటల్ విజయం' : 'Digital Success'}
                </p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {currentContent.tagline}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">{currentContent.connect}</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 hover:bg-cultural-gradient rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} color="white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">{currentContent.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us-trust-credibility-center" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.links.about}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.links.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.links.careers}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.links.sitemap}
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-6">{currentContent.categories}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/category-hub-money-making-ecosystem" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.categoryLinks.moneyMaking}
                </Link>
              </li>
              <li>
                <Link to="/tech-reviews-product-comparison-hub" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.categoryLinks.techReviews}
                </Link>
              </li>
              <li>
                <Link to="/astrology-numerology-cultural-wisdom-hub" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.categoryLinks.astrology}
                </Link>
              </li>
              <li>
                <Link to="/individual-blog-post-seo-optimized-article" className="text-white/80 hover:text-white transition-colors">
                  {currentContent.categoryLinks.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="font-semibold mb-6">{currentContent.newsletter}</h4>
            <p className="text-white/80 mb-4 text-sm">
              {currentContent.newsletterText}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 text-sm focus:outline-none focus:border-primary"
              />
              <Button
                variant="default"
                size="sm"
                className="bg-cultural-gradient hover:opacity-90"
                iconName="Send"
                iconPosition="right"
              >
                {currentLanguage === 'hi' ? 'भेजें' : 
                 currentLanguage === 'ta' ? 'அனுப்பு' :
                 currentLanguage === 'te' ? 'పంపు' : 'Send'}
              </Button>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="font-medium mb-3 text-sm">{currentContent.support}</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {currentContent.links.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {currentContent.links.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm mb-2">
                {currentContent.copyright}
              </p>
              <p className="text-white/60 text-xs">
                {currentContent.disclaimer}
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="text-xs text-white/80">
                  {currentLanguage === 'hi' ? 'सुरक्षित' : 
                   currentLanguage === 'ta' ? 'பாதுகாப்பான' :
                   currentLanguage === 'te' ? 'సురక్షితమైన' : 'Secure'}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
                <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                <span className="text-xs text-white/80">
                  {currentLanguage === 'hi' ? 'सत्यापित' : 
                   currentLanguage === 'ta' ? 'சரிபார்க்கப்பட்டது' :
                   currentLanguage === 'te' ? 'ధృవీకరించబడింది' : 'Verified'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;