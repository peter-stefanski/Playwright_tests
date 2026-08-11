// import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
// import { chromium, request } from '@playwright/test';

// let browser;

// BeforeAll(async function () {
//   browser = await chromium.launch({
//     headless: true,
//   });
// });

// Before(async function () {
//   this.browser = browser;
//   this.context = await browser.newContext();
//   this.page = await this.context.newPage();

//   this.cookies = new Cookies(this.page);

//   this.request = await request.newContext({
//     baseURL: 'https://automationexercise.com',
//   });
// });

// After(async function () {
//   await this.request?.dispose();
//   await this.context?.close();
// });

// AfterAll(async function () {
//   await browser?.close();
// });

import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, request } from '@playwright/test';

import { AuthPage } from '../../pages/pages/authentication.page.js';
import { Cookies } from '../../pages/pages/cookies.page.js';
import { MainPage } from '../../pages/pages/main.page.js';
import { ProductsPage } from '../../pages/pages/product.page.js';
import { Registration } from '../../pages/pages/registration.page.js';
import { CartPage } from '../../pages/pages/shopping.cart.page.js';
import { RandomValue } from '../../core/helpers/random.value.js';

setDefaultTimeout(30 * 1000);

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: true,
  });
});

Before(async function () {
  this.browser = browser;
  this.context = await browser.newContext();
  this.page = await this.context.newPage();

  // tutaj inicjalizujesz POM
  this.authPage = new AuthPage(this.page);
  this.cookies = new Cookies(this.page);
  this.mainPage = new MainPage(this.page);
  this.productPage = new ProductsPage(this.page);
  this.registrationPage = new Registration(this.page);
  this.cartPage = new CartPage(this.page);
  this.randomValue = new RandomValue(this.page);

  this.request = await request.newContext({
    baseURL: 'https://automationexercise.com',
  });
});

After(async function () {
  await this.request?.dispose();
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});
