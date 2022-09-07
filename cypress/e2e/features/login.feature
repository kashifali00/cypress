Feature: User Login Functionality

    As a automationpractice.com user, I want to login, so that I can make new order

Scenario: login with valid credentails

Given User is on Automationpractice.com
When  User click on Sign button
And   User type valid username
And   User type valid password
And   User click on login button
Then  User should be able to see sign out button

