import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import user from '../../fixtures/user.json' with { type: 'json' };

Given('the user is on the sign in page', async function () {
  await this.page.goto('https://automationexercise.com/login');
  await this.cookies.acceptCookies();
});

When('the user enters valid credentials', async function () {
  await this.authPage.fillLoginForm(user.email, user.password);
  await this.authPage.submitLogin();
});

// When('the user enters valid credentials', async function () {
//   const [response] = await Promise.all([
//     this.page.waitForResponse(
//       (response) => response.url().includes('/') && response.status() === 200,
//     ),

//     this.authPage.fillLoginForm(user.email, user.password),
//     this.authPage.submitLogin(),
//   ]);

//   this.loginResponse = response;
// });

// Then('the user should be redirected to the main page', async function () {
//   expect(this.loginResponse.ok()).toBeTruthy();

//   await expect(this.page).toHaveURL('https://automationexercise.com');

//   await expect(this.authPage.loggedUser).toHaveText(user.name);
// });

Then('the user should be redirected to the main page', async function () {
  await expect(this.page).toHaveURL('https://automationexercise.com/');
  await expect(this.authPage.loggedUser).toHaveText(user.name);
});
