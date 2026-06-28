export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productCards = page.locator(".product-image-wrapper");
    this.addButtons = page.locator("[data-product-id]");
    this.viewButtons = page.locator(".choose ul li:first-child");
  }
}
