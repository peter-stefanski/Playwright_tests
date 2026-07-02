import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage.page";
import { ProductsPage } from "../pages/product.page";
import { AuthPage } from "../pages/authentication.page";
import { Cookies } from "../pages/cookies.page";

test("check product card", async ({ page }) => {
  const productPage = new ProductsPage(page);
  const mainPage = new MainPage(page);
  const authentication = new AuthPage(page);
  const firstProduct = mainPage.products.first();
  const cookies = new Cookies(page);
  //User selects first cart from the list

  await test.step("Open main page and accept cookies", async () => {
    await mainPage.open();
    await cookies.acceptCookies();
  });
  await test.step("User selects first cart from the list", async () => {
    await expect(mainPage.products.first()).toBeVisible();
    const firstProductName = (
      await mainPage.productName.first().textContent()
    ).trim();
    await mainPage.mainPageProductViewButtons.first().click();
    await expect(productPage.productName).toHaveText(firstProductName);
  });

  await test.step("Add quantity of product", async () => {
    await productPage.productQuantity.fill("5");
    await productPage.addToCartButton.click();
  });

  await test.step("User write a review", async () => {
    await productPage.yourNameInput.fill("Peter");
    await productPage.emailAddressInput.fill("test@test.com");
    await productPage.addReviewHereInput.fill("That is amazing");
    await productPage.messageSubmitButton.click({ force: true });
  });
});
