describe.skip("to test window object ", () => {
    it("check url ", () => {
       cy.location('hostname').should('eq', "automationparactice.com")
       cy.location('pathname').should('eq', "/index.php")
       cy.location('protocol').should('eq','http')
    })


})