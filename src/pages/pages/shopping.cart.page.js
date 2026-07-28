export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartPageProductCard = page.locator('#cart_info');

    this.cartPageProductCardName = page.locator('a[href="/product_details/1"]');

    this.cartPageProductDeleteButton = page.locator('.cart_delete');

    this.cartPageProcessToCheckout = page.locator('.check_out');

    this.productTable = page.locator('#cart_info');

    this.removeCardButton = page.locator('a.cart_quantity_delete');
  }

  async open() {
    await this.page.goto('/view_cart');
  }
}
