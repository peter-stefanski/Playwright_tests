export class Registration {
  constructor(page) {
    this.page = page;

    //ENTER ACCOUNT INFORMATIOMN
    this.registrationAccountTitle = page.locator(
      '//h2[text()="Enter Account Information"]',
    );
    this.registrationRadioButtonTitle = page.locator("#id_gender1").click();
    this.registrationName = page.locator('input[data-qa="name"]');
    this.registrationEmail = page.locator('input[data-qa="email"]');
    this.registrationPassword = page.locator('input[data-qa="email"]');

    this.registrationDateOfBirthDay = page.locator('input[data-qa="email"]');
    this.registrationDateOfBirthMonth = page.locator('input[data-qa="email"]');
    this.registrationDateOfBirthYear = page.locator('input[data-qa="email"]');

    //ADDRESS INFORMATION
    this.registrationAddressTitle = page.locator(
      '//h2[text()="Address Information"]',
    );
    this.registrationFirstName = page.locator('input[data-qa="first_name"]');
    this.registrationLastName = page.locator('input[data-qa="last_name"]');
    this.registrationCompany = page.locator('input[data-qa="company"]');
    this.registrationAdress = page.locator('input[data-qa="address"]');
    this.registrationAdress2 = page.locator('input[data-qa="address2"]');
    this.registrationCountry = page.locator('input[data-qa="country"]');
    this.registrationState = page.locator('input[data-qa="state"]');
    this.registrationCity = page.locator('input[data-qa="city"]');
    this.registrationZipcode = page.locator('input[data-qa="zipcode"]');
    this.registrationMobileNumber = page.locator(
      'input[data-qa="mobile_number"]',
    );
    this.registrationCreateAccountButton = page.locator(
      'input[data-qa="create-account"]',
    );
  }

  async open() {
    await this.page.goto("/signup");
  }
}
