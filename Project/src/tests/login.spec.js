import { test, expect } from "@playwright/test";
import user from "../fixtures/user.json";
import { AuthPage } from "../business/pages/authentication.page";
import { Cookies } from "../business/pages/cookies.page";

test("login test", async ({ page }) => {
  const authPage = new AuthPage(page);
  const cookies = new Cookies(page);
  let loginResponse;

  await test.step("Open login page and accept cookies", async () => {
    await authPage.openAuth();
    await cookies.acceptCookies();
  });

  // await test.step("Complete the form details", async () => {
  //   await authPage.loginEmailInput.fill(user.email);
  //   await authPage.loginPasswordInput.fill(user.password);
  // });

  await authPage.fillLoginForm(user.email, user.password);

  await test.step("Send login form and wait for response", async () => {
    const [response] = await Promise.all([
      page.waitForResponse(
        (response) => response.url().includes("/") && response.status() === 200,
      ),
      // authPage.loginSubmitButton.click({ force: true }),
      authPage.submitLogin(),
    ]);
    loginResponse = response;
  });

  await test.step("Check whether a server response is correct", async () => {
    expect(loginResponse.ok()).toBeTruthy();
  });

  await test.step("Check redirection to main page", async () => {
    await expect(page).toHaveURL("https://automationexercise.com");
  });

  await test.step("Check whether a user is logged in", async () => {
    // await expect(page.getByText(`Logged in as ${user.name}`)).toBeVisible();
    await expect(authPage.loggedUser).toHaveText(user.name);
  });
});
