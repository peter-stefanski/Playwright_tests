export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productName = page.locator('.product-information').locator('h2').first();

    this.productQuantity = page.locator('#quantity');

    this.addToCartButton = page.locator('button.btn.btn-default.cart');

    this.yourNameInput = page.locator('input#name');

    this.emailAddressInput = page.locator('input#email');

    this.addReviewHereInput = page.locator('textarea#review');

    this.messageSubmitButton = page.locator('button#button-review');
  }

  async addToCart(quantity) {
    await this.productQuantity.fill(quantity);

    await this.addToCartButton.click({
      force: true,
    });
  }

  async addReview(name, email, message) {
    await this.yourNameInput.fill(name);

    await this.emailAddressInput.fill(email);

    await this.addReviewHereInput.fill(message);

    await this.messageSubmitButton.click({
      force: true,
    });
  }
}
