import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'small';
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'default' }) => {
  const { t } = useLanguage();

  if (variant === 'featured') {
    return (
      <Link to={`/post/${post.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">
              {post.excerpt}
            </p>
            <div className="flex items-center text-gray-300 text-xs">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{format(new Date(post.publishDate), 'MMM dd, yyyy')}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'small') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex space-x-3">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-20 h-20 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mt-2">
            <span>{format(new Date(post.publishDate), 'MMM dd')}</span>
            <span className="mx-1">•</span>
            <span>{post.readTime}m</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="p-6">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{format(new Date(post.publishDate), 'MMM dd')}</span>
            </div>
            <span className="text-orange-600 dark:text-orange-400 text-sm font-medium group-hover:underline">
              {t('readMore')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};