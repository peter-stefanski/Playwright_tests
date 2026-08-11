import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('the user requests the products list', async function () {
  this.response = await this.request.get('/api/productsList');
});
Then('the API response should be successful', async function () {
  expect(this.response.ok()).toBeTruthy();
});
Then('the API response status should be 200', async function () {
  expect(this.response.status()).toBe(200);
});
