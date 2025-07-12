import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Meet Our Expert Team",
      subtitle: "Diverse specialists from across India, united by the mission to empower digital success",
      members: [
        {
          name: "Priya Patel",
          role: "Tech Review Specialist",
          location: "Ahmedabad, Gujarat",
          specialization: "App Reviews & Comparisons",
          experience: "6+ years in tech journalism",
          story: "From software engineer to India's most trusted app reviewer. Tested 500+ apps personally.",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          languages: ["English", "Hindi", "Gujarati"],
          achievements: ["50L+ app downloads influenced", "Featured in TechCrunch India", "Google Play Awards Judge"]
        },
        {
          name: "Arjun Reddy",
          role: "Regional Business Expert",
          location: "Hyderabad, Telangana",
          specialization: "South India Opportunities",
          experience: "8+ years in regional business",
          story: "Built ₹2Cr+ business network across South India. Specializes in Telugu and Tamil markets.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          languages: ["Telugu", "Tamil", "English", "Hindi"],
          achievements: ["1000+ local businesses helped", "Regional startup mentor", "Government advisor"]
        },
        {
          name: "Meera Sharma",
          role: "Astrology & Numerology Expert",
          location: "Jaipur, Rajasthan",
          specialization: "Cultural Wisdom Integration",
          experience: "12+ years in traditional sciences",
          story: "Bridging ancient wisdom with modern opportunities. Helped 10,000+ people find their digital path.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          languages: ["Hindi", "English", "Rajasthani"],
          achievements: ["10K+ consultations", "Published author", "TV show appearances"]
        },
        {
          name: "Vikram Singh",
          role: "Content Strategy Lead",
          location: "Delhi, NCR",
          specialization: "Multi-language Content",
          experience: "10+ years in digital marketing",
          story: "From corporate marketing to content creator. Manages content strategy across 8 languages.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
          languages: ["Hindi", "English", "Punjabi", "Urdu"],
          achievements: ["100M+ content views", "Digital marketing awards", "Industry speaker"]
        }
      ]
    },
    hi: {
      title: "हमारी विशेषज्ञ टीम से मिलें",
      subtitle: "पूरे भारत के विविध विशेषज्ञ, डिजिटल सफलता को सशक्त बनाने के मिशन से एकजुट",
      members: [
        {
          name: "प्रिया पटेल",
          role: "टेक रिव्यू विशेषज्ञ",
          location: "अहमदाबाद, गुजरात",
          specialization: "ऐप रिव्यू और तुलना",
          experience: "टेक जर्नलिज्म में 6+ वर्ष",
          story: "सॉफ्टवेयर इंजीनियर से भारत की सबसे भरोसेमंद ऐप रिव्यूअर तक। व्यक्तिगत रूप से 500+ ऐप्स का परीक्षण किया।",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          languages: ["अंग्रेजी", "हिंदी", "गुजराती"],
          achievements: ["50L+ ऐप डाउनलोड प्रभावित", "टेकक्रंच इंडिया में फीचर्ड", "गूगल प्ले अवार्ड्स जज"]
        },
        {
          name: "अर्जुन रेड्डी",
          role: "क्षेत्रीय व्यापार विशेषज्ञ",
          location: "हैदराबाद, तेलंगाना",
          specialization: "दक्षिण भारत के अवसर",
          experience: "क्षेत्रीय व्यापार में 8+ वर्ष",
          story: "दक्षिण भारत में ₹2Cr+ का व्यापारिक नेटवर्क बनाया। तेलुगु और तमिल बाजारों में विशेषज्ञता।",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          languages: ["तेलुगु", "तमिल", "अंग्रेजी", "हिंदी"],
          achievements: ["1000+ स्थानीय व्यापारों की मदद", "क्षेत्रीय स्टार्टअप मेंटर", "सरकारी सलाहकार"]
        },
        {
          name: "मीरा शर्मा",
          role: "ज्योतिष और अंकशास्त्र विशेषज्ञ",
          location: "जयपुर, राजस्थान",
          specialization: "सांस्कृतिक ज्ञान एकीकरण",
          experience: "पारंपरिक विज्ञान में 12+ वर्ष",
          story: "प्राचीन ज्ञान को आधुनिक अवसरों से जोड़ना। 10,000+ लोगों को उनका डिजिटल पथ खोजने में मदद की।",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          languages: ["हिंदी", "अंग्रेजी", "राजस्थानी"],
          achievements: ["10K+ परामर्श", "प्रकाशित लेखक", "टीवी शो में उपस्थिति"]
        },
        {
          name: "विक्रम सिंह",
          role: "कंटेंट रणनीति प्रमुख",
          location: "दिल्ली, एनसीआर",
          specialization: "बहुभाषी सामग्री",
          experience: "डिजिटल मार्केटिंग में 10+ वर्ष",
          story: "कॉर्पोरेट मार्केटिंग से कंटेंट क्रिएटर तक। 8 भाषाओं में कंटेंट रणनीति का प्रबंधन।",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
          languages: ["हिंदी", "अंग्रेजी", "पंजाबी", "उर्दू"],
          achievements: ["100M+ कंटेंट व्यूज", "डिजिटल मार्केटिंग अवार्ड्स", "इंडस्ट्री स्पीकर"]
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
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

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {currentContent.members.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-cultural-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.role}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {member.story}
                  </p>

                  {/* Specialization */}
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Star" size={16} color="var(--color-primary)" />
                      <span className="font-semibold text-primary">
                        {currentLanguage === 'hi' ? 'विशेषज्ञता' : 'Specialization'}
                      </span>
                    </div>
                    <p className="text-sm text-text-primary font-medium">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang, langIndex) => (
                      <span key={langIndex} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-text-primary text-sm">
                      {currentLanguage === 'hi' ? 'मुख्य उपलब्धियां' : 'Key Achievements'}
                    </h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <Icon name="Award" size={12} color="var(--color-success)" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-cultural-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'hi' ? 'हमारी टीम में शामिल हों' : 'Join Our Team'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {currentLanguage === 'hi' ?'क्या आप भारत के डिजिटल भविष्य को आकार देने में मदद करना चाहते हैं?' :'Want to help shape India\'s digital future?'
              }
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Icon name="Mail" size={16} />
              <span>careers@hustleindia.online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;