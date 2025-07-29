import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { ShareIcon, ClockIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';
import { AdSpace } from '../components/AdSpace';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { mockPosts, getLatestPosts, getPopularPosts } from '../constants/mockPosts';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  
  const post = mockPosts.find(p => p.slug === slug);
  const latestPosts = getLatestPosts();
  const popularPosts = getPopularPosts();
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The requested post could not be found.</p>
        </div>
      </div>
    );
  }
  
  const shareUrl = window.location.href;
  const shareTitle = post.title;
  const relatedPosts = mockPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  const fullContent = `
    <p>${post.excerpt}</p>
    
    <h2>मुख्य बिंदु</h2>
    <p>इस लेख में हम विस्तार से जानेंगे कि कैसे यह विषय आपके जीवन को प्रभावित कर सकता है। हमारे विशेषज्ञों ने इस पर गहन अनुसंधान किया है।</p>
    
    <h3>महत्वपूर्ण जानकारी</h3>
    <ul>
      <li>पहला महत्वपूर्ण बिंदु जो आपको जानना चाहिए</li>
      <li>दूसरा बिंदु जो इस विषय की गहराई को दर्शाता है</li>
      <li>तीसरा बिंदु जो व्यावहारिक सुझाव देता है</li>
      <li>चौथा बिंदु जो भविष्य की संभावनाओं पर प्रकाश डालता है</li>
    </ul>
    
    <h2>विस्तृत विश्लेषण</h2>
    <p>इस विषय का गहन विश्लेषण करते समय हमें कई महत्वपूर्ण पहलुओं पर ध्यान देना होगा। विशेषज्ञों का मानना है कि यह एक महत्वपूर्ण विकास है।</p>
    
    <p>आगे की योजना के लिए यह जानना आवश्यक है कि इसका प्रभाव कैसा होगा। हमारी टीम ने इस पर व्यापक शोध किया है।</p>
    
    <h2>निष्कर्ष</h2>
    <p>अंत में, यह कहा जा सकता है कि यह विषय वास्तव में महत्वपूर्ण है और इसका प्रभाव दूरगामी होगा। हमें इस पर निरंतर नजर रखनी चाहिए।</p>
  `;

  return (
    <>
      <SEOHead
        title={`${post.title} - HustleIndiaOnline`}
        description={post.excerpt}
        keywords={post.tags}
        image={post.coverImage}
        url={shareUrl}
        type="article"
        publishedTime={post.publishDate}
        author={post.author}
        category={post.category}
      />
      <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full mb-4">
                  {post.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center text-gray-200 text-sm gap-4">
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {format(new Date(post.publishDate), 'dd MMM, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <TagIcon className="w-4 h-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Top Ad */}
          <div className="mb-8">
            <AdSpace size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Share Buttons */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <ShareIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('shareArticle')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <WhatsappShareButton url={shareUrl} title={shareTitle}>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer">
                          💬
                        </div>
                      </WhatsappShareButton>
                      <FacebookShareButton url={shareUrl} title={shareTitle}>
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer">
                          📘
                        </div>
                      </FacebookShareButton>
                      <TwitterShareButton url={shareUrl} title={shareTitle}>
                        <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors cursor-pointer">
                          🐦
                        </div>
                      </TwitterShareButton>
                      <LinkedinShareButton url={shareUrl} title={shareTitle}>
                        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors cursor-pointer">
                          💼
                        </div>
                      </LinkedinShareButton>
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: fullContent }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-orange-100 dark:hover:bg-orange-900 hover:text-orange-700 dark:hover:text-orange-300 cursor-pointer transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mid-Article Ad */}
              <div className="my-8">
                <AdSpace size="rectangle" className="mx-auto" />
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <NewsCard key={relatedPost.id} post={relatedPost} variant="featured" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar 
                  popularPosts={popularPosts}
                  latestPosts={latestPosts}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="container mx-auto px-4 pb-8">
          <AdSpace size="banner" />
        </div>
      </article>
    </>
  );
};