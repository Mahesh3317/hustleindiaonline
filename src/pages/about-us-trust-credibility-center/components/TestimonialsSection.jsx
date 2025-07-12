import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "What Our Community Says",
      subtitle: "Real stories from real people who transformed their lives through digital earning",
      testimonials: [
        {
          name: "Amit Kumar",
          location: "Kanpur, UP",
          profession: "Former Bank Employee",
          earnings: "₹45,000/month",
          duration: "8 months",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          story: "I was skeptical about online earning until I found HustleIndia. Started with their YouTube strategy guide and now earning more than my bank salary. The Hindi content made everything so clear!",
          method: "YouTube + Affiliate Marketing",
          rating: 5
        },
        {
          name: "Priya Menon",
          location: "Kochi, Kerala",
          profession: "Homemaker",
          earnings: "₹28,000/month",
          duration: "6 months",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
          story: "As a homemaker, I wanted to contribute financially without leaving home. HustleIndia's app review methods helped me start earning while managing household. Now I'm financially independent!",
          method: "App Reviews + Blog Writing",
          rating: 5
        },
        {
          name: "Rajesh Patel",
          location: "Surat, Gujarat",
          profession: "Small Business Owner",
          earnings: "₹1,20,000/month",
          duration: "1.5 years",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          story: "My textile business was struggling during COVID. HustleIndia taught me digital marketing and affiliate strategies. Now my online income exceeds my offline business!",
          method: "Digital Marketing + E-commerce",
          rating: 5
        },
        {
          name: "Sneha Sharma",
          location: "Jaipur, Rajasthan",
          profession: "College Student",
          earnings: "₹15,000/month",
          duration: "4 months",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          story: "Started earning during college using HustleIndia\'s student-friendly methods. Now I pay my own fees and help my family too. The astrology content integration was unique and helpful!",
          method: "Content Writing + Social Media",
          rating: 5
        }
      ],
      pressSection: {
        title: "Featured In",
        mentions: [
          { name: "Economic Times", logo: "Newspaper" },
          { name: "Business Standard", logo: "FileText" },
          { name: "YourStory", logo: "BookOpen" },
          { name: "Inc42", logo: "TrendingUp" }
        ]
      }
    },
    hi: {
      title: "हमारे समुदाय का क्या कहना है",
      subtitle: "उन वास्तविक लोगों की वास्तविक कहानियां जिन्होंने डिजिटल कमाई के माध्यम से अपना जीवन बदल दिया",
      testimonials: [
        {
          name: "अमित कुमार",
          location: "कानपुर, यूपी",
          profession: "पूर्व बैंक कर्मचारी",
          earnings: "₹45,000/महीना",
          duration: "8 महीने",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          story: "मैं ऑनलाइन कमाई के बारे में संदेह में था जब तक मुझे हसलइंडिया नहीं मिला। उनकी यूट्यूब रणनीति गाइड से शुरुआत की और अब मेरी बैंक सैलरी से ज्यादा कमा रहा हूं। हिंदी कंटेंट ने सब कुछ इतना स्पष्ट बना दिया!",
          method: "यूट्यूब + एफिलिएट मार्केटिंग",
          rating: 5
        },
        {
          name: "प्रिया मेनन",
          location: "कोच्चि, केरल",
          profession: "गृहिणी",
          earnings: "₹28,000/महीना",
          duration: "6 महीने",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
          story: "एक गृहिणी के रूप में, मैं घर छोड़े बिना आर्थिक रूप से योगदान देना चाहती थी। हसलइंडिया के ऐप रिव्यू तरीकों ने मुझे घर का काम संभालते हुए कमाना शुरू करने में मदद की। अब मैं आर्थिक रूप से स्वतंत्र हूं!",
          method: "ऐप रिव्यू + ब्लॉग लेखन",
          rating: 5
        },
        {
          name: "राजेश पटेल",
          location: "सूरत, गुजरात",
          profession: "छोटे व्यापारी",
          earnings: "₹1,20,000/महीना",
          duration: "1.5 साल",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          story: "कोविड के दौरान मेरा कपड़ा व्यापार संघर्ष कर रहा था। हसलइंडिया ने मुझे डिजिटल मार्केटिंग और एफिलिएट रणनीतियां सिखाईं। अब मेरी ऑनलाइन आय मेरे ऑफलाइन व्यापार से अधिक है!",
          method: "डिजिटल मार्केटिंग + ई-कॉमर्स",
          rating: 5
        },
        {
          name: "स्नेहा शर्मा",
          location: "जयपुर, राजस्थान",
          profession: "कॉलेज छात्रा",
          earnings: "₹15,000/महीना",
          duration: "4 महीने",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          story: "हसलइंडिया के छात्र-अनुकूल तरीकों का उपयोग करके कॉलेज के दौरान कमाना शुरू किया। अब मैं अपनी फीस खुद भरती हूं और अपने परिवार की भी मदद करती हूं। ज्योतिष कंटेंट एकीकरण अनूठा और सहायक था!",
          method: "कंटेंट लेखन + सोशल मीडिया",
          rating: 5
        }
      ],
      pressSection: {
        title: "प्रदर्शित",
        mentions: [
          { name: "इकोनॉमिक टाइम्स", logo: "Newspaper" },
          { name: "बिजनेस स्टैंडर्ड", logo: "FileText" },
          { name: "योरस्टोरी", logo: "BookOpen" },
          { name: "Inc42", logo: "TrendingUp" }
        ]
      }
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-orange-50">
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

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {currentContent.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-cultural-lg p-8 hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {testimonial.profession} • {testimonial.location}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-success">
                      <Icon name="DollarSign" size={14} />
                      <span className="font-semibold">{testimonial.earnings}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-text-secondary">
                      <Icon name="Clock" size={14} />
                      <span>{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} color="var(--color-warning)" />
                ))}
              </div>

              {/* Story */}
              <p className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.story}"
              </p>

              {/* Method Tag */}
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block">
                {testimonial.method}
              </div>
            </div>
          ))}
        </div>

        {/* Press Mentions */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            {currentContent.pressSection.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentContent.pressSection.mentions.map((mention, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-text-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name={mention.logo} size={24} color="var(--color-text-secondary)" />
                  </div>
                  <span className="text-text-primary font-semibold text-sm">
                    {mention.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-cultural-gradient rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {currentLanguage === 'hi' ? 'समुदाय की सफलता' : 'Community Success'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">₹50Cr+</div>
              <div className="opacity-90">
                {currentLanguage === 'hi' ? 'कुल समुदाय कमाई' : 'Total Community Earnings'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2.5L+</div>
              <div className="opacity-90">
                {currentLanguage === 'hi' ? 'सफल सदस्य' : 'Successful Members'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="opacity-90">
                {currentLanguage === 'hi' ? 'संतुष्टि दर' : 'Satisfaction Rate'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;