import { test, expect } from '../fixtures/fixtures';
import user from '../fixtures/user.json';

test('login test', async ({ authPage, cookies, page }) => {
  let loginResponse;

  await authPage.openAuth();
  await cookies.acceptCookies();
  await authPage.fillLoginForm(user.email, user.password);

  await test.step('Send login form and wait for response', async () => {
    const [response] = await Promise.all([
      page.waitForResponse((response) => response.url().includes('/') && response.status() === 200),

      authPage.submitLogin(),
    ]);
    loginResponse = response;
  });

  await test.step('Check whether a server response is correct', async () => {
    expect(loginResponse.ok()).toBeTruthy();
  });

  await test.step('Check redirection to main page', async () => {
    await expect(page).toHaveURL('https://automationexercise.com');
  });

  await test.step('Check whether a user is logged in', async () => {
    await expect(authPage.loggedUser).toHaveText(user.name);
  });
});
