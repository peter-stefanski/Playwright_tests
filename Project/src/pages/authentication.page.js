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
  }

  async openAuth() {
    await this.page.goto("/signup");
  }

  async acceptCookies() {
    try {
      if (await this.cookiePage.isVisible({ timeout: 2000 })) {
        await this.acceptButton.click({ timeout: 2000 });
      }
    } catch {}
  }
}
