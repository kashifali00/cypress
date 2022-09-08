import {
    Given,
    When,
    And,
    Then,
} from "@badeball/cypress-cucumber-preprocessor"

Given("User is on Automationpractice.com", () => {
    cy.visit("/")
})

When("User click on Sign button", () => {
    cy.get('a[title=\'Log in to your customer account\']').click()
    
})

And("User type valid username", () => {
    cy.fixture("loginwithvalidcred").then(loginData => {
        cy.get('#email').type(loginData.username)
    })

})

And("User type valid password", () => {
    cy.fixture("loginwithvalidcred").then(loginData => {
        cy.get('#passwd').type(loginData.password)
    })

})

When("User click on login button", () => {
    cy.get("button[id='SubmitLogin'] span").click()

})

Then("User should be able to see sign out link", () => {
    cy.get("a[title='Log me out']").should('contain', 'Sign out')
})


