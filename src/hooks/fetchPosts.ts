import { client } from './contentfulClient';
import { BlogPost } from '../types';

export const fetchPosts = async (limit = 10, category?: string, featured?: boolean): Promise<BlogPost[]> => {
  try {
    const query: any = {
      content_type: 'blogPost',
      limit,
      order: '-sys.createdAt',
    };

    if (category) query['fields.category'] = category;
    if (featured !== undefined) query['fields.featured'] = featured;

    const response = await client.getEntries(query);

    return response.items.map((item: any) => ({
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
    }));
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    return [];
  }
};
