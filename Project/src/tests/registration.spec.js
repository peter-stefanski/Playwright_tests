import { test, expect } from "@playwright/test";
import { Registration } from "../pages/registration.page";
import { AuthPage } from "../pages/authentication.page";
import { MainPage } from "../pages/mainPage.page";

test("User registration", async ({ page }) => {
  const authentication = new AuthPage(page);
  const registrationPage = new Registration(page);
  const cookiesCard = new MainPage(page);

  //Random email
  const email = `test${Date.now()}@example.com`;

  //Random password
  const randomPassword = Math.floor(Math.random() * 100000);
  const password = `test${randomPassword}`;

  const name = "Peter";

  //User first must go to authentication page and choose one of option: New user Signup!

  await authentication.open();
  if (await cookiesCard.cookiePage.count()) {
    await cookiesCard.cookieButton.click();
  }
  await page.waitForTimeout(2000);
  await expect(authentication.registrationHeading).toHaveText(
    "New User Signup!",
  );
  await authentication.registrationNameInput.fill(name);
  await authentication.registrationEmailInput.fill(email);
  await page.waitForTimeout(2000);
  await authentication.registrationSubmitButton.click();

  // Refilling all registration form

  //await registrationPage.registrationRadioButtonTitle.check("#id_gender1");
  await page.waitForTimeout(2000);
  // await expect(registrationPage.registrationAccountTitle).toHaveText(
  //   "ENTER ACCOUNT INFORMATION",
  // );

  await expect(registrationPage.registrationName).toHaveValue(name);
  await expect(registrationPage.registrationEmail).toHaveValue(email);

  await registrationPage.registrationPassword.fill(password);

  await registrationPage.registrationDateOfBirthDay.selectOption({
    value: "15",
  });
  await registrationPage.registrationDateOfBirthMonth.selectOption("March");
  await registrationPage.registrationDateOfBirthYear.selectOption("1990");

  // await expect(registrationPage.registrationAddressTitle).toHaveText("ADDRESS INFORMATION",);
  await registrationPage.registrationFirstName.fill(name);
  // await expect(registrationPage.registrationFirstName).toHaveValue(name);
  await registrationPage.registrationLastName.fill("Wolker");
  await registrationPage.registrationCompany.fill("NameOfCompany");
  await registrationPage.registrationAdress.fill("5 Madison Street");
  await registrationPage.registrationAdress2.fill("8308 Front Street North");
  await registrationPage.registrationCountry.selectOption("United States");
  await registrationPage.registrationState.fill("New York");
  await registrationPage.registrationCity.fill("New York");
  await registrationPage.registrationZipcode.fill("10023");
  await registrationPage.registrationMobileNumber.fill("+1 5052072801");
  await registrationPage.registrationCreateAccountButton.click({ force: true });
});
