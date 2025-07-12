import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ArticleSidebar = ({ currentLanguage, currentArticle }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [authorInfo, setAuthorInfo] = useState(null);

  useEffect(() => {
    // Mock related articles
    setRelatedArticles([
      {
        id: 1,
        title: currentLanguage === 'hi' ? 'YouTube से पैसे कैसे कमाएं' : 'How to Earn Money from YouTube',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
        views: 15420,
        readTime: 8,
        category: currentLanguage === 'hi' ? 'पैसे कमाएं' : 'Money Making'
      },
      {
        id: 2,
        title: currentLanguage === 'hi' ? 'Affiliate Marketing की शुरुआत' : 'Getting Started with Affiliate Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
        views: 12350,
        readTime: 12,
        category: currentLanguage === 'hi' ? 'पैसे कमाएं' : 'Money Making'
      },
      {
        id: 3,
        title: currentLanguage === 'hi' ? 'Blogging से कमाई के तरीके' : 'Ways to Earn from Blogging',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=300&h=200&fit=crop',
        views: 9870,
        readTime: 10,
        category: currentLanguage === 'hi' ? 'पैसे कमाएं' : 'Money Making'
      }
    ]);

    // Mock trending topics
    setTrendingTopics([
      { id: 1, title: currentLanguage === 'hi' ? 'ऑनलाइन पैसे कमाना' : 'Online Money Making', count: 1250 },
      { id: 2, title: currentLanguage === 'hi' ? 'डिजिटल मार्केटिंग' : 'Digital Marketing', count: 980 },
      { id: 3, title: currentLanguage === 'hi' ? 'मोबाइल ऐप्स' : 'Mobile Apps', count: 750 },
      { id: 4, title: currentLanguage === 'hi' ? 'फ्रीलांसिंग' : 'Freelancing', count: 650 },
      { id: 5, title: currentLanguage === 'hi' ? 'क्रिप्टो करेंसी' : 'Cryptocurrency', count: 540 }
    ]);

    // Mock author info
    setAuthorInfo({
      name: 'Rajesh Kumar',
      title: currentLanguage === 'hi' ? 'डिजिटल मार्केटिंग एक्सपर्ट' : 'Digital Marketing Expert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      bio: currentLanguage === 'hi' ?'5+ साल का अनुभव डिजिटल मार्केटिंग में। 10,000+ लोगों को ऑनलाइन कमाई सिखाई है।' :'5+ years experience in digital marketing. Taught 10,000+ people online earning.',
      followers: 25400,
      articles: 156,
      socialLinks: {
        twitter: 'https://twitter.com/rajeshkumar',
        linkedin: 'https://linkedin.com/in/rajeshkumar',
        instagram: 'https://instagram.com/rajeshkumar'
      }
    });
  }, [currentLanguage]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sticky Ad */}
      <div className="sticky top-24">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-2">
            <Icon name="Zap" size={16} />
            <span className="text-xs font-medium">Advertisement</span>
          </div>
          <div className="text-xs text-gray-400">300x250 Sidebar Ad</div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-cultural-gradient p-6 rounded-lg text-white">
        <div className="text-center mb-4">
          <Icon name="Mail" size={32} className="mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">
            {currentLanguage === 'hi' ? 'न्यूज़लेटर सब्सक्राइब करें' : 'Subscribe to Newsletter'}
          </h3>
          <p className="text-sm opacity-90">
            {currentLanguage === 'hi' ?'रोज़ाना नई कमाई के तरीके सीधे आपके ईमेल में पाएं' :'Get daily earning tips directly in your email'
            }
          </p>
        </div>
        
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder={currentLanguage === 'hi' ? 'आपका ईमेल एड्रेस' : 'Your email address'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/20 border-white/30 text-white placeholder-white/70"
            required
          />
          <Button 
            type="submit" 
            variant="secondary" 
            fullWidth
            disabled={isSubscribed}
          >
            {isSubscribed 
              ? (currentLanguage === 'hi' ? 'सब्सक्राइब हो गया!' : 'Subscribed!')
              : (currentLanguage === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe')
            }
          </Button>
        </form>
        
        <div className="flex items-center justify-center space-x-4 mt-4 text-xs opacity-80">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>50,000+ {currentLanguage === 'hi' ? 'सब्सक्राइबर्स' : 'subscribers'}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={14} />
            <span>{currentLanguage === 'hi' ? 'स्पैम नहीं' : 'No spam'}</span>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      {authorInfo && (
        <div className="bg-white border border-border rounded-lg p-6 shadow-cultural">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={authorInfo.avatar}
                alt={authorInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-text-primary">{authorInfo.name}</h3>
              <p className="text-sm text-text-secondary">{authorInfo.title}</p>
            </div>
          </div>
          
          <p className="text-sm text-text-secondary mb-4">{authorInfo.bio}</p>
          
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="text-center">
              <div className="font-bold text-text-primary">{authorInfo.followers.toLocaleString()}</div>
              <div className="text-text-secondary">{currentLanguage === 'hi' ? 'फॉलोअर्स' : 'Followers'}</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-text-primary">{authorInfo.articles}</div>
              <div className="text-text-secondary">{currentLanguage === 'hi' ? 'आर्टिकल्स' : 'Articles'}</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <Button variant="ghost" size="sm" className="text-sky-600 hover:bg-sky-50">
              <Icon name="Twitter" size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
              <Icon name="Linkedin" size={16} />
            </Button>
            <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
              <Icon name="Instagram" size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Related Articles */}
      <div className="bg-white border border-border rounded-lg p-6 shadow-cultural">
        <h3 className="font-bold text-text-primary mb-4 flex items-center">
          <Icon name="BookOpen" size={20} className="mr-2" />
          {currentLanguage === 'hi' ? 'संबंधित आर्टिकल्स' : 'Related Articles'}
        </h3>
        
        <div className="space-y-4">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              to={`/individual-blog-post-seo-optimized-article`}
              className="block group"
            >
              <div className="flex space-x-3">
                <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-text-primary text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-3 mt-2 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{article.readTime} {currentLanguage === 'hi' ? 'मिनट' : 'min'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <Link to="/category-hub-money-making-ecosystem">
          <Button variant="outline" fullWidth className="mt-4">
            {currentLanguage === 'hi' ? 'और भी देखें' : 'View More'}
          </Button>
        </Link>
      </div>

      {/* Trending Topics */}
      <div className="bg-white border border-border rounded-lg p-6 shadow-cultural">
        <h3 className="font-bold text-text-primary mb-4 flex items-center">
          <Icon name="TrendingUp" size={20} className="mr-2" />
          {currentLanguage === 'hi' ? 'ट्रेंडिंग टॉपिक्स' : 'Trending Topics'}
        </h3>
        
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  index === 2 ? 'bg-orange-100 text-orange-800': 'bg-muted text-text-secondary'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm text-text-primary font-medium">{topic.title}</span>
              </div>
              <span className="text-xs text-text-secondary">{topic.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Calculator Widget */}
      <div className="bg-white border border-border rounded-lg p-6 shadow-cultural">
        <h3 className="font-bold text-text-primary mb-4 flex items-center">
          <Icon name="Calculator" size={20} className="mr-2" />
          {currentLanguage === 'hi' ? 'कमाई कैलकुलेटर' : 'Earnings Calculator'}
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              {currentLanguage === 'hi' ? 'दैनिक घंटे' : 'Daily Hours'}
            </label>
            <Input
              type="number"
              placeholder="2"
              min="1"
              max="24"
              className="text-center"
            />
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">₹12,000</div>
            <div className="text-sm text-text-secondary">
              {currentLanguage === 'hi' ? 'अनुमानित मासिक कमाई' : 'Estimated Monthly Earnings'}
            </div>
          </div>
          
          <Button variant="default" fullWidth>
            <Icon name="Calculator" size={16} />
            <span className="ml-2">
              {currentLanguage === 'hi' ? 'विस्तृत कैलकुलेशन' : 'Detailed Calculation'}
            </span>
          </Button>
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-2">
          <Icon name="Zap" size={16} />
          <span className="text-xs font-medium">Advertisement</span>
        </div>
        <div className="text-xs text-gray-400">300x600 Skyscraper Ad</div>
      </div>
    </div>
  );
};

export default ArticleSidebar;