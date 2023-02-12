// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'mutexn-test',
  apiKey: process.env.API_KEY,
});
