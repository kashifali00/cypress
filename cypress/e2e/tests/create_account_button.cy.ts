import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { LoginPage } from "../pages/LoginPageObjects";

let loginPage = new LoginPage()

Given("User browser automationparactice.com", () => {
    cy.visit("/")
})

When("User click on sign_in button", () => {
    loginPage.sign_in_button.should('be.visible').click()
})

And("User click on create account button", () => {
    loginPage.submitButton.should('be.visible').click()
})

Then("User should see an error message {}", (err) => {
    loginPage.error_message_invalid_email.should('have.text', "User should see an error message")
})
