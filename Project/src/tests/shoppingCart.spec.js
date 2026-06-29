import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage.page";
import { CartPage } from "../pages/shoppingCart.page";
import { AuthPage } from "../pages/authentication.page";

test("Shopping Cart test", async ({ page }) => {
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const authentication = new AuthPage(page);

  await mainPage.open();

  //Cookies
  if ((await authentication.cookiePage.count()) > 0) {
    try {
      await authentication.acceptButton.click({ timeout: 2000 });
    } catch {}
  }
  //Test - add aproduct
  const product = mainPage.addProductToCart.nth(1);

  // here is hover available but for E2E test 'force' is acceptible
  await expect(product).toBeVisible();
  await product.scrollIntoViewIfNeeded();
  await product.click({ force: true });

  await expect(mainPage.cartSelectorMainPage).toBeVisible();
  await mainPage.cartSelectorMainPage.click({ timeout: 2000 });

  if (await mainPage.popupButtonCartAdd.isVisible()) {
    try {
      await mainPage.popupButtonCartAdd.click({ timeout: 2000 });
    } catch {}
  }

  await mainPage.cartSelectorMainPage.click();

  // test on shopping Cart page
  await expect(cartPage.productTable).toBeVisible();
});
