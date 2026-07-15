// import { test, expect } from "@playwright/test";
// import { MainPage } from "../business/pages/mainPage.page";
// import { CartPage } from "../business/pages/shoppingCart.page";
// import { Cookies } from "../business/pages/cookies.page";

// test("Shopping Cart test", async ({ page }) => {
//   const mainPage = new MainPage(page);
//   const cartPage = new CartPage(page);
//   const cookies = new Cookies(page);

//   await test.step("Open main page and accept cookies", async () => {
//     await mainPage.open();
//     await cookies.acceptCookies();
//   });

//   // await test.step("Add product to cart", async () => {
//   //   const product = mainPage.addProductToCart.nth(1);
//   //   await product.scrollIntoViewIfNeeded();
//   //   await product.click({ force: true });
//   // });

//   //....................new test

//   await test.step("Add product to cart", async () => {
//     await mainPage.addProductToCart();
//   });
//   //.........................new test
//   // await test.step("Navigate to shopping cart", async () => {
//   //   await mainPage.cartSelectorMainPage.click();
//   // });

//   await test.step("Verify cart page loaded", async () => {
//     await expect(cartPage.productTable).toBeVisible();
//   });

//   //.................new test
//   await test.step("Navigate to shopping cart", async () => {
//     await mainPage.openCart();
//     console.log(page.url());
//   });
// });

import { test, expect } from "@playwright/test";
import { MainPage } from "../business/pages/mainPage.page";
import { CartPage } from "../business/pages/shoppingCart.page";
import { Cookies } from "../business/pages/cookies.page";

test("Shopping Cart test", async ({ page }) => {
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const cookies = new Cookies(page);

  await test.step("Open main page and accept cookies", async () => {
    await mainPage.open();
    await cookies.acceptCookies();
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
