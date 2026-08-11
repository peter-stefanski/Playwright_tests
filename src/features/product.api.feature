Feature: Products API 

Scenario: Get products list successfully
When the user requests the products list
Then the API response should be successful
And the API response status should be 200
