import React, { useEffect, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { Sidebar } from '../components/Sidebar';
import { AdSpace } from '../components/AdSpace';
import { SEOHead } from '../components/SEOHead';
import { categories } from '../constants/categories';
import { fetchPosts } from '../hooks/fetchPosts'; // ✅ Make sure path is correct
import { BlogPost } from '../types';

export const HomePage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts(50); // Fetch more for filtering
      setAllPosts(posts);
    };
    loadPosts();
  }, []);

  const featuredPosts = allPosts.filter((post) => post.featured);
  const latestPosts = [...allPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  const popularPosts = [...allPosts].slice(0, 5); // You can refine this logic later

  const mainStory = featuredPosts[0] || latestPosts[0];
  const sideStories = latestPosts.filter(post => post.id !== mainStory?.id).slice(0, 3);

  const getPostsByCategory = (categoryName: string) =>
    allPosts.filter(post => post.category === categoryName);

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
