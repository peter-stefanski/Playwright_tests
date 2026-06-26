import { test, expect } from "../fixtures";
import { LoginPage } from "../pages/login.page";

test.describe.configure({ mode: "parallel" });

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
await 

});

