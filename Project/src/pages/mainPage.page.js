export class MainPage {
  constructor(page) {
    this.page = page;

    // Products
    this.products = page.locator(".product-image-wrapper");

    this.productName = page.locator(".product-image-wrapper .productinfo p");
    this.mainPageProductViewButtons = page.locator(".choose ul li:first-child");
    this.mainPageProductCardViewButton1 = page.locator(
      ".choose ul li:first-child",
    );

    // Cart selector

    this.cartSelectorMainPage = page.getByRole("link", { name: "Cart" });
    this.addProductToCart = page.locator('a[data-product-id="1"]');
    this.popupButtonCartAdd = page.locator("button.btn-success.close-modal");

    // Cookies
    this.cookieButton = page.locator("button.fc-cta-consent");
    this.cookiePage = page.locator(".fc-dialog.fc-choice-dialog");
  }
  async open() {
    await this.page.goto("/");
  }
}
