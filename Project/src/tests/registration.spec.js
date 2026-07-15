import { test, expect } from "@playwright/test";
import { Registration } from "../business/pages/registration.page"; // CHANGED: renamed class
import { AuthPage } from "../business/pages/authentication.page";
import { Cookies } from "../business/pages/cookies.page";
import { RandomValue } from "../core/helpers/randomValue";
import user from "../fixtures/user.json";

test("User registration", async ({ page }) => {
  const authentication = new AuthPage(page);

  const registrationPage = new Registration(page);
  // CHANGED: class name changed from Registration -> RegistrationPage

  const cookies = new Cookies(page);

  const randomValue = new RandomValue(page);

  const email = randomValue.randomEmail;

  const password = randomValue.randomPassword;

  await test.step("Open authentication page and accept cookies", async () => {
    await authentication.openAuth();

    await cookies.acceptCookies();
  });

  await test.step("Verify registration form is visible", async () => {
    await expect(authentication.registrationHeading).toHaveText(
      "New User Signup!",
    );
  });

  await test.step("Fill initial registration data", async () => {
    await authentication.startRegistration(user.name, email);
  });

  await test.step("Fill complete registration form", async () => {
    await registrationPage.fillRegistrationForm(user, password);

    // CHANGED:
    // Removed around 20 lines of:
    // registrationPage.xxx.fill()
    // registrationPage.xxx.selectOption()
    // registrationPage.xxx.check()
    //
    // They are now inside RegistrationPage
  });

  await test.step("Submit registration form", async () => {
    await registrationPage.submitRegistration();

    // CHANGED:
    // Before:
    // await registrationPage.registrationCreateAccountButton.click()
    //
    // Now:
    // Page Object handles the action
  });
});
