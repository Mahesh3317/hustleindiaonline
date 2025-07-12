import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Have questions? Need guidance? We\'re here to help you succeed",
      promise: {
        title: "Our Promise to You",
        points: [
          "Honest reviews and recommendations only",
          "Complete respect for Indian cultural values",
          "Personal support for community members",
          "Transparent earnings and methodology",
          "Continuous learning and improvement",
          "Building long-term trust relationships"
        ]
      },
      contact: {
        email: "support@hustleindia.online",
        whatsapp: "+91 98765 43210",
        address: "Digital Hub, Pune, Maharashtra 411001",
        hours: "Mon-Sat: 9 AM - 7 PM IST"
      },
      social: {
        title: "Follow Our Journey",
        platforms: [
          { name: "YouTube", icon: "Play", followers: "5.2L", handle: "@HustleIndiaOnline" },
          { name: "Instagram", icon: "Instagram", followers: "2.8L", handle: "@hustleindia" },
          { name: "Telegram", icon: "MessageCircle", followers: "1.5L", handle: "t.me/hustleindia" },
          { name: "WhatsApp", icon: "MessageSquare", followers: "50K+", handle: "Community Groups" }
        ]
      },
      community: {
        title: "Join Our Community",
        description: "Connect with like-minded individuals, share experiences, and grow together",
        benefits: [
          "Daily earning tips and updates",
          "Exclusive method reveals",
          "Direct access to mentors",
          "Peer support and networking"
        ]
      }
    },
    hi: {
      title: "संपर्क में रहें",
      subtitle: "कोई प्रश्न है? मार्गदर्शन चाहिए? हम आपकी सफलता में मदद के लिए यहां हैं",
      promise: {
        title: "आपसे हमारा वादा",
        points: [
          "केवल ईमानदार समीक्षा और सिफारिशें",
          "भारतीय सांस्कृतिक मूल्यों का पूर्ण सम्मान",
          "समुदाय के सदस्यों के लिए व्यक्तिगत सहायता",
          "पारदर्शी कमाई और पद्धति",
          "निरंतर सीखना और सुधार",
          "दीर्घकालिक विश्वास संबंध बनाना"
        ]
      },
      contact: {
        email: "support@hustleindia.online",
        whatsapp: "+91 98765 43210",
        address: "डिजिटल हब, पुणे, महाराष्ट्र 411001",
        hours: "सोम-शनि: सुबह 9 - शाम 7 बजे IST"
      },
      social: {
        title: "हमारी यात्रा का अनुसरण करें",
        platforms: [
          { name: "यूट्यूब", icon: "Play", followers: "5.2L", handle: "@HustleIndiaOnline" },
          { name: "इंस्टाग्राम", icon: "Instagram", followers: "2.8L", handle: "@hustleindia" },
          { name: "टेलीग्राम", icon: "MessageCircle", followers: "1.5L", handle: "t.me/hustleindia" },
          { name: "व्हाट्सऐप", icon: "MessageSquare", followers: "50K+", handle: "समुदाय समूह" }
        ]
      },
      community: {
        title: "हमारे समुदाय में शामिल हों",
        description: "समान विचारधारा वाले व्यक्तियों से जुड़ें, अनुभव साझा करें, और एक साथ बढ़ें",
        benefits: [
          "दैनिक कमाई टिप्स और अपडेट",
          "विशेष तरीकों का खुलासा",
          "मेंटर्स तक सीधी पहुंच",
          "साथियों का समर्थन और नेटवर्किंग"
        ]
      }
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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">
                {currentLanguage === 'hi' ? 'संपर्क जानकारी' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={18} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      {currentLanguage === 'hi' ? 'ईमेल' : 'Email'}
                    </p>
                    <p className="font-semibold text-text-primary">
                      {currentContent.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="MessageSquare" size={18} color="var(--color-success)" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">WhatsApp</p>
                    <p className="font-semibold text-text-primary">
                      {currentContent.contact.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={18} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      {currentLanguage === 'hi' ? 'पता' : 'Address'}
                    </p>
                    <p className="font-semibold text-text-primary">
                      {currentContent.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={18} color="var(--color-warning)" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      {currentLanguage === 'hi' ? 'समय' : 'Hours'}
                    </p>
                    <p className="font-semibold text-text-primary">
                      {currentContent.contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="MessageSquare"
                iconPosition="left"
                className="bg-success hover:bg-success/90"
              >
                {currentLanguage === 'hi' ? 'WhatsApp पर चैट करें' : 'Chat on WhatsApp'}
              </Button>
              
              <Button
                variant="outline"
                fullWidth
                iconName="Mail"
                iconPosition="left"
              >
                {currentLanguage === 'hi' ? 'ईमेल भेजें' : 'Send Email'}
              </Button>
            </div>
          </div>

          {/* Our Promise */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-6">
              {currentContent.promise.title}
            </h3>
            <div className="space-y-4">
              {currentContent.promise.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media & Community */}
          <div className="space-y-8">
            {/* Social Platforms */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">
                {currentContent.social.title}
              </h3>
              <div className="space-y-3">
                {currentContent.social.platforms.map((platform, index) => (
                  <div key={index} className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-cultural-gradient rounded-lg flex items-center justify-center">
                          <Icon name={platform.icon} size={18} color="white" />
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary">
                            {platform.name}
                          </p>
                          <p className="text-sm text-text-secondary">
                            {platform.handle}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">
                          {platform.followers}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {currentLanguage === 'hi' ? 'फॉलोअर्स' : 'Followers'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community CTA */}
            <div className="bg-cultural-gradient rounded-2xl p-6 text-white">
              <h4 className="text-lg font-bold mb-3">
                {currentContent.community.title}
              </h4>
              <p className="text-sm opacity-90 mb-4">
                {currentContent.community.description}
              </p>
              <div className="space-y-2 mb-6">
                {currentContent.community.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} color="white" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="secondary"
                fullWidth
                iconName="Users"
                iconPosition="left"
                className="bg-white text-primary hover:bg-gray-50"
              >
                {currentLanguage === 'hi' ? 'अभी शामिल हों' : 'Join Now'}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ?'आपकी डिजिटल यात्रा आज ही शुरू करें' :'Start Your Digital Journey Today'
              }
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              {currentLanguage === 'hi' ?'हमारे साथ जुड़ें और भारत के सबसे बड़े डिजिटल कमाई समुदाय का हिस्सा बनें' :'Join us and become part of India\'s largest digital earning community'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Rocket"
                iconPosition="left"
                className="bg-cultural-gradient hover:opacity-90"
              >
                {currentLanguage === 'hi' ? 'मुफ्त गाइड डाउनलोड करें' : 'Download Free Guide'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                {currentLanguage === 'hi' ? 'सफलता की कहानियां देखें' : 'Watch Success Stories'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;