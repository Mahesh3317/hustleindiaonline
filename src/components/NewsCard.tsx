import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NewsCardProps {
  post: BlogPost;
  variant?: 'hero' | 'featured' | 'small' | 'list';
  showImage?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ 
  post, 
  variant = 'featured',
  showImage = true 
}) => {
  const { t } = useLanguage();

  // ✅ Add null/undefined check at the beginning
  if (!post) {
    return null; // or return a loading skeleton
  }

  if (variant === 'hero') {
    return (
      <Link to={`/post/${post.slug}`} className="group block h-full">
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
          {showImage && post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title || 'Blog post'}
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="mb-2">
              <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">
                {post.category || 'Uncategorized'}
              </span>
            </div>
            <h1 className="text-lg md:text-2xl font-bold text-white mb-2 line-clamp-3 leading-tight">
              {post.title || 'Untitled'}
            </h1>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">
              {post.excerpt || ''}
            </p>
            <div className="flex items-center text-gray-300 text-xs">
              <span>{post.author || 'Unknown Author'}</span>
              <span className="mx-2">•</span>
              <span>
                {post.publishDate 
                  ? format(new Date(post.publishDate), 'dd MMM, yyyy')
                  : 'Date not available'
                }
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'small') {
    return (
      <Link to={`/post/${post.slug}`} className="group block">
        <div className="flex space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
          {showImage && post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title || 'Blog post'}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0 group-hover:opacity-80 transition-opacity"
              loading="lazy"
            />
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-tight">
              {post.title || 'Untitled'}
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mt-2">
              <span>
                {post.publishDate 
                  ? format(new Date(post.publishDate), 'dd MMM')
                  : 'No date'
                }
              </span>
              <span className="mx-1">•</span>
              <span>{post.readTime || 0}m</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'list') {
    return (
      <Link to={`/post/${post.slug}`} className="group block">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
          <div className="flex space-x-4">
            {showImage && post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title || 'Blog post'}
                className="w-24 h-18 object-cover rounded-lg flex-shrink-0 group-hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-medium rounded">
                  {post.category || 'Uncategorized'}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
                {post.title || 'Untitled'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2">
                {post.excerpt || ''}
              </p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                <span>{post.author || 'Unknown Author'}</span>
                <span className="mx-2">•</span>
                <span>
                  {post.publishDate 
                    ? format(new Date(post.publishDate), 'dd MMM')
                    : 'No date'
                  }
                </span>
                <span className="mx-2">•</span>
                <span>{post.readTime || 0} min</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="group block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        {showImage && post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title || 'Blog post'}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-medium rounded">
              {post.category || 'Uncategorized'}
            </span>
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex-1">
            {post.title || 'Untitled'}
          </h3>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <span>
                {post.publishDate 
                  ? format(new Date(post.publishDate), 'dd MMM')
                  : 'No date'
                }
              </span>
              <span className="mx-1">•</span>
              <span>{post.readTime || 0}m</span>
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