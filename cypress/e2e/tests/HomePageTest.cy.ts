
/// <reference types="Cypress" />

import { data } from "cypress/types/jquery";
import { HomePage } from "../pages/HomePageObjects";


let homepage = new HomePage();

describe.skip("Verify HomePage functionality", () => {

    it("Contact us button visiblity on HomePage", () => {
        homepage.contact_us_button
            .should("be.visible")
            .should('have.text', 'Contact us')
        
            
    })

    it("Sign in button visibility on Homepage", () => {
        homepage.login_button
            .should('be.visible')
        homepage.login_button.contains('Sign in')

        
    })

    it("Cart button visibility on Homepage", () => {
        homepage.cart_button
            .should('be.visible')
        
    })

    it("Women Tab visibility on Homepage", () => {
        homepage.women_tab
            .should('be.visible')
        
    })

    it("Dresses tab visibility on Homepage", () => {
        homepage.dresses_tab
            .should('be.visible')
        

    })

    it("T-Shirts tab visibility on Homepage", () => {
        homepage.tshirt_tab
            .should('be.visible')
        
    })

    it("create account button visibility on Homepage", () => {
        homepage.create_account_button
            .should('be.visible')
        
    })

    it("read value from example.json", () => {

        cy.fixture('example.json').then((data) => {
            cy.log(data.name)
            cy.log(data.email)
        })
    })


})



