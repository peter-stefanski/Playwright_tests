export class MainPage {
  constructor(page) {
    this.page = page;

    //this.productsGrid = new CartPage(page);

    // Products
    this.products = page.locator(".product-image-wrapper");

    this.productName = page.locator(".product-image-wrapper .productinfo p");
    this.mainPageProductViewButtons = page.locator(".choose ul li:first-child");
    this.mainPageProductCardViewButton1 = page.locator(
      ".choose ul li:first-child",
    );

    // Cookie popup
    this.cookieButton = page.locator("button.fc-cta-consent");
    this.cookiePage = page.locator(".fc-dialog.fc-choice-dialog");
  }
  async open() {
    await this.page.goto("/");
  }
}

// export class MainPage {
//   constructor(page) {
//     this.page = page;
//     this.productsLink = page.getByRole("link", { name: "Products" });
//   }

//   async open() {
//     await this.page.goto("/");
//   }

//   async goToProducts() {
//     await this.productsLink.click();
//   }
// }
