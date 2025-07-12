import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ArticleHeader from './components/ArticleHeader';
import ArticleContent from './components/ArticleContent';
import ArticleSidebar from './components/ArticleSidebar';
import RelatedArticles from './components/RelatedArticles';
import CommentSection from './components/CommentSection';

const IndividualBlogPost = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get saved language preference
    const savedLanguage = localStorage.getItem('hustleIndia_language') || 'en';
    setCurrentLanguage(savedLanguage);

    // Mock article data
    const mockArticle = {
      id: 'mobile-earning-guide-2024',
      title: currentLanguage === 'hi' ?'मोबाइल से पैसे कैसे कमाएं - Complete Guide 2024 (Monthly ₹25,000 तक)' :'How to Earn Money from Mobile - Complete Guide 2024 (Up to ₹25,000 Monthly)',
      subtitle: currentLanguage === 'hi' ?'घर बैठे अपने स्मार्टफोन से महीने के ₹25,000 तक कमाने के proven तरीके। Step-by-step guide के साथ।' :'Proven methods to earn up to ₹25,000 monthly from your smartphone at home. With step-by-step guide.',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      author: {
        name: 'Rajesh Kumar',
        title: currentLanguage === 'hi' ? 'डिजिटल मार्केटिंग एक्सपर्ट' : 'Digital Marketing Expert',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        verified: true
      },
      category: currentLanguage === 'hi' ? 'पैसे कमाएं' : 'Money Making',
      categoryIcon: 'DollarSign',
      publishedAt: '2024-01-11',
      updatedAt: '2024-01-11',
      views: 45230,
      readTime: 15,
      isNew: true,
      isTrending: true,
      tags: [
        currentLanguage === 'hi' ? 'मोबाइल कमाई' : 'Mobile Earning',
        currentLanguage === 'hi' ? 'ऑनलाइन पैसे' : 'Online Money',
        currentLanguage === 'hi' ? 'घर से काम' : 'Work from Home',
        currentLanguage === 'hi' ? 'डिजिटल इंडिया' : 'Digital India'
      ],
      seoKeywords: [
        'mobile se paise kaise kamaye',
        'online earning apps',
        'work from home jobs',
        'digital marketing tips',
        'affiliate marketing guide'
      ],
      metaDescription: currentLanguage === 'hi' ?'मोबाइल से पैसे कमाने के 10+ proven तरीके। घर बैठे महीने के ₹25,000 तक कमाएं। Complete step-by-step guide 2024।' :'Learn 10+ proven ways to earn money from mobile. Earn up to ₹25,000 monthly from home. Complete step-by-step guide 2024.'
    };

    setArticle(mockArticle);
    setIsLoading(false);
  }, [currentLanguage]);

  // Update article data when language changes
  useEffect(() => {
    if (article) {
      setArticle(prev => ({
        ...prev,
        title: currentLanguage === 'hi' ?'मोबाइल से पैसे कैसे कमाएं - Complete Guide 2024 (Monthly ₹25,000 तक)' :'How to Earn Money from Mobile - Complete Guide 2024 (Up to ₹25,000 Monthly)',
        subtitle: currentLanguage === 'hi' ?'घर बैठे अपने स्मार्टफोन से महीने के ₹25,000 तक कमाने के proven तरीके। Step-by-step guide के साथ।' :'Proven methods to earn up to ₹25,000 monthly from your smartphone at home. With step-by-step guide.',
        category: currentLanguage === 'hi' ? 'पैसे कमाएं' : 'Money Making',
        author: {
          ...prev.author,
          title: currentLanguage === 'hi' ? 'डिजिटल मार्केटिंग एक्सपर्ट' : 'Digital Marketing Expert'
        },
        tags: [
          currentLanguage === 'hi' ? 'मोबाइल कमाई' : 'Mobile Earning',
          currentLanguage === 'hi' ? 'ऑनलाइन पैसे' : 'Online Money',
          currentLanguage === 'hi' ? 'घर से काम' : 'Work from Home',
          currentLanguage === 'hi' ? 'डिजिटल इंडिया' : 'Digital India'
        ],
        metaDescription: currentLanguage === 'hi' ?'मोबाइल से पैसे कमाने के 10+ proven तरीके। घर बैठे महीने के ₹25,000 तक कमाएं। Complete step-by-step guide 2024।' :'Learn 10+ proven ways to earn money from mobile. Earn up to ₹25,000 monthly from home. Complete step-by-step guide 2024.'
      }));
    }
  }, [currentLanguage]);

  if (isLoading || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary">
              {currentLanguage === 'hi' ? 'लोड हो रहा है...' : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.featuredImage,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "HustleIndia",
      "logo": {
        "@type": "ImageObject",
        "url": "/favicon.ico"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | HustleIndia</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.seoKeywords.join(', ')} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.featuredImage} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="HustleIndia" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={article.featuredImage} />
        
        {/* Article Tags */}
        <meta property="article:author" content={article.author.name} />
        <meta property="article:published_time" content={article.publishedAt} />
        <meta property="article:modified_time" content={article.updatedAt} />
        <meta property="article:section" content={article.category} />
        {article.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Language and Regional Tags */}
        <meta name="language" content={currentLanguage} />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        
        {/* Alternate Language URLs */}
        <link rel="alternate" hrefLang="en" href={window.location.href.replace(/\?.*/, '') + '?lang=en'} />
        <link rel="alternate" hrefLang="hi" href={window.location.href.replace(/\?.*/, '') + '?lang=hi'} />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        {/* Article Header */}
        <ArticleHeader article={article} currentLanguage={currentLanguage} />
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
          {/* Article Content */}
          <div className="flex-1">
            <ArticleContent article={article} currentLanguage={currentLanguage} />
          </div>
          
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <ArticleSidebar currentLanguage={currentLanguage} currentArticle={article} />
          </aside>
        </div>
        
        {/* Comment Section */}
        <CommentSection currentLanguage={currentLanguage} />
        
        {/* Related Articles */}
        <RelatedArticles currentLanguage={currentLanguage} currentCategory={article.category} />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-cultural-lg hover:bg-primary/90 transition-all duration-200 z-40"
        aria-label={currentLanguage === 'hi' ? 'ऊपर जाएं' : 'Scroll to top'}
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default IndividualBlogPost;