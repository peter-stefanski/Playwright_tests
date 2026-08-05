import { test, expect } from '@playwright/test';

test('@api Get products list', async ({ request }) => {
  const response = await request.get('/api/productsList');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});
