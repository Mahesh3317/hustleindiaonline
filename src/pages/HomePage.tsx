import React from 'react';
import { TopBar } from '../components/TopBar';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { Sidebar } from '../components/Sidebar';
import { AdSpace } from '../components/AdSpace';
import { SEOHead } from '../components/SEOHead';
import { categories } from '../constants/categories';
import { 
  mockPosts, 
  getFeaturedPosts, 
  getLatestPosts, 
  getPopularPosts, 
  getPostsByCategory 
} from '../constants/mockPosts';

export const HomePage: React.FC = () => {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts();
  const popularPosts = getPopularPosts();
  
  const mainStory = featuredPosts[0] || mockPosts[0];
  const sideStories = mockPosts.filter(post => post.id !== mainStory.id).slice(0, 3);

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

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
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
      </div>
    </>
  );
};