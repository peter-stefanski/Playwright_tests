const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const user = require('../../fixtures/user.json');

Given('the user is on the sign in page', async function () {
  await this.authPage.openAuth();

  await this.cookies.acceptCookies();
});

When('the user enters valid credentials', async function () {
  await this.authPage.fillLoginForm(user.email, user.password);

  await this.authPage.submitLogin();
});

Then('the user should be redirected to the main page', async function () {
  await expect(this.page).toHaveURL('https://automationexercise.com');

  await expect(this.authPage.loggedUser).toHaveText(user.name);
});

// import { test, expect } from '../fixtures/fixtures';
// import user from '../fixtures/user.json';

// test('login test', async ({ authPage, cookies, page }) => {
//   let loginResponse;

//   await authPage.openAuth();
//   await cookies.acceptCookies();
//   await authPage.fillLoginForm(user.email, user.password);

//   await test.step('Send login form and wait for response', async () => {
//     const [response] = await Promise.all([
//       page.waitForResponse((response) => response.url().includes('/') && response.status() === 200),

//       authPage.submitLogin(),
//     ]);
//     loginResponse = response;
//   });

//   await test.step('Check whether a server response is correct', async () => {
//     expect(loginResponse.ok()).toBeTruthy();
//   });

//   await test.step('Check redirection to main page', async () => {
//     await expect(page).toHaveURL('https://automationexercise.com');
//   });

//   await test.step('Check whether a user is logged in', async () => {
//     await expect(authPage.loggedUser).toHaveText(user.name);
//   });
// });
