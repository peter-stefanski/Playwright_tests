import { test, expect } from "@playwright/test";
import { Registration } from "../pages/registration.page";
import { AuthPage } from "../pages/authentication.page";
import { MainPage } from "../pages/mainPage.page";
import { Cookies } from "../pages/cookies.page";
import { TIMEOUT } from "node:dns";
import { RandomValue } from "../pages/randomValue.page";
import user from "../fixtures/user.json";

test("User registration", async ({ page }) => {
  const authentication = new AuthPage(page);
  const registrationPage = new Registration(page);
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
    await authentication.registrationNameInput.fill(user.name);
    await authentication.registrationEmailInput.fill(email);
    await authentication.registrationSubmitButton.click({ force: true });
  });

  await test.step("Fill complete registration form", async () => {
    await registrationPage.registrationRadioButtonTitle.check();

    await expect(registrationPage.registrationName).toHaveValue(user.name);
    await expect(registrationPage.registrationEmail).toHaveValue(email);

    await registrationPage.registrationPassword.fill(password);

    await registrationPage.registrationDateOfBirthDay.selectOption({
      value: "15",
    });
    await registrationPage.registrationDateOfBirthMonth.selectOption("March");
    await registrationPage.registrationDateOfBirthYear.selectOption("1990");

    await registrationPage.registrationFirstName.fill(user.name);
    await registrationPage.registrationLastName.fill("Wolker");
    await registrationPage.registrationCompany.fill("NameOfCompany");
    await registrationPage.registrationAdress.fill("5 Madison Street");
    await registrationPage.registrationAdress2.fill("8308 Front Street North");
    await registrationPage.registrationCountry.selectOption("United States");
    await registrationPage.registrationState.fill("New York");
    await registrationPage.registrationCity.fill("New York");
    await registrationPage.registrationZipcode.fill("10023");
    await registrationPage.registrationMobileNumber.fill("+1 5052072801");
  });
  await test.step("Submit registration form", async () => {
    await registrationPage.registrationCreateAccountButton.click({
      force: true,
    });
  });
});
