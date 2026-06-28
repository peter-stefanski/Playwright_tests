import { test } from "@playwright/test";
import user from "../fixtures/user.json";
import { AuthPage } from "../pages/authentication.page";

test("login test", async ({ page }) => {
  const authPage = new AuthPage(page);

  await authPage.openAuth();

  if ((await authPage.cookiePage.count()) > 0) {
    try {
      await authPage.acceptButton.click({ timeout: 2000 });
    } catch {}
  }

  await authPage.loginEmailInput.fill(user.email);
  await authPage.loginPasswordInput.fill(user.password);

  await authPage.loginSubmitButton.click();
});
