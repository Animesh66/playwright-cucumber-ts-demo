export const config = {
  baseUrl: process.env.BASE_URL ?? 'http://localhost:5173',
  apiUrl: process.env.API_URL ?? 'http://localhost:3000/api',
  headless: process.env.HEADLESS ? process.env.HEADLESS === 'true' : false,
};
