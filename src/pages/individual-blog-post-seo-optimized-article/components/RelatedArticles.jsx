import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedArticles = ({ currentLanguage, currentCategory }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  useEffect(() => {
    // Mock related articles data
    const mockArticles = [
      {
        id: 1,
        title: currentLanguage === 'hi' ? 'WhatsApp Business से पैसे कैसे कमाएं - Complete Guide 2024' : 'How to Earn Money from WhatsApp Business - Complete Guide 2024',
        excerpt: currentLanguage === 'hi' ?'WhatsApp Business का उपयोग करके आप महीने में ₹15,000 तक कमा सकते हैं। जानें step-by-step तरीका।' :'Using WhatsApp Business, you can earn up to ₹15,000 per month. Learn the step-by-step method.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
        author: {
          name: 'Priya Sharma',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face'
        },
        publishedAt: '2024-01-10',
        readTime: 8,
        views: 25400,
        category: currentLanguage === 'hi' ? 'पैसे कमाएं' : 'Money Making',
        tags: [
          currentLanguage === 'hi' ? 'व्हाट्सऐप' : 'WhatsApp',
          currentLanguage === 'hi' ? 'बिज़नेस' : 'Business',
          currentLanguage === 'hi' ? 'ऑनलाइन कमाई' : 'Online Earning'
        ],
        isNew: true,
        isTrending: true
      },
      {
        id: 2,
        title: currentLanguage === 'hi' ? 'Instagram Reels से Monthly ₹20,000 कमाने का तरीका' : 'How to Earn ₹20,000 Monthly from Instagram Reels',
        excerpt: currentLanguage === 'hi' ?'Instagram Reels बनाकर और viral करके आप अच्छी कमाई कर सकते हैं। यहाँ हैं proven strategies।' :'By creating and making Instagram Reels viral, you can earn good money. Here are proven strategies.',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop',
        author: {
          name: 'Amit Patel',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
        },
        publishedAt: '2024-01-08',
        readTime: 12,
        views: 18750,
        category: currentLanguage === 'hi' ? 'सोशल मीडिया' : 'Social Media',
        tags: [
          currentLanguage === 'hi' ? 'इंस्टाग्राम' : 'Instagram',
          currentLanguage === 'hi' ? 'रील्स' : 'Reels',
          currentLanguage === 'hi' ? 'वायरल' : 'Viral'
        ],
        isNew: false,
        isTrending: true
      },
      {
        id: 3,
        title: currentLanguage === 'hi' ? 'Freelancing में Success के लिए 10 Golden Rules' : '10 Golden Rules for Success in Freelancing',
        excerpt: currentLanguage === 'hi' ?'Freelancing में सफल होने के लिए इन 10 नियमों को follow करें। Guaranteed results मिलेंगे।' :'Follow these 10 rules to succeed in freelancing. You will get guaranteed results.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=250&fit=crop',
        author: {
          name: 'Neha Singh',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
        },
        publishedAt: '2024-01-05',
        readTime: 15,
        views: 32100,
        category: currentLanguage === 'hi' ? 'फ्रीलांसिंग' : 'Freelancing',
        tags: [
          currentLanguage === 'hi' ? 'फ्रीलांसिंग' : 'Freelancing',
          currentLanguage === 'hi' ? 'करियर' : 'Career',
          currentLanguage === 'hi' ? 'टिप्स' : 'Tips'
        ],
        isNew: false,
        isTrending: false
      },
      {
        id: 4,
        title: currentLanguage === 'hi' ? 'Affiliate Marketing से First Month में ₹10,000 कैसे कमाएं' : 'How to Earn ₹10,000 in First Month from Affiliate Marketing',
        excerpt: currentLanguage === 'hi' ?'Affiliate Marketing की शुरुआत करने वालों के लिए complete roadmap। First month से ही earning शुरू करें।' :'Complete roadmap for affiliate marketing beginners. Start earning from the first month itself.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        author: {
          name: 'Rohit Kumar',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
        },
        publishedAt: '2024-01-03',
        readTime: 10,
        views: 28900,
        category: currentLanguage === 'hi' ? 'एफिलिएट मार्केटिंग' : 'Affiliate Marketing',
        tags: [
          currentLanguage === 'hi' ? 'एफिलिएट' : 'Affiliate',
          currentLanguage === 'hi' ? 'मार्केटिंग' : 'Marketing',
          currentLanguage === 'hi' ? 'शुरुआत' : 'Beginner'
        ],
        isNew: false,
        isTrending: true
      },
      {
        id: 5,
        title: currentLanguage === 'hi' ? 'YouTube Shorts से Daily ₹500 कमाने का Secret Formula' : 'Secret Formula to Earn ₹500 Daily from YouTube Shorts',
        excerpt: currentLanguage === 'hi' ?'YouTube Shorts का सही उपयोग करके daily ₹500 कमाना सीखें। Proven strategy के साथ।' :'Learn to earn ₹500 daily by using YouTube Shorts correctly. With proven strategy.',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop',
        author: {
          name: 'Anjali Gupta',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face'
        },
        publishedAt: '2024-01-01',
        readTime: 7,
        views: 41200,
        category: currentLanguage === 'hi' ? 'यूट्यूब' : 'YouTube',
        tags: [
          currentLanguage === 'hi' ? 'यूट्यूब' : 'YouTube',
          currentLanguage === 'hi' ? 'शॉर्ट्स' : 'Shorts',
          currentLanguage === 'hi' ? 'वीडियो' : 'Video'
        ],
        isNew: false,
        isTrending: true
      },
      {
        id: 6,
        title: currentLanguage === 'hi' ? 'Dropshipping Business Setup करने का Complete Guide' : 'Complete Guide to Setup Dropshipping Business',
        excerpt: currentLanguage === 'hi' ?'Zero investment में dropshipping business शुरू करें। Step-by-step guide के साथ।' :'Start dropshipping business with zero investment. With step-by-step guide.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
        author: {
          name: 'Vikash Yadav',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
        },
        publishedAt: '2023-12-28',
        readTime: 20,
        views: 15600,
        category: currentLanguage === 'hi' ? 'ई-कॉमर्स' : 'E-commerce',
        tags: [
          currentLanguage === 'hi' ? 'ड्रॉपशिपिंग' : 'Dropshipping',
          currentLanguage === 'hi' ? 'बिज़नेस' : 'Business',
          currentLanguage === 'hi' ? 'ई-कॉमर्स' : 'E-commerce'
        ],
        isNew: false,
        isTrending: false
      }
    ];

    setRelatedArticles(mockArticles);
  }, [currentLanguage]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLanguage === 'hi' ? 'hi-IN' : 'en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const ArticleCard = ({ article, isListView = false }) => (
    <Link
      to="/individual-blog-post-seo-optimized-article"
      className={`block group ${isListView ? 'border-b border-border pb-6 mb-6' : ''}`}
    >
      <div className={`${isListView ? 'flex space-x-4' : 'space-y-4'}`}>
        <div className={`${isListView ? 'w-48 flex-shrink-0' : 'w-full'} relative overflow-hidden rounded-lg`}>
          <img
            src={article.image}
            alt={article.title}
            className={`${isListView ? 'w-full h-32' : 'w-full h-48'} object-cover group-hover:scale-105 transition-transform duration-300`}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex space-x-2">
            {article.isNew && (
              <span className="px-2 py-1 bg-success text-white text-xs font-medium rounded-full">
                {currentLanguage === 'hi' ? 'नया' : 'New'}
              </span>
            )}
            {article.isTrending && (
              <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full flex items-center">
                <Icon name="TrendingUp" size={12} className="mr-1" />
                {currentLanguage === 'hi' ? 'ट्रेंडिंग' : 'Trending'}
              </span>
            )}
          </div>
          
          {/* Category */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
              {article.category}
            </span>
          </div>
        </div>
        
        <div className={`${isListView ? 'flex-1' : ''}`}>
          <h3 className={`font-bold text-text-primary group-hover:text-primary transition-colors ${
            isListView ? 'text-lg mb-2' : 'text-xl mb-3'
          } line-clamp-2`}>
            {article.title}
          </h3>
          
          <p className={`text-text-secondary ${isListView ? 'text-sm mb-3' : 'mb-4'} line-clamp-2`}>
            {article.excerpt}
          </p>
          
          {/* Author and Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{article.author.name}</p>
                <p className="text-xs text-text-secondary">{formatDate(article.publishedAt)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={12} />
                <span>{article.readTime} {currentLanguage === 'hi' ? 'मिनट' : 'min'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={12} />
                <span>{article.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="bg-muted py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-2">
              {currentLanguage === 'hi' ? 'संबंधित आर्टिकल्स' : 'Related Articles'}
            </h2>
            <p className="text-text-secondary">
              {currentLanguage === 'hi' ?'और भी उपयोगी जानकारी के लिए ये आर्टिकल्स पढ़ें' :'Read these articles for more useful information'
              }
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Icon name="Grid3X3" size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <Icon name="List" size={16} />
            </Button>
          </div>
        </div>
        
        {/* Articles Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-0'}>
          {relatedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isListView={viewMode === 'list'}
            />
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <Link to="/category-hub-money-making-ecosystem">
            <Button variant="default" size="lg">
              <Icon name="ArrowRight" size={20} />
              <span className="ml-2">
                {currentLanguage === 'hi' ? 'और भी आर्टिकल्स देखें' : 'View More Articles'}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;