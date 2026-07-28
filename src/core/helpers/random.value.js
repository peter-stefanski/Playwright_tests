export class RandomValue {
  constructor(page) {
    this.page = page;

    this.randomEmail = `test${Date.now()}@example.com`;

    const randomPassword = Math.floor(Math.random() * 100000);
    this.randomPassword = `test${randomPassword}`;
  }
}
// test CI
// test CI
// test CI
// test CI
