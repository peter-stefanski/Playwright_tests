import { test, expect } from "../fixtures/fixtures";
import user from "../fixtures/user.json";

test("User registration", async ({ authPage, cookies, registrationPage, randomValue }) => {
  const email = randomValue.randomEmail;

  const password = randomValue.randomPassword;

  await test.step("Open authentication page and accept cookies", async () => {
    await authPage.openAuth();

    await cookies.acceptCookies();
  });

  await test.step("Verify registration form is visible", async () => {
    await expect(authPage.registrationHeading).toHaveText("New User Signup!");
  });

  await test.step("Fill initial registration data", async () => {
    await authPage.startRegistration(user.name, email);
  });

  await test.step("Fill complete registration form", async () => {
    await registrationPage.fillRegistrationForm(user, password);
  });

  await test.step("Submit registration form", async () => {
    await registrationPage.submitRegistration();
  });
});
