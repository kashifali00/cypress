Feature: Create account Functionality

    As a user, I want to create an account, so that I can use the application

Scenario: Validate error message, if user register new user without an email

Given User browser automationparactice.com
When  User click on sign_in button
And  User click on create account button
Then  User should see an error message "Invalid email address."
