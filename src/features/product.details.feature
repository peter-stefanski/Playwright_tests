Feature: Product details

  Scenario: View product details
    Given the user is on the main page
    When the product page is open
    And the user changes the product quantity
    Then the user should see product details