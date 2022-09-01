describe("login functionality", () => {
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
})