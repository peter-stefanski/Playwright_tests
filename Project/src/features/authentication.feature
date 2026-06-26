Feature: Authentication

Scenario: User sign in with valid credentials
Given the user is on the sign in page
When the user enters valid credentials
Then the user should be redirected to the main page

Scenario: User signs up with valid registration data
Given the user is on the sign up page
When the user enters valid registration data
Than the user should be redirected to the sign in page