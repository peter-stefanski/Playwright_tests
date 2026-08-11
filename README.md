# Automation Exercise Test Suite (Playwright & Cucumber)

## Project Overview

This project contains automated end-to-end tests for:

https://automationexercise.com

The tests are written using Playwright and Cucumber and follow the Page Object Model (POM) design pattern.

The framework was refactored using Page Object Pattern together with DRY, KISS and YAGNI principles to improve readability, code reuse and maintainability.

The project contains Playwright tests and additional Cucumber tests written using Gherkin syntax.

The suite includes the following test scenarios:

* Login functionality test
* Registration functionality test
* Product details verification test
* Shopping cart with added product test

---

## Project Structure

* src/tests → Playwright test specifications
* src/features → Cucumber feature files
* src/business/pages → Page Object classes containing business actions
* src/core → reusable framework components and helper classes
* src/fixtures → test data
* playwright.config.js → Playwright configuration file
* package.json → project scripts and dependencies

Cucumber tests use feature files, step definitions and the same Page Objects as the Playwright tests.

---

## Prerequisites

Before running the tests, make sure you have installed:

* Node.js (LTS recommended)
* npm (comes with Node.js)
* Playwright
* Cucumber

---

## How to Install Project

Navigate to the project root folder:

```bash
cd Project
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## How to Run Playwright Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test src/tests/login.spec.js
```

Run API tests:

```bash
npm run test:api
```

---

## How to Run Cucumber Tests

Cucumber tests are additional end-to-end tests using Gherkin feature files.

Run all Cucumber tests:

```bash
npm test
```

This command runs all feature files from:

```text
src/features/
```

Cucumber can also be run directly:

```bash
npm run test:cucumber
```

or:

```bash
npx cucumber-js "src/features/**/*.feature"
```

Example result:

```text
2 hooks (2 passed)
5 scenarios (5 passed)
28 steps (28 passed)
```

---

## Running Specific Cucumber Tests

A specific feature can be run by providing its path.

For example:

```bash
npx cucumber-js src/features/authentication.feature
```

or:

```bash
npx cucumber-js src/features/registration.feature
```

Cucumber tests can also be run using tags.

For example, login tests use the `@login` tag:

```bash
npx cucumber-js --tags "@login"
```

Registration tests use the `@register` tag:

```bash
npx cucumber-js --tags "@register"
```

---

## Test Scenarios Overview

### Login Test

Verifies that a user can successfully log into the system using valid credentials.

### Registration Test

Checks whether a new user can create an account and complete the registration process successfully.

### Product Details Test

Validates product information such as:

* product name
* product quantity
* product details page navigation
* product review submission

### Shopping Cart Test

Ensures that:

* a product can be added to the shopping cart
* the shopping cart page opens correctly
* the added product is displayed in the cart

---

## Page Object Model (POM)

This project uses the Page Object Model design pattern.

Each page has its own class and responsibility:

* MainPage → homepage actions
* AuthPage → login and registration actions
* RegistrationPage → registration form actions
* ProductsPage → product details actions
* CartPage → shopping cart actions

Locators and reusable business actions are stored inside Page Object classes.

Tests contain the business flow and assertions, while Page Objects handle interaction with the application.

Cucumber step definitions also use the existing Page Objects to avoid duplicating the same actions.

---

## Design Principles

The framework was refactored according to the following principles:

* **DRY (Don't Repeat Yourself)** – repeated actions were extracted into reusable methods.
* **KISS (Keep It Simple)** – each page class has a single responsibility.
* **YAGNI (You Aren't Gonna Need It)** – only functionality required by existing tests was implemented.

---

## Notes

* Always run `npm install` before first execution.
* Make sure Playwright browsers are installed.
* Tests must be executed inside the project folder.
* Playwright tests are located in `src/tests`.
* Cucumber feature files are located in `src/features`.
* Cucumber tests use Playwright and the existing Page Objects.

---

## Summary

This project demonstrates automated UI testing of an e-commerce application using:

* Playwright
* Cucumber
* Gherkin
* Page Object Model (POM)
* DRY principle
* KISS principle
* YAGNI principle

The project contains both Playwright tests and additional Cucumber tests.

Playwright is used for the main test suite, while Cucumber provides an additional BDD approach using readable feature files and scenarios.

The project is organized to make the test suite easier to maintain, extend and reuse.

The project is organized to make the test suite easier to maintain, extend and reuse.
