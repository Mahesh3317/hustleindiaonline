import React, { useEffect, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { Sidebar } from '../components/Sidebar';
import { AdSpace } from '../components/AdSpace';
import { SEOHead } from '../components/SEOHead';
import { categories } from '../constants/categories';
import { fetchPosts } from '../hooks/fetchPosts';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const HomePage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching posts for language:', currentLanguage);
        
        const posts = await fetchPosts(50, undefined, undefined, currentLanguage);
        console.log('Fetched posts:', posts);
        
        setAllPosts(posts);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };
    
    loadPosts();
  }, [currentLanguage]); // Reload when language changes

  // Process posts for different sections
  const featuredPosts = allPosts.filter((post) => post.featured);
  const latestPosts = [...allPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const popularPosts = [...allPosts].slice(0, 5);

  // Get main story and side stories
  const mainStory = featuredPosts[0] || latestPosts[0];
  const sideStories = latestPosts
    .filter(post => post.id !== mainStory?.id)
    .slice(0, 3);

  const getPostsByCategory = (categoryName: string) =>
    allPosts.filter(post => 
      post.category && post.category.toLowerCase() === categoryName.toLowerCase()
    );

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Content</h2>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <TopBar />

        {/* Hero Section */}
        <HeroSection mainStory={mainStory} sideStories={sideStories} />

        {/* Top Ad */}
        <div className="container mx-auto px-4 mb-8">
          <AdSpace size="leaderboard" />
        </div>

        {/* Debug Info - Remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="container mx-auto px-4 mb-4">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded text-sm">
              <strong>Debug Info:</strong> Loaded {allPosts.length} posts, 
              Featured: {featuredPosts.length}, 
              Language: {currentLanguage}
              {mainStory && `, Main Story: "${mainStory.title}"`}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Loading content...</p>
                </div>
              ) : allPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No Posts Available
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Check your Contentful setup and make sure posts are published.
                  </p>
                </div>
              ) : (
                <>
                  {/* Category Sections */}
                  {categories.map((category) => {
                    const categoryPosts = getPostsByCategory(category.name);
                    if (categoryPosts.length === 0) return null;

                    return (
                      <CategorySection
                        key={category.id}
                        category={category}
                        posts={categoryPosts}
                      />
                    );
                  })}

                  {/* Show all posts if no category matches */}
                  {categories.every(cat => getPostsByCategory(cat.name).length === 0) && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        All Posts
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {allPosts.map((post) => (
                          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                              {post.excerpt}
                            </p>
                            <p className="text-xs text-gray-500">
                              Category: {post.category} | Author: {post.author}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Mid-content Ad */}
              <div className="my-8">
                <AdSpace size="banner" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar 
                  popularPosts={popularPosts}
                  latestPosts={latestPosts.slice(0, 5)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="container mx-auto px-4 pb-8">
          <AdSpace size="banner" />
        </div>
      </div>
    </>
  );
};