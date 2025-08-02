import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../types';
import { fetchPostBySlug } from '../hooks/fetchPostBySlug';
import { fetchPosts } from '../hooks/fetchPosts';
import { SEOHead } from '../components/SEOHead';
import { NewsCard } from '../components/NewsCard';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      setLoading(true);

      const postData = await fetchPostBySlug(slug);
      setPost(postData);

      if (postData?.category) {
        const allPosts = await fetchPosts(10, postData.category);
        const filtered = allPosts.filter(p => p.slug !== slug);
        setRelatedPosts(filtered.slice(0, 4));
      }

      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!post) return <div className="p-4">Post not found.</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <SEOHead title={post.title} description={post.excerpt} />

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {post.publishDate} • {post.readTime} min read
      </p>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((relatedPost) => (
              <NewsCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
