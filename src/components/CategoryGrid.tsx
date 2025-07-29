import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../constants/categories';

export const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.slice(0, 10).map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="group p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="text-center">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {category.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};