import { createClient } from 'contentful';

const client = createClient({
  space: 'knfxiszb0317',
  accessToken: '0fsM6xWglAt5nDSsnl_ZyjBqWayj1AnC9bVgAbbX5YM'
});

export const fetchProducts = async () => {
  const response = await client.getEntries({ content_type: 'product' });
  return response.items;
};
