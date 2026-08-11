import { setWorldConstructor } from '@cucumber/cucumber';

export class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;

    this.authPage = null;
    this.cookies = null;
    this.mainPage = null;
    this.productPage = null;
    this.registrationPage = null;
    this.cartPage = null;
    this.randomValue = null;

    this.request = null;
  }
}

setWorldConstructor(CustomWorld);
