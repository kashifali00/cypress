import { any } from "cypress/types/bluebird"
import { findIndex, forEach } from "cypress/types/lodash"

let loginData : any
describe.skip("login functionality", () => {
    it("login with valid user & password", () => {
        cy.login("tautomation184@gmail.com", "Admin@123")
        cy.get('a[title=\'View my customer account\'] span')
            .should('have.text', 'kashif ali')
        cy.get('a[title=\'Log me out\']')
            .should('be.visible')
        cy.get('a[title=\'Log me out\']')
            .click()
        cy.get('a[title=\'Log in to your customer account\']')
            .should('be.visible')
    })

    it("login with valid credentials using fixture", () => {
        cy.get('a[title=\'Log in to your customer account\']').click()
        cy.fixture('loginwithvalidcred.json').then(user => {
            cy.get('#email').type(user.username)
      cy.get('#passwd').type(user.password)
      cy.get('button[id=\'SubmitLogin\'] span').click()
        })
    })
})

let getFiles = [
    {
        name :"loginwithvalidcred",
        context : "validLogin"
    },
    {
        name:"loginwithinvalidcred",
        context: "invalidLogin"
    }
]

getFiles.forEach(fixture => {
    describe(fixture.context, () => {
        beforeEach(function (){
            cy.visit("./")
            cy.fixture(fixture.name).then(userLoginDetail => {
                loginData = userLoginDetail
            })
        })
        
        it("login with" + fixture.context, () => {

            cy.get('a[title=\'Log in to your customer account\']').click()
            cy.get('#email').type(loginData.username)
            cy.get('#passwd').type(loginData.password)
            cy.get('button[id=\'SubmitLogin\'] span').click()
            
        })
    })
})