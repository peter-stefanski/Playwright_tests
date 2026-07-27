import { test, expect } from "../fixtures/fixtures";

test("check product card", async ({ mainPage, productPage, cookies }) => {
  await test.step("Open main page and accept cookies", async () => {
    await mainPage.open();

    await cookies.acceptCookies();
  });

  await test.step("User selects first cart from the list", async () => {
    await expect(mainPage.products.first()).toBeVisible();

    const firstProductName = (await mainPage.productName.first().textContent()).trim();

    await mainPage.mainPageProductViewButtons.first().click();

    await expect(productPage.productName).toHaveText(firstProductName);
  });

  await test.step("Add quantity of product", async () => {
    await productPage.addToCart("5");
  });

  await test.step("User write a review", async () => {
    await productPage.addReview("Peter", "test@test.com", "That is amazing");
  });
});
