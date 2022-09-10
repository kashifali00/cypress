import { Given,When,And,Then } from "../../../node_modules/@badeball/cypress-cucumber-preprocessor/lib/methods";

import {LoginPage} from "../../e2e/pages/LoginPageObjects" 
import {DashboardPage} from "../../e2e/pages/DashboardPage";


let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();


Given("User is on Automationpractice.com", () => {
    cy.visit("/")
})

When("User click on Sign button", () => {
    loginPage.sign_in_button.should('be.visible').click();
    
})

And("User type valid username", () => {
    cy.fixture("loginwithvalidcred").then(loginData => {
        loginPage.username_field.should('be.visible').type(loginData.username)
    })

})

And("User type valid password", () => {
    cy.fixture("loginwithvalidcred").then(loginData => {
        loginPage.password_field.should('be.visible').type(loginData.password)
    })

})

And("User click on login button", () => {
    loginPage.login_button.should('be.visible').click();

})

Then("User should be able to see sign out link", () => {
    dashboardPage.logout_button.should('contain', 'Sign out')
})
