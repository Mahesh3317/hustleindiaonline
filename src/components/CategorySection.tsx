import React from 'react';
import { Link } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { BlogPost, Category } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface CategorySectionProps {
  category: Category;
  posts: BlogPost[];
  showViewAll?: boolean;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  posts, 
  showViewAll = true 
}) => {
  const { t } = useLanguage();

  if (posts.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <span className="text-2xl mr-3">{category.icon}</span>
          {category.name}
        </h2>
        {showViewAll && (
          <Link
            to={`/category/${category.slug}`}
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium text-sm transition-colors"
          >
            View All →
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <NewsCard key={post.id} post={post} variant="featured" />
        ))}
      </div>
    </section>
  );
};