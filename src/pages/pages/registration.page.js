export class Registration {
  constructor(page) {
    this.page = page;

    this.registrationAccountTitle = page.locator(
      '//*[@id="form"]//h2/b[contains(text(),"Enter Account Information")]',
    );
    this.registrationRadioButtonTitle = page.locator('#id_gender1');

    this.registrationName = page.locator('input[data-qa="name"]');
    this.registrationEmail = page.locator('input[data-qa="email"]');
    this.registrationPassword = page.locator('input[data-qa="password"]');

    this.registrationDateOfBirthDay = page.locator('select[data-qa="days"]');
    this.registrationDateOfBirthMonth = page.locator('select[data-qa="months"]');
    this.registrationDateOfBirthYear = page.locator('select[data-qa="years"]');

    this.registrationAddressTitle = page.locator('//h2[text()="Address Information"]');
    this.registrationFirstName = page.locator('input[data-qa="first_name"]');
    this.registrationLastName = page.locator('input[data-qa="last_name"]');

    this.registrationCompany = page.locator('input[data-qa="company"]');
    this.registrationAdress = page.locator('input[data-qa="address"]');
    this.registrationAdress2 = page.locator('input[data-qa="address2"]');
    this.registrationCountry = page.locator('select[data-qa="country"]');
    this.registrationState = page.locator('input[data-qa="state"]');
    this.registrationCity = page.locator('input[data-qa="city"]');
    this.registrationZipcode = page.locator('input[data-qa="zipcode"]');
    this.registrationMobileNumber = page.locator('input[data-qa="mobile_number"]');
    this.registrationCreateAccountButton = page.locator('button[data-qa="create-account"]');
  }

  async open() {
    await this.page.goto('/signup');
  }

  async fillRegistrationForm(user, password) {
    await this.registrationRadioButtonTitle.check();

    await this.registrationPassword.fill(password);

    await this.registrationDateOfBirthDay.selectOption({
      value: '15',
    });

    await this.registrationDateOfBirthMonth.selectOption('March');

    await this.registrationDateOfBirthYear.selectOption('1990');

    await this.registrationFirstName.fill(user.name);

    await this.registrationLastName.fill('Wolker');

    await this.registrationCompany.fill('NameOfCompany');

    await this.registrationAdress.fill('5 Madison Street');

    await this.registrationAdress2.fill('8308 Front Street North');

    await this.registrationCountry.selectOption('United States');

    await this.registrationState.fill('New York');

    await this.registrationCity.fill('New York');

    await this.registrationZipcode.fill('10023');

    await this.registrationMobileNumber.fill('+1 5052072801');
  }

  async submitRegistration() {
    await this.registrationCreateAccountButton.click({
      force: true,
    });
  }
}
