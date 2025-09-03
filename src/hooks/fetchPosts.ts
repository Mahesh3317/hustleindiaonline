import { client } from './contentfulClient';
import { BlogPost } from '../types';

export const fetchPosts = async (
  limit = 10,
  category?: string,
  featured?: boolean,
  language: string = 'en'
): Promise<BlogPost[]> => {
  try {
    const query: any = {
      content_type: 'blogPost',
      limit,
      order: '-sys.createdAt',
      include: 2, // Include linked assets (images)
    };

    // Add language filter if specified
    if (language) {
      query['fields.language'] = language;
    }

    if (category) query['fields.category'] = category;
    if (featured !== undefined) query['fields.featured'] = featured;

    console.log('Contentful Query:', query); // Debug log

    const response = await client.getEntries(query);
    
    console.log('Contentful Response:', response); // Debug log

    return response.items.map((item: any) => {
      console.log('Item fields:', item.fields); // Debug log
      
      // Handle image URL extraction
      let coverImageUrl = '';
      if (item.fields.featuredImage) {
        if (item.fields.featuredImage.fields?.file?.url) {
          coverImageUrl = `https:${item.fields.featuredImage.fields.file.url}`;
        }
      } else if (item.fields.coverImage) {
        if (item.fields.coverImage.fields?.file?.url) {
          coverImageUrl = `https:${item.fields.coverImage.fields.file.url}`;
        }
      }

      // Create the blog post object with proper field mapping
      const blogPost: BlogPost = {
        id: item.sys.id,
        title: item.fields.blogTitle || item.fields.title || 'Untitled', // Try multiple field names
        slug: item.fields.slug || item.sys.id, // Fallback to ID if no slug
        coverImage: coverImageUrl,
        content: item.fields.content || item.fields.blogContent || '',
        excerpt: item.fields.excerpt || item.fields.description || item.fields.summary || '',
        tags: item.fields.tags || [],
        category: item.fields.category || 'General',
        author: item.fields.author || 'Unknown Author',
        publishDate: item.fields.publishDate || item.fields.publishedDate || item.sys.createdAt,
        featured: item.fields.featured || false,
        readTime: item.fields.readTime || item.fields.readingTime || 5,
        language: item.fields.language || 'en',
      };

      console.log('Mapped BlogPost:', blogPost); // Debug log
      return blogPost;
    });
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    return [];
  }
};