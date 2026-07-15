// export class MainPage {
//   constructor(page) {
//     this.page = page;

//     // Products
//     this.products = page.locator(".product-image-wrapper");

//     this.productName = page.locator(".product-image-wrapper .productinfo p");
//     this.mainPageProductViewButtons = page.locator(".choose ul li:first-child");
//     this.mainPageProductCardViewButton1 = page.locator(
//       ".choose ul li:first-child",
//     );

//     // Cart selector

//     this.cartSelectorMainPage = page.getByRole("link", { name: "Cart" });
//     // this.addProductToCart = page.locator('a[data-product-id="1"]');

//     // this.popupCard = page.locator(".modal - content");
//     // this.popupButtonCartAdd = page.locator("button.btn-success.close-modal");

//     // // After registration in main page
//     // this.userName = page
//     //   .locator("li", { hasText: "Logged in as" })
//     //   .locator("b");

//     // Cookies
//     //   this.cookieButton = page.locator("button.fc-cta-consent");
//     //   this.cookiePage = page.locator(".fc-dialog.fc-choice-dialog");
//     // }
//     this.addProductButton = page.locator('a[data-product-id="1"]');
//   }
//   async open() {
//     await this.page.goto("/");
//   }

//   //..................

//   async addProductToCart() {
//     await this.addProductButton.scrollIntoViewIfNeeded();
//     await this.addProductButton.click({ force: true });
//   }

//   // async addProductToCart() {
//   //   const product = this.addProductToCart.nth(1);

//   //   await product.scrollIntoViewIfNeeded();

//   //   await product.click({ force: true });
//   // }

//   async openCart() {
//     await this.cartSelectorMainPage.click();
//   }
// }
export class MainPage {
  constructor(page) {
    this.page = page;

    // Products
    this.products = page.locator(".product-image-wrapper");

    this.productName = page.locator(".product-image-wrapper .productinfo p");

    this.mainPageProductViewButtons = page.locator(".choose ul li:first-child");

    // Cart selector
    this.cartSelectorMainPage = page.getByRole("link", {
      name: "Cart",
    });

    // Product add to cart button
    // CHANGED:
    // Before:
    // this.addProductToCart = page.locator('a[data-product-id="1"]');
    //
    // After:
    // Locator has different name because method uses addProductToCart()

    this.addProductButton = page.locator('a[data-product-id="1"]');

    // Cart popup
    this.popupCard = page.locator(".modal-content");

    this.popupButtonCartAdd = page.locator("button.btn-success.close-modal");

    // After registration / login
    this.userName = page
      .locator("li", { hasText: "Logged in as" })
      .locator("b");

    // Cookies
    this.cookieButton = page.locator("button.fc-cta-consent");

    this.cookiePage = page.locator(".fc-dialog.fc-choice-dialog");
  }

  async open() {
    await this.page.goto("/");
  }

  // NEW:
  // Added business action instead of using locator directly in test
  async addProductToCart(index = 1) {
    const product = this.addProductButton.nth(index);

    await product.scrollIntoViewIfNeeded();

    await product.click({
      force: true,
    });
  }

  // NEW:
  // Navigation action moved from test to Page Object
  async openCart() {
    await this.cartSelectorMainPage.click();
  }
}
