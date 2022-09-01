declare namespace Cypress {
    interface Chainable {
        getText(): any
        login(email:string, password: string): void
        
    }
}