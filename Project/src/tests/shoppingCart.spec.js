import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage.page";
import { CartPage } from "../pages/shoppingCart.page";
import { AuthPage } from "../pages/authentication.page";
import { Cookies } from "../pages/cookies.page";

test("Shopping Cart test", async ({ page }) => {
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const authentication = new AuthPage(page);
  const cookies = new Cookies(page);

  await test.step("Open main page and accept cookies", async () => {
    await mainPage.open();
    await cookies.acceptCookies();
  });

  await test.step("Add product to cart", async () => {
    const product = mainPage.addProductToCart.nth(1);
    await product.scrollIntoViewIfNeeded();
    await product.click({ force: true });
  });

  await test.step("Navigate to shopping cart", async () => {
    await mainPage.cartSelectorMainPage.click();
  });

  await test.step("Verify cart page loaded", async () => {
    await expect(cartPage.productTable).toBeVisible();
  });
});
