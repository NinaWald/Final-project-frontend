import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export const fetchProducts = async () => {
  const response = await client.getEntries({ content_type: 'flowerWebshop' });
  return response.items;
};
