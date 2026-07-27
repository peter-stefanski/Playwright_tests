import { test, expect } from "../fixtures/fixtures";

test("Shopping Cart test", async ({ mainPage, cartPage, cookies }) => {
  await test.step("Open main page and accept cookies", async () => {
    await mainPage.open();
    await cookies.acceptCookies(); // not a test! beforeAll
  });

  await test.step("Add product to cart", async () => {
    await mainPage.addProductToCart();
  });

  await test.step("Navigate to shopping cart", async () => {
    await mainPage.openCart();
  });

  await test.step("Verify cart page loaded", async () => {
    await expect(cartPage.productTable).toBeVisible();
  });
});
