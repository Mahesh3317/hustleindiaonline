import React from 'react';
import { useParams } from 'react-router-dom';
import { NewsCard } from '../components/NewsCard';
import { AdSpace } from '../components/AdSpace';
import { Sidebar } from '../components/Sidebar';
import { categories } from '../constants/categories';
import { getPostsByCategory, getLatestPosts, getPopularPosts } from '../constants/mockPosts';
import { SEOHead } from '../components/SEOHead';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  
  const categoryPosts = category ? getPostsByCategory(category.name) : [];
  const latestPosts = getLatestPosts();
  const popularPosts = getPopularPosts();

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Category Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The requested category could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${category.name} - HustleIndiaOnline`}
        description={`Latest ${category.name.toLowerCase()} news and updates from HustleIndiaOnline. ${category.description}`}
        keywords={[category.name.toLowerCase(), 'india', 'news', 'updates']}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Category Header */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-8">
          {/* Top Ad */}
          <div className="mb-8">
            <AdSpace size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {categoryPosts.length > 0 ? (
                <>
                  <div className="space-y-6">
                    {categoryPosts.map((post, index) => (
                      <React.Fragment key={post.id}>
                        <NewsCard post={post} variant="list" />
                        {/* Ad after every 4 posts */}
                        {(index + 1) % 4 === 0 && (
                          <div className="my-8">
                            <AdSpace size="rectangle" className="mx-auto" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="mt-12 flex justify-center">
                    <nav className="flex space-x-2">
                      <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border dark:border-gray-700">
                        Previous
                      </button>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">1</button>
                      <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        2
                      </button>
                      <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        3
                      </button>
                      <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Next
                      </button>
                    </nav>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    No posts found in {category.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Check back later for new content in this category.
                  </p>
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
        </section>
      </div>
    </>
  );
};