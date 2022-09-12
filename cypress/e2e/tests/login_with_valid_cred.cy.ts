import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import {LoginPage} from "../pages/LoginPageObjects" 
import {DashboardPage} from "../pages/DashboardPage";


let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();


Given("User is on Automationpractice.com", () => {
    cy.visit("/")
})

When("User click on Sign button", () => {
    loginPage.sign_in_button.should('be.visible').click();
    
})

And("User type valid username", () => {
    if(Cypress.env("email") && Cypress.env("password")){
        let user = {
            email : Cypress.env("email"),
            password : Cypress.env("password")
        }

        loginPage.username_field.should('be.visible').type(user.email)
    }else{
        cy.fixture("loginwithvalidcred").then(loginData => {
            loginPage.username_field.should('be.visible').type(loginData.username)
        })
    }
})

And("User type valid password", () => {
    if(Cypress.env("email") && Cypress.env("password")){
        let user = {
            email : Cypress.env("email"),
            password : Cypress.env("password")
        }
        loginPage.password_field.should('be.visible').type(user.password)
    }else {
        cy.fixture("loginwithvalidcred").then(loginData => {
            loginPage.password_field.should('be.visible').type(loginData.password)
        })
    }
    

})

And("User click on login button", () => {
    loginPage.login_button.should('be.visible').click();

})

Then("User should be able to see sign out link", () => {
    dashboardPage.logout_button.should('contain', 'Sign out')
})
