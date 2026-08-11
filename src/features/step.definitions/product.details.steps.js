import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the user is on the main page', async function () {
  await this.mainPage.open();
  await this.cookies.acceptCookies();
});

When('the product page is open', async function () {
  await expect(this.mainPage.products.first()).toBeVisible();

  const firstProductName = (await this.mainPage.productName.first().textContent()).trim();

  await this.mainPage.mainPageProductViewButtons.first().click();

  await expect(this.productPage.productName).toHaveText(firstProductName);
});

Then('the user changes the product quantity', async function () {
  await this.productPage.addToCart('5');
});

Then('the user should see product details', async function () {
  await this.productPage.addReview('Peter', 'test@test.com', 'That is amazing');
});
