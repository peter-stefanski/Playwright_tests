import { test, expect } from "@playwright/test";
import user from "../fixtures/user.json";
import { AuthPage } from "../pages/authentication.page";
import { Cookies } from "../pages/cookies.page";
import { Registration } from "../pages/registration.page";
import { MainPage } from "../pages/mainPage.page";

test("login test", async ({ page }) => {
  const authPage = new AuthPage(page);
  const cookies = new Cookies(page);
  const registration = new Registration(page);
  const mainPage = new MainPage(page);

  await authPage.openAuth();
  await cookies.acceptCookies();

  await authPage.loginEmailInput.fill(user.email);
  await authPage.loginPasswordInput.fill(user.password);

  const [response] = await Promise.all([
    page.waitForResponse(
      (response) => response.url().includes("/") && response.status() === 200,
    ),
    authPage.loginSubmitButton.click({ force: true }),
  ]);

  expect(response.ok()).toBeTruthy();

  await expect(page).toHaveURL("https://automationexercise.com");

  await expect(page.getByText(`Logged in as ${user.name}`)).toBeVisible();
});
