Feature: user registration

Scenario: User signs up with valid registration data
Given the user is on the sign up page
When the user enters valid registration data
And the user submits the registration form
Then the user should see the account created page