import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'HustleIndiaOnline - Latest News, Tech, Astrology & More',
  description = 'Get latest news, tech updates, astrology predictions, cricket scores, and lifestyle content in Hindi, English, Marathi, Tamil, and Telugu.',
  keywords = ['India news', 'tech news', 'astrology', 'cricket', 'lifestyle', 'hindi news', 'breaking news'],
  image = '/og-image.jpg',
  url = 'https://hustleindia.online',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  category
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    '@id': url,
    name: title,
    description,
    url,
    ...(type === 'article' && {
      headline: title,
      image,
      author: {
        '@type': 'Person',
        name: author || 'HustleIndiaOnline Team'
      },
      publisher: {
        '@type': 'Organization',
        name: 'HustleIndiaOnline',
        logo: {
          '@type': 'ImageObject',
          url: '/logo.png'
        }
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      articleSection: category
    })
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="HustleIndiaOnline" />
      <meta property="og:locale" content="hi_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && category && (
        <meta property="article:section" content={category} />
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};