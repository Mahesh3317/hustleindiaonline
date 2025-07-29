import { createClient } from 'contentful';

export const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'your-space-id',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'your-access-token',
});
