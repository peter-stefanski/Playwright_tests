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

  await mainPage.open();

  //Cookies

  await cookies.acceptCookies();

  // Tap a new card (first card)
  await expect(mainPage.products.first()).toBeVisible();

  const firstProductName = (
    await mainPage.productName.first().textContent()
  ).trim();

  await mainPage.mainPageProductViewButtons.first().click();

  // Chceck all information about in this card

  await expect(productPage.productName).toHaveText(firstProductName);
  await productPage.productQuantity.fill("5");
  await productPage.addToCartButton.click();
  await productPage.yourNameInput.fill("Peter");
  await productPage.emailAddressInput.fill("test@test.com");
  await productPage.addReviewHereInput.fill("That is amazing");
  await productPage.messageSubmitButton.click({ force: true });
});
