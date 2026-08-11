// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import user from '../../fixtures/user.json' with { type: 'json' };

// Given('the user is on the sign up page', async function () {
//   await this.page.goto('https://automationexercise.com/login');
//   await this.cookies.acceptCookies();

//   await expect(this.authPage.registrationHeading).toHaveText('New User Signup!');
// });

// When('the user enters valid registration data', async function () {
//   const email = this.randomValue.randomEmail;
//   const password = this.randomValue.randomPassword;

//   await this.authPage.startRegistration(user.name, email);
//   await this.registrationPage.fillRegistrationForm(user, password);
//   await this.registrationPage.submitRegistration();
// });

// Then('the user should be redirected to the sign in page', async function () {
//   await expect(this.page).toHaveURL(/account_created/);
// });

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import user from '../../fixtures/user.json' with { type: 'json' };

Given('the user is on the sign up page', async function () {
  await this.page.goto('https://automationexercise.com/login');
  await this.cookies.acceptCookies();
  await expect(this.authPage.registrationHeading).toHaveText('New User Signup!');
});

When('the user enters valid registration data', async function () {
  const email = this.randomValue.randomEmail;
  const password = this.randomValue.randomPassword;

  await this.authPage.startRegistration(user.name, email);
  await this.registrationPage.fillRegistrationForm(user, password);
});

When('the user submits the registration form', async function () {
  await this.registrationPage.submitRegistration();
});

Then('the user should see the account created page', async function () {
  await expect(this.page).toHaveURL(/account_created/);
});
