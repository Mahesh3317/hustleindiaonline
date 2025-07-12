import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Our Mission: Empowering Digital Bharat",
      subtitle: "Building India\'s largest community of successful digital entrepreneurs",
      missions: [
        {
          icon: "Globe",
          title: "Linguistic Accessibility",
          description: "Breaking language barriers by providing quality content in 8+ Indian languages, ensuring no one is left behind in the digital revolution."
        },
        {
          icon: "Heart",
          title: "Cultural Sensitivity",
          description: "Respecting traditional Indian values while embracing modern opportunities, creating content that resonates with diverse cultural backgrounds."
        },
        {
          icon: "Shield",
          title: "Trust & Transparency",
          description: "Maintaining complete transparency in our earnings, methods, and recommendations. Every strategy we share is personally tested and verified."
        },
        {
          icon: "Users",
          title: "Community First",
          description: "Building a supportive ecosystem where members help each other succeed, sharing knowledge, experiences, and celebrating achievements together."
        }
      ],
      commitments: [
        "Never promote untested earning methods",
        "Provide honest reviews of apps and platforms",
        "Offer free resources and guidance to everyone",
        "Maintain cultural respect in all content",
        "Support community members personally",
        "Keep learning and sharing new opportunities"
      ]
    },
    hi: {
      title: "हमारा मिशन: डिजिटल भारत को सशक्त बनाना",
      subtitle: "भारत के सबसे बड़े सफल डिजिटल उद्यमियों के समुदाय का निर्माण",
      missions: [
        {
          icon: "Globe",
          title: "भाषाई पहुंच",
          description: "8+ भारतीय भाषाओं में गुणवत्तापूर्ण सामग्री प्रदान करके भाषा की बाधाओं को तोड़ना, यह सुनिश्चित करना कि डिजिटल क्रांति में कोई भी पीछे न रह जाए।"
        },
        {
          icon: "Heart",
          title: "सांस्कृतिक संवेदनशीलता",
          description: "आधुनिक अवसरों को अपनाते हुए पारंपरिक भारतीय मूल्यों का सम्मान करना, विविध सांस्कृतिक पृष्ठभूमि के साथ तालमेल बिठाने वाली सामग्री बनाना।"
        },
        {
          icon: "Shield",
          title: "विश्वास और पारदर्शिता",
          description: "हमारी कमाई, तरीकों और सिफारिशों में पूर्ण पारदर्शिता बनाए रखना। हमारी हर रणनीति व्यक्तिगत रूप से परीक्षित और सत्यापित है।"
        },
        {
          icon: "Users",
          title: "समुदाय पहले",
          description: "एक सहायक पारिस्थितिकी तंत्र का निर्माण जहां सदस्य एक-दूसरे की सफलता में मदद करते हैं, ज्ञान साझा करते हैं, अनुभव साझा करते हैं और उपलब्धियों का जश्न मनाते हैं।"
        }
      ],
      commitments: [
        "कभी भी अपरीक्षित कमाई के तरीकों को बढ़ावा नहीं देना",
        "ऐप्स और प्लेटफॉर्म की ईमानदार समीक्षा प्रदान करना",
        "सभी को मुफ्त संसाधन और मार्गदर्शन प्रदान करना",
        "सभी सामग्री में सांस्कृतिक सम्मान बनाए रखना",
        "समुदाय के सदस्यों का व्यक्तिगत रूप से समर्थन करना",
        "नए अवसरों को सीखते और साझा करते रहना"
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

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentContent.missions.map((mission, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 h-full border border-border hover:shadow-cultural-lg transition-all duration-300">
                <div className="w-16 h-16 bg-cultural-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={mission.icon} size={24} color="white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {mission.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitments Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              {currentLanguage === 'hi' ? 'हमारी प्रतिबद्धताएं' : 'Our Commitments'}
            </h3>
            <p className="text-text-secondary">
              {currentLanguage === 'hi' ?'हम अपने समुदाय के साथ ये वादे करते हैं और हमेशा इन्हें निभाते हैं' :'These are the promises we make to our community and always keep'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentContent.commitments.map((commitment, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={16} color="white" />
                </div>
                <span className="text-text-primary font-medium">
                  {commitment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;