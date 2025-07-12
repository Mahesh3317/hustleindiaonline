import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const Sidebar = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState('success-stories');

  const successStories = [
    {
      id: 1,
      name: "Rajesh Kumar",
      nameHi: "राजेश कुमार",
      location: "Delhi",
      locationHi: "दिल्ली",
      method: "YouTube Channel",
      methodHi: "यूट्यूब चैनल",
      earning: "₹45,000",
      duration: "6 months",
      durationHi: "6 महीने",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      story: "Started with tech reviews, now earning consistently",
      storyHi: "टेक रिव्यू से शुरुआत की, अब लगातार कमाई हो रही है",
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      nameHi: "प्रिया शर्मा",
      location: "Mumbai",
      locationHi: "मुंबई",
      method: "Affiliate Marketing",
      methodHi: "एफिलिएट मार्केटिंग",
      earning: "₹28,000",
      duration: "4 months",
      durationHi: "4 महीने",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      story: "Beauty products affiliate marketing success",
      storyHi: "ब्यूटी प्रोडक्ट्स एफिलिएट मार्केटिंग में सफलता",
      verified: true
    },
    {
      id: 3,
      name: "Amit Patel",
      nameHi: "अमित पटेल",
      location: "Ahmedabad",
      locationHi: "अहमदाबाद",
      method: "Online Tutoring",
      methodHi: "ऑनलाइन ट्यूशन",
      earning: "₹35,000",
      duration: "8 months",
      durationHi: "8 महीने",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      story: "Teaching mathematics to students online",
      storyHi: "ऑनलाइन छात्रों को गणित पढ़ाना",
      verified: true
    }
  ];

  const tools = [
    {
      id: 1,
      name: "Canva Pro",
      nameHi: "कैनवा प्रो",
      category: "Design",
      categoryHi: "डिज़ाइन",
      description: "Professional design tool for content creation",
      descriptionHi: "कंटेंट क्रिएशन के लिए प्रोफेशनल डिज़ाइन टूल",
      price: "₹500/month",
      rating: 4.8,
      affiliate: true,
      icon: "Palette"
    },
    {
      id: 2,
      name: "Hostinger",
      nameHi: "होस्टिंगर",
      category: "Web Hosting",
      categoryHi: "वेब होस्टिंग",
      description: "Affordable web hosting for bloggers",
      descriptionHi: "ब्लॉगर्स के लिए किफायती वेब होस्टिंग",
      price: "₹149/month",
      rating: 4.6,
      affiliate: true,
      icon: "Server"
    },
    {
      id: 3,
      name: "TubeBuddy",
      nameHi: "ट्यूबबडी",
      category: "YouTube Tools",
      categoryHi: "यूट्यूब टूल्स",
      description: "YouTube optimization and analytics",
      descriptionHi: "यूट्यूब ऑप्टिमाइज़ेशन और एनालिटिक्स",
      price: "₹750/month",
      rating: 4.7,
      affiliate: true,
      icon: "Video"
    }
  ];

  const qnaItems = [
    {
      id: 1,
      question: "How to start affiliate marketing with zero investment?",
      questionHi: "बिना निवेश के एफिलिएट मार्केटिंग कैसे शुरू करें?",
      author: "Neha Singh",
      authorHi: "नेहा सिंह",
      answers: 12,
      time: "2 hours ago",
      timeHi: "2 घंटे पहले",
      category: "Affiliate Marketing"
    },
    {
      id: 2,
      question: "Best YouTube niches for Indian audience?",
      questionHi: "भारतीय दर्शकों के लिए सबसे अच्छे यूट्यूब विषय?",
      author: "Rohit Gupta",
      authorHi: "रोहित गुप्ता",
      answers: 8,
      time: "5 hours ago",
      timeHi: "5 घंटे पहले",
      category: "YouTube"
    },
    {
      id: 3,
      question: "How much can I earn from blogging in first year?",
      questionHi: "पहले साल में ब्लॉगिंग से कितनी कमाई हो सकती है?",
      author: "Kavita Jain",
      authorHi: "कविता जैन",
      answers: 15,
      time: "1 day ago",
      timeHi: "1 दिन पहले",
      category: "Blogging"
    }
  ];

  const tabs = [
    { id: 'success-stories', label: 'Success Stories', labelHi: 'सफलता की कहानियां', icon: 'Trophy' },
    { id: 'tools', label: 'Tools & Resources', labelHi: 'टूल्स और संसाधन', icon: 'Wrench' },
    { id: 'qna', label: 'Community Q&A', labelHi: 'कम्युनिटी Q&A', icon: 'MessageCircle' }
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-cultural border border-border overflow-hidden">
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white' :'text-text-secondary hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span className="hidden lg:inline">
                {currentLanguage === 'hi' ? tab.labelHi : tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="p-4">
          {/* Success Stories Tab */}
          {activeTab === 'success-stories' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text-primary">
                  {currentLanguage === 'hi' ? 'सफलता की कहानियां' : 'Success Stories'}
                </h3>
                <Button variant="ghost" size="sm">
                  <Icon name="Plus" size={14} />
                  {currentLanguage === 'hi' ? 'शेयर करें' : 'Share Yours'}
                </Button>
              </div>

              {successStories.map((story) => (
                <div key={story.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Image
                        src={story.image}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {story.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                          <Icon name="Check" size={10} color="white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-sm text-text-primary">
                          {currentLanguage === 'hi' ? story.nameHi : story.name}
                        </h4>
                        <span className="text-xs text-text-secondary">
                          {currentLanguage === 'hi' ? story.locationHi : story.location}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {currentLanguage === 'hi' ? story.methodHi : story.method}
                        </span>
                        <span className="text-success font-bold text-sm">
                          {story.earning}
                        </span>
                      </div>

                      <p className="text-xs text-text-secondary mb-2">
                        {currentLanguage === 'hi' ? story.storyHi : story.story}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-secondary">
                          {currentLanguage === 'hi' ? story.durationHi : story.duration}
                        </span>
                        <Button variant="ghost" size="xs">
                          {currentLanguage === 'hi' ? 'पूरी कहानी' : 'Full Story'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="outline" fullWidth>
                <Icon name="Eye" size={16} />
                {currentLanguage === 'hi' ? 'सभी कहानियां देखें' : 'View All Stories'}
              </Button>
            </div>
          )}

          {/* Tools & Resources Tab */}
          {activeTab === 'tools' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text-primary">
                  {currentLanguage === 'hi' ? 'अनुशंसित टूल्स' : 'Recommended Tools'}
                </h3>
                <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                  {currentLanguage === 'hi' ? 'एफिलिएट लिंक' : 'Affiliate Links'}
                </span>
              </div>

              {tools.map((tool) => (
                <div key={tool.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name={tool.icon} size={20} color="var(--color-primary)" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-sm text-text-primary">
                          {currentLanguage === 'hi' ? tool.nameHi : tool.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} color="var(--color-warning)" fill="var(--color-warning)" />
                          <span className="text-xs text-text-secondary">{tool.rating}</span>
                        </div>
                      </div>

                      <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                        {currentLanguage === 'hi' ? tool.categoryHi : tool.category}
                      </span>

                      <p className="text-xs text-text-secondary mb-2">
                        {currentLanguage === 'hi' ? tool.descriptionHi : tool.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-text-primary">
                          {tool.price}
                        </span>
                        <Button variant="default" size="xs">
                          <Icon name="ExternalLink" size={12} />
                          {currentLanguage === 'hi' ? 'देखें' : 'View'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="outline" fullWidth>
                <Icon name="Package" size={16} />
                {currentLanguage === 'hi' ? 'सभी टूल्स देखें' : 'View All Tools'}
              </Button>
            </div>
          )}

          {/* Community Q&A Tab */}
          {activeTab === 'qna' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text-primary">
                  {currentLanguage === 'hi' ? 'कम्युनिटी Q&A' : 'Community Q&A'}
                </h3>
                <Button variant="ghost" size="sm">
                  <Icon name="Plus" size={14} />
                  {currentLanguage === 'hi' ? 'प्रश्न पूछें' : 'Ask Question'}
                </Button>
              </div>

              {qnaItems.map((item) => (
                <div key={item.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <h4 className="font-medium text-sm text-text-primary mb-2 line-clamp-2">
                    {currentLanguage === 'hi' ? item.questionHi : item.question}
                  </h4>

                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {currentLanguage === 'hi' ? item.timeHi : item.time}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-text-secondary">
                      <Icon name="User" size={12} />
                      <span>{currentLanguage === 'hi' ? item.authorHi : item.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center space-x-1 text-xs text-text-secondary">
                        <Icon name="MessageCircle" size={12} />
                        <span>{item.answers}</span>
                      </span>
                      <Button variant="ghost" size="xs">
                        {currentLanguage === 'hi' ? 'उत्तर दें' : 'Answer'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="outline" fullWidth>
                <Icon name="MessageSquare" size={16} />
                {currentLanguage === 'hi' ? 'सभी प्रश्न देखें' : 'View All Questions'}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Quick Calculator */}
      <div className="bg-white rounded-lg shadow-cultural border border-border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Calculator" size={20} color="var(--color-primary)" />
          <h3 className="font-semibold text-text-primary">
            {currentLanguage === 'hi' ? 'कमाई कैलकुलेटर' : 'Earning Calculator'}
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-text-secondary mb-1 block">
              {currentLanguage === 'hi' ? 'दैनिक घंटे' : 'Daily Hours'}
            </label>
            <input
              type="range"
              min="1"
              max="12"
              defaultValue="4"
              className="w-full"
            />
            <div className="flex justify-between text-xs text-text-secondary mt-1">
              <span>1h</span>
              <span>12h</span>
            </div>
          </div>

          <div className="bg-cultural-gradient rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold mb-1">₹15,000</div>
            <div className="text-sm opacity-90">
              {currentLanguage === 'hi' ? 'अनुमानित मासिक कमाई' : 'Estimated Monthly Earning'}
            </div>
          </div>

          <Button variant="outline" fullWidth>
            <Icon name="TrendingUp" size={16} />
            {currentLanguage === 'hi' ? 'विस्तृत गणना' : 'Detailed Calculation'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;