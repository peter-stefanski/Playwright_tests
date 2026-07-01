import { test } from "@playwright/test";
import user from "../fixtures/user.json";
import { AuthPage } from "../pages/authentication.page";
import { Cookies } from "../pages/cookies.page";

test("login test", async ({ page }) => {
  const authPage = new AuthPage(page);
  const cookies = new Cookies(page);

  await authPage.openAuth();

  await cookies.acceptCookies();

  await authPage.loginEmailInput.fill(user.email);
  await authPage.loginPasswordInput.fill(user.password);

  await authPage.loginSubmitButton.click();

  //add check - test cases - reduraction - cookies URL - validate / remove all timeouts /
});
