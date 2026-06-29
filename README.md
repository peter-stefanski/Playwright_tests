# Automation Exercise Test Suite (Playwright)

## Project Overview

This project contains automated end-to-end tests for  
👉 https://automationexercise.com

The tests are written using **Playwright** and follow the **Page Object Model (POM)** structure.

The suite includes **4 main test scenarios**:

- Login functionality test
- Registration functionality test
- Product details verification test
- Shopping cart with added product test

---

## Project Structure

- `src/tests` → test specifications
- `src/pages` → Page Object Model (POM) files
- `playwright.config.js` → Playwright configuration file

---

## Prerequisites

Before running the tests, make sure you have installed:

- Node.js (LTS recommended)
- npm (comes with Node.js)
- Playwright (installed via project dependencies)

---

## How to Install Project

Navigate to the project root folder:


cd Project

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install
How to Run Tests

Run all tests:

npx playwright test

Run tests with UI mode:

npx playwright test --ui

Run a specific test file:

npx playwright test src/tests/login.spec.js
Test Scenarios Overview
1. Login Test

Verifies that a user can successfully log into the system using valid credentials.

2. Registration Test

Checks whether a new user can create an account and be redirected correctly.

3. Product Details Test

Validates product information such as:

product name
price
product quantity
product details page navigation
4. Shopping Cart Test

Ensures that:

product can be added to cart
product appears in cart page
quantity is displayed correctly
remove product functionality works
Page Object Model (POM)

This project uses the Page Object Model design pattern:

Each page has its own class
Locators are stored in page files
Tests contain only actions and assertions

Example structure:

MainPage → product listing page actions
ProductsPage → product details page actions
CartPage → shopping cart actions
AuthPage → login & registration actions
Notes
Always run npm install before first execution
Make sure Playwright browsers are installed
Tests must be executed inside the Project folder
Summary

This project demonstrates automated testing of a full e-commerce flow using Playwright:

authentication
registration
👉 product browsing
👉 shopping cart validation
