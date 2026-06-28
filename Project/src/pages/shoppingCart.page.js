export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartPageProductCard = page.locator(#card_info);
    this.cartPageProductCardName = page.locator('a[href="/product_details/1"]');
    this.cartPageProductDeleteButton = page.locator('.cart_delete');
    this.cartPageProcessToCheckout = page.locator('.btn btn-default check_out');
  }

  async open() {
    await this.page.goto("/view_cart");
  }
}
