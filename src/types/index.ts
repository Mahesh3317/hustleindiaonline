export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: string;
  author: string;
  publishDate: string;
  featured: boolean;
  readTime: number;
  language: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface PriceData {
  gold: number;
  silver: number;
  lastUpdated: string;
}

export interface BreakingNews {
  id: string;
  title: string;
  slug: string;
  timestamp: string;
}