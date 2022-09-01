
describe("AutomationPractice HomePage", () => {
    it("Verify that Contact Us button on HomePage", () => {
        cy.get('#contact-link > a')
            .should('be.visible');
        cy.get('#contact-link > a')
            .getText().then((text : string) => {
                expect(text).to.equal("Contactus")
        })
        
    })
    
    it("Verify Sign in button on home", () => {
        cy.get('a[title=\'Log in to your customer account\']')
            .should('be.visible')
        
        
        cy.get('a[title=\'Log in to your customer account\']')
            .should('have.attr', 'class')
            .and('equal', 'login')
    })
    
    it("Verify logo image on HomePage", () => {
        cy.get('img[alt=\'My Store\']')
            .should('be.visible')
            .should('have.attr', 'src')
            .and('equal', 'http://automationpractice.com/img/logo.jpg')
    })
    
    
    it("Verify Cart button on HomePage", () => {
        cy.get('a[title=\'View my shopping cart\']')
            .should('be.visible')
            .click()
        cy.get('#order_step > li')
            .should(($lis) => {
                expect($lis).to.have.length(5)
                expect($lis.eq(0)).to.contain('Summary')
                expect($lis.eq(1)).to.contain('Sign in')
                expect($lis.eq(2)).to.contain('Address')
                expect($lis.eq(3)).to.contain('Shipping')
                expect($lis.eq(4)).to.contain('Payment')
            })
        
        cy.get('.alert.alert-warning')
            .should(($text) => {
                expect($text.text()).to.contain('Your shopping cart is empty.')
            })
        
        
        cy.get('a[title=\'View my shopping cart\'] b')
            .then(($Cart) => {
                
                const text = $Cart.text();
                expect(text).to.eq('Cart')
            })
    })
    
    xit("verify search button and functionality", () => {
        cy.get('#search_query_top').should('be.visible')
        
        cy.get('#search_query_top').clear().type('Women').should('have.value', 'Women')
        
        cy.get('button[type=\'submit\'][name=\'submit_search\']')
            .should('be.visible')
        
        cy.get('button[type=\'submit\'][name=\'submit_search\']').click()
        
        cy.get('.heading-counter')
            .should('have.value', '0 results have been found.')
    })
    
    it("Verify Women, Dresses, T-Shirt tab on homepage", () => {
        cy.get('.sf-menu > li > a').then((list: any) => {
            expect(list).to.have.length(3)
            expect(list.eq(0)).to.contain('Women')
            expect(list.eq(1)).to.contain('Dresses')
            expect(list.eq(2)).to.contain('T-shirts')
        })
        
        cy.get('a[title=\'Women\']').click();
        
    })
    
    it("Verify Women category price in ascending order", () => {
        cy.get('#selectProductSort')
            .select('price:asc').should('have.value', 'price:asc')
        
        
        cy.get('#selectProductSort')
            .find('option:selected')
            .should('have.text', "Price: Lowest first")
    })
    
    it("click on Tops link text", () => {
        cy.get('#categories_block_left').contains('Tops')
            .click();
    })
})

