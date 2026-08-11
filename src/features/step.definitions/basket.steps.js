import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the user opens a product page', async function () {
  await this.mainPage.open();
  await this.cookies.acceptCookies();
});

When('the user adds a product to the basket', async function () {
  await this.mainPage.addProductToCart();
});

When('the user opens the shopping cart', async function () {
  await this.mainPage.openCart();
});

Then('the added product should be visible in the shopping cart', async function () {
  await expect(this.cartPage.productTable).toBeVisible();
});
