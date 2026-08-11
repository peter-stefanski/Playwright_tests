export class MainPage {
  constructor(page) {
    this.page = page;

    this.products = page.locator('.product-image-wrapper');

    this.productName = page.locator('.product-image-wrapper .productinfo p'); // parent locator -> maybe later

    this.mainPageProductViewButtons = page.locator('.choose ul li:first-child');

    this.cartSelectorMainPage = page.getByRole('link', {
      name: 'Cart',
    });

    this.addProductButton = page.locator('a[data-product-id="1"]');

    this.popupCard = page.locator('.modal-content');

    this.popupButtonCartAdd = page.locator('button.btn-success.close-modal');

    this.userName = page.locator('li', { hasText: 'Logged in as' }).locator('b');
  }

  async open() {
    await this.page.goto('https://automationexercise.com/');
  }

  async addProductToCart(index = 1) {
    const product = this.addProductButton.nth(index);

    await product.scrollIntoViewIfNeeded();

    await product.click({
      force: true,
    });
  }

  async openCart() {
    await this.cartSelectorMainPage.click();
  }
}
