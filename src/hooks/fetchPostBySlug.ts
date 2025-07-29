import { client } from './contentfulClient';
import { BlogPost } from '../types';

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) return null;

    const item = response.items[0];

    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      coverImage: item.fields.coverImage?.fields?.file?.url ? `https:${item.fields.coverImage.fields.file.url}` : '',
      content: item.fields.content,
      excerpt: item.fields.excerpt,
      tags: item.fields.tags || [],
      category: item.fields.category,
      author: item.fields.author,
      publishDate: item.fields.publishDate || item.sys.createdAt,
      featured: item.fields.featured || false,
      readTime: item.fields.readTime || 5,
      language: item.fields.language || 'hi',
    };
  } catch (error) {
    console.error('Error fetching post by slug from Contentful:', error);
    return null;
  }
};
