export class Cookies {
  constructor(page) {
    this.cookiePage = page.locator('[role="dialog"].fc-choice-dialog');
    this.acceptButton = page.locator('.fc-cta-consent.fc-primary-button');
  }

  async acceptCookies() {
    if (await this.cookiePage.isVisible()) {
      await this.acceptButton.click();
    }
  }
}
