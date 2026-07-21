import { test as base, expect } from "playwright/test";
import { AuthPage } from "../pages/pages/authentication.page";
import { Cookies } from "../pages/pages/cookies.page";
import { MainPage } from "../pages/pages/main.page";
import { ProductsPage } from "../pages/pages/product.page";
import { RandomValue } from "../core/helpers/random.value";
import { Registration } from "../pages/pages/registration.page";
import { CartPage } from "../pages/pages/shopping.cart.page";

export const test = base.extend({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  cookies: async ({ page }, use) => {
    await use(new Cookies(page));
  },
  randomValue: async ({ page }, use) => {
    await use(new RandomValue(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new Registration(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});
export { expect };
