export class HomePage {
    
    get contact_us_button(): any {
        return cy.get('#contact-link > a')
    }
    
    get login_button(): any {
        return cy.get('a[title=\'Log in to your customer account\']')
    }
    
    get cart_button(): any {
        return cy.get('a[title=\'View my shopping cart\']')
    }
    
    get women_tab(): any {
        return cy.get('a[title=\'Women\']')
    }
    
    get dresses_tab(): any {
        return cy.get('a[title=Dresses]')
    }
    
    get tshirt_tab(): any {
        return cy.get('a[title=T-shirts]')
    }
    
    get create_account_button() {
        return cy.get('button[id=\'SubmitCreate\'] span')
    }

}
    
    



