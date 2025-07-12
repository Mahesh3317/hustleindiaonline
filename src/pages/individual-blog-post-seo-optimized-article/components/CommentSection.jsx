import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommentSection = ({ currentLanguage }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    // Mock comments data
    const mockComments = [
      {
        id: 1,
        author: {
          name: 'Rahul Sharma',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
          isVerified: true
        },
        content: currentLanguage === 'hi' ?'बहुत ही उपयोगी जानकारी है! मैंने इस method को try किया और पहले ही महीने में ₹8,000 कमाए। धन्यवाद!' :'Very useful information! I tried this method and earned ₹8,000 in the first month itself. Thank you!',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        likes: 24,
        isLiked: false,
        replies: [
          {
            id: 11,
            author: {
              name: 'HustleIndia Team',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
              isVerified: true,
              isAuthor: true
            },
            content: currentLanguage === 'hi' ?'बहुत खुशी की बात है राहुल जी! आपकी सफलता हमारी प्रेरणा है। 🎉' :'Very happy to hear this Rahul ji! Your success is our inspiration. 🎉',
            timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000),
            likes: 8,
            isLiked: false
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Priya Patel',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
          isVerified: false
        },
        content: currentLanguage === 'hi' ?'क्या ये सभी apps safe हैं? मैं beginner हूँ और थोड़ा डर लग रहा है। कोई guidance दे सकते हैं?' :'Are all these apps safe? I am a beginner and feeling a bit scared. Can someone provide guidance?',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        likes: 12,
        isLiked: true,
        replies: [
          {
            id: 21,
            author: {
              name: 'Amit Kumar',
              avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
              isVerified: false
            },
            content: currentLanguage === 'hi' ?'हाँ प्रिया जी, ये सभी apps बिल्कुल safe हैं। मैं 2 साल से use कर रहा हूँ। बस KYC complete करना जरूरी है।' :'Yes Priya ji, all these apps are completely safe. I have been using them for 2 years. Just need to complete KYC.',
            timestamp: new Date(Date.now() - 3.5 * 60 * 60 * 1000),
            likes: 6,
            isLiked: false
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Vikash Singh',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
          isVerified: false
        },
        content: currentLanguage === 'hi' ?'Great article! एक सवाल है - क्या ये methods students के लिए भी suitable हैं? मैं college में हूँ।' :'Great article! One question - are these methods suitable for students too? I am in college.',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
        likes: 8,
        isLiked: false,
        replies: []
      },
      {
        id: 4,
        author: {
          name: 'Neha Gupta',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
          isVerified: true
        },
        content: currentLanguage === 'hi' ?'मैंने affiliate marketing start की है इस guide के बाद। Already ₹3,000 कमा लिए हैं! Thank you so much! 💰' :'I started affiliate marketing after this guide. Already earned ₹3,000! Thank you so much! 💰',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
        likes: 18,
        isLiked: true,
        replies: []
      }
    ];

    setComments(mockComments);
  }, [currentLanguage]);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return currentLanguage === 'hi' ? `${days} दिन पहले` : `${days} days ago`;
    } else if (hours > 0) {
      return currentLanguage === 'hi' ? `${hours} घंटे पहले` : `${hours} hours ago`;
    } else {
      return currentLanguage === 'hi' ? 'अभी' : 'Just now';
    }
  };

  const handleLike = (commentId, isReply = false, parentId = null) => {
    setComments(prevComments => 
      prevComments.map(comment => {
        if (isReply && comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => 
              reply.id === commentId 
                ? { ...reply, isLiked: !reply.isLiked, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 }
                : reply
            )
          };
        } else if (!isReply && comment.id === commentId) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          };
        }
        return comment;
      })
    );
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
        isVerified: false
      },
      content: newComment,
      timestamp: new Date(),
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
    setShowCommentForm(false);
  };

  const handleSubmitReply = (e, parentId) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const reply = {
      id: Date.now(),
      author: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face',
        isVerified: false
      },
      content: replyText,
      timestamp: new Date(),
      likes: 0,
      isLiked: false
    };

    setComments(prev => 
      prev.map(comment => 
        comment.id === parentId 
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      )
    );

    setReplyText('');
    setReplyTo(null);
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'newest') {
      return b.timestamp - a.timestamp;
    } else if (sortBy === 'oldest') {
      return a.timestamp - b.timestamp;
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    }
    return 0;
  });

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              {currentLanguage === 'hi' ? 'कमेंट्स' : 'Comments'}
            </h2>
            <p className="text-text-secondary">
              {comments.length} {currentLanguage === 'hi' ? 'कमेंट्स' : 'comments'}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="newest">{currentLanguage === 'hi' ? 'नवीनतम' : 'Newest'}</option>
              <option value="oldest">{currentLanguage === 'hi' ? 'पुराने' : 'Oldest'}</option>
              <option value="popular">{currentLanguage === 'hi' ? 'लोकप्रिय' : 'Popular'}</option>
            </select>
            
            <Button
              variant="default"
              size="sm"
              onClick={() => setShowCommentForm(!showCommentForm)}
            >
              <Icon name="MessageSquare" size={16} />
              <span className="ml-2">
                {currentLanguage === 'hi' ? 'कमेंट करें' : 'Add Comment'}
              </span>
            </Button>
          </div>
        </div>

        {/* Comment Form */}
        {showCommentForm && (
          <div className="bg-muted p-6 rounded-lg mb-8">
            <form onSubmit={handleSubmitComment}>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face"
                    alt="Your avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={currentLanguage === 'hi' ?'अपना कमेंट लिखें...' :'Write your comment...'
                    }
                    className="w-full p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="3"
                    required
                  />
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-text-secondary">
                      {currentLanguage === 'hi' ?'कृपया सम्मानजनक भाषा का उपयोग करें' :'Please use respectful language'
                      }
                    </p>
                    <div className="flex space-x-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowCommentForm(false)}
                      >
                        {currentLanguage === 'hi' ? 'रद्द करें' : 'Cancel'}
                      </Button>
                      <Button type="submit" size="sm">
                        {currentLanguage === 'hi' ? 'पोस्ट करें' : 'Post'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Comments List */}
        <div className="space-y-6">
          {sortedComments.map((comment) => (
            <div key={comment.id} className="border-b border-border pb-6">
              {/* Main Comment */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-text-primary">{comment.author.name}</h4>
                    {comment.author.isVerified && (
                      <Icon name="BadgeCheck" size={16} className="text-primary" />
                    )}
                    {comment.author.isAuthor && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        {currentLanguage === 'hi' ? 'लेखक' : 'Author'}
                      </span>
                    )}
                    <span className="text-sm text-text-secondary">
                      {formatTimeAgo(comment.timestamp)}
                    </span>
                  </div>
                  
                  <p className="text-text-primary mb-3 leading-relaxed">{comment.content}</p>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center space-x-1 text-sm transition-colors ${
                        comment.isLiked ? 'text-primary' : 'text-text-secondary hover:text-primary'
                      }`}
                    >
                      <Icon name={comment.isLiked ? "Heart" : "Heart"} size={16} fill={comment.isLiked ? "currentColor" : "none"} />
                      <span>{comment.likes}</span>
                    </button>
                    
                    <button
                      onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                      className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      <Icon name="MessageCircle" size={16} />
                      <span>{currentLanguage === 'hi' ? 'जवाब दें' : 'Reply'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reply Form */}
              {replyTo === comment.id && (
                <div className="ml-14 mt-4">
                  <form onSubmit={(e) => handleSubmitReply(e, comment.id)}>
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face"
                          alt="Your avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <Input
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={currentLanguage === 'hi' ?'अपना जवाब लिखें...' :'Write your reply...'
                          }
                          className="mb-2"
                          required
                        />
                        <div className="flex space-x-2">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setReplyTo(null)}
                          >
                            {currentLanguage === 'hi' ? 'रद्द करें' : 'Cancel'}
                          </Button>
                          <Button type="submit" size="sm">
                            {currentLanguage === 'hi' ? 'जवाब दें' : 'Reply'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="ml-14 mt-4 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={reply.author.avatar}
                          alt={reply.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h5 className="font-medium text-text-primary text-sm">{reply.author.name}</h5>
                          {reply.author.isVerified && (
                            <Icon name="BadgeCheck" size={14} className="text-primary" />
                          )}
                          {reply.author.isAuthor && (
                            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                              {currentLanguage === 'hi' ? 'लेखक' : 'Author'}
                            </span>
                          )}
                          <span className="text-xs text-text-secondary">
                            {formatTimeAgo(reply.timestamp)}
                          </span>
                        </div>
                        
                        <p className="text-text-primary text-sm mb-2 leading-relaxed">{reply.content}</p>
                        
                        <button
                          onClick={() => handleLike(reply.id, true, comment.id)}
                          className={`flex items-center space-x-1 text-xs transition-colors ${
                            reply.isLiked ? 'text-primary' : 'text-text-secondary hover:text-primary'
                          }`}
                        >
                          <Icon name={reply.isLiked ? "Heart" : "Heart"} size={14} fill={reply.isLiked ? "currentColor" : "none"} />
                          <span>{reply.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Comments */}
        <div className="text-center mt-8">
          <Button variant="outline">
            {currentLanguage === 'hi' ? 'और कमेंट्स लोड करें' : 'Load More Comments'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;