Feature: Basket

Background: Given the user is logged into the application

Scenario: Add product to basket
Given the user opens a product page
When the user adds a product to the basket
Than the product should appear in the basket