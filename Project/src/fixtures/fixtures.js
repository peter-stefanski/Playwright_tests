import { test as base, expect } from "playwright/test";
import { AuthPage } from "../business/pages/authentication.page";
import { Cookies } from "../business/pages/cookies.page";
import { MainPage } from "../business/pages/main.page";
import { ProductsPage } from "../business/pages/product.page";
import { RandomValue } from "../core/helpers/random.value";
import { Registration } from "../business/pages/registration.page";
import { CartPage } from "../business/pages/shopping.cart.page";

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
