# Automation Exercise Test Suite (Playwright)

## Project Overview

This project contains automated end-to-end tests for

https://automationexercise.com

The tests are written using Playwright and follow the Page Object Model (POM) design pattern.

The framework was refactored using Page Object Pattern together with DRY, KISS and YAGNI principles to improve readability, code reuse and maintainability.

The suite includes 4 main test scenarios:

- Login functionality test
- Registration functionality test
- Product details verification test
- Shopping cart with added product test

---

## Project Structure

- src/tests → test specifications
- src/business/pages → Page Object classes containing business actions
- src/core → reusable framework components and helper classes
- src/fixtures → test data
- src/features → Gherkin feature files
- playwright.config.js → Playwright configuration file

---

## Prerequisites

Before running the tests, make sure you have installed:

- Node.js (LTS recommended)
- npm (comes with Node.js)
- Playwright (installed via project dependencies)

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

## How to Run Tests

Run all tests:

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

---

## Test Scenarios Overview

### Login Test

Verifies that a user can successfully log into the system using valid credentials.

### Registration Test

Checks whether a new user can create an account and complete the registration process successfully.

### Product Details Test

Validates product information such as:

- product name
- product quantity
- product details page navigation
- product review submission

### Shopping Cart Test

Ensures that:

- a product can be added to the shopping cart
- the shopping cart page opens correctly
- the added product is displayed in the cart

---

## Page Object Model (POM)

This project uses the Page Object Model design pattern.

Each page has its own class and responsibility:

- MainPage → homepage actions
- AuthPage → login and registration actions
- Registration → registration form actions
- ProductsPage → product details actions
- CartPage → shopping cart actions

Locators and reusable business actions are stored inside Page Object classes.

Tests contain only business flow and assertions.

---

## Design Principles

The framework was refactored according to the following principles:

- **DRY (Don't Repeat Yourself)** – repeated actions were extracted into reusable methods.
- **KISS (Keep It Simple)** – each page class has a single responsibility.
- **YAGNI (You Aren't Gonna Need It)** – only functionality required by existing tests was implemented.

---

## Notes

- Always run `npm install` before first execution.
- Make sure Playwright browsers are installed.
- Tests must be executed inside the project folder.

---

## Summary

This project demonstrates automated UI testing of an e-commerce application using:

- Playwright
- Page Object Model (POM)
- Layered project structure
- DRY principle
- KISS principle
- YAGNI principle

The project is organized to make the test suite easier to maintain, extend and reuse.
