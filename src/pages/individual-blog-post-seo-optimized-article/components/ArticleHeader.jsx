import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArticleHeader = ({ article, currentLanguage }) => {
  const [shareCount, setShareCount] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Simulate share count
    setShareCount(Math.floor(Math.random() * 500) + 100);
    
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('hustleIndia_bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(article.id));
  }, [article.id]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShareCount(prev => prev + 1);
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('hustleIndia_bookmarks') || '[]');
    let updatedBookmarks;
    
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter(id => id !== article.id);
    } else {
      updatedBookmarks = [...bookmarks, article.id];
    }
    
    localStorage.setItem('hustleIndia_bookmarks', JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat(currentLanguage === 'hi' ? 'hi-IN' : 'en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = currentLanguage === 'hi' ? 150 : 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-6">
          <span>{currentLanguage === 'hi' ? 'होम' : 'Home'}</span>
          <Icon name="ChevronRight" size={14} />
          <span className="text-primary">{article.category}</span>
          <Icon name="ChevronRight" size={14} />
          <span className="text-text-primary truncate">{article.title}</span>
        </nav>

        {/* Category Badge */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            <Icon name={article.categoryIcon} size={14} className="mr-1" />
            {article.category}
          </span>
          {article.isNew && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
              <Icon name="Sparkles" size={12} className="mr-1" />
              {currentLanguage === 'hi' ? 'नया' : 'New'}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author and Meta Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-text-primary">{article.author.name}</h3>
                  {article.author.verified && (
                    <Icon name="BadgeCheck" size={16} className="text-primary" />
                  )}
                </div>
                <p className="text-sm text-text-secondary">{article.author.title}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={16} />
              <span>
                {getReadingTime(article.content)} {currentLanguage === 'hi' ? 'मिनट पढ़ें' : 'min read'}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={16} />
              <span>{article.views.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Share Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('whatsapp')}
              className="text-green-600 border-green-200 hover:bg-green-50"
            >
              <Icon name="MessageCircle" size={16} />
              <span className="hidden sm:inline ml-2">WhatsApp</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('facebook')}
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              <Icon name="Facebook" size={16} />
              <span className="hidden sm:inline ml-2">Facebook</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('twitter')}
              className="text-sky-600 border-sky-200 hover:bg-sky-50"
            >
              <Icon name="Twitter" size={16} />
              <span className="hidden sm:inline ml-2">Twitter</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare('linkedin')}
              className="text-blue-700 border-blue-200 hover:bg-blue-50"
            >
              <Icon name="Linkedin" size={16} />
              <span className="hidden sm:inline ml-2">LinkedIn</span>
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className={isBookmarked ? 'text-primary' : 'text-text-secondary'}
            >
              <Icon name={isBookmarked ? "Bookmark" : "BookmarkPlus"} size={16} />
              <span className="ml-1">
                {isBookmarked 
                  ? (currentLanguage === 'hi' ? 'सेव किया' : 'Saved')
                  : (currentLanguage === 'hi' ? 'सेव करें' : 'Save')
                }
              </span>
            </Button>
            
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <Icon name="Share2" size={16} />
              <span>{shareCount}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;