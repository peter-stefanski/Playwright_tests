// Selectors for Authentication page (Login + Registration sections)

export class AuthPage {
  constructor(page) {
    this.page = page;
    this.loginHeading = page.locator('//h2[text()="Login to your account"]');
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
    this.loginSubmitButton = page.locator('button[data-qa="login-button"]');
    this.registrationHeading = page.locator('//h2[text()="New User Signup!"]');
    this.registrationNameInput = page.locator('input[data-qa="signup-name"]');
    this.registrationEmailInput = page.locator('input[data-qa="signup-email"]');
    this.registrationSubmitButton = page.locator(
      'button[data-qa="signup-button"]',
    );
    this.cookieButton = page.locator(".fc-button-label");
    this.cookiePage = page.locator(".fc-dialog fc-choice-dialog");
  }
  async open() {
    await this.page.goto("/signup");
  }
}
