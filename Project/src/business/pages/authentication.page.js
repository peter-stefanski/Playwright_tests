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

    this.cookiePage = page.locator('[role="dialog"].fc-choice-dialog');
    this.acceptButton = page.locator(".fc-cta-consent.fc-primary-button");
    this.manageButton = page.locator(
      ".fc-cta-manage-options.fc-secondary-button",
    );
    this.confirmButton = page.locator(".fc-confirm-choices.fc-primary-button");
    this.overlay = page.locator(".fc-dialog-overlay");
    this.loggedUser = page
      .locator("li", { hasText: "Logged in as" })
      .locator("b");
  }

  async openAuth() {
    await this.page.goto("/signup");
  }

  async fillLoginForm(email, password) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
  }

  async submitLogin() {
    await this.loginSubmitButton.click({ force: true });
  }

  async startRegistration(name, email) {
    await this.registrationNameInput.fill(name);
    await this.registrationEmailInput.fill(email);
    await this.registrationSubmitButton.click({ force: true });
  }
}
