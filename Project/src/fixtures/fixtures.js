import { test, expect } from "@playwright/test";

test("main page", async ({ page }, use) => {
  await page.goto("/");
  await use(page);
});
