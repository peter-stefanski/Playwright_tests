export class MainPage {
  constructor(page) {
    this.page = page;

    //this.productsGrid = new CartPage(page);

    // Products
    this.mainPageProductCard1 = page.locator(".product-image-wrapper").nth(0);
    this.mainPageProductAddButton1 = page.locator('[data-product-id="1"]');
    this.mainPageProductCardViewButton1 = page.locator(
      ".choose ul li:first-child",
    );

    // Cookie popup
    this.cookieButton = page.locator("button.fc-cta-consent");
    this.cookiePage = page.locator(".fc-dialog.fc-choice-dialog");
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
