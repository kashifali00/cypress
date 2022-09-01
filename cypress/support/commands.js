// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
  Cypress.Commands.add('login', (email, password) => {
      console.log(`email : ${email}`)
      console.log(`password: ${password}`)
      cy.get('a[title=\'Log in to your customer account\']')
          .click()
      cy.get('#email')
          .type(email)
      cy.get('#passwd')
          .type(password)
      cy.get('button[id=\'SubmitLogin\'] span')
          .click()

  })



// This is child command

    Cypress.Commands.add('getText', { prevSubject: 'element'}, (element, options) => {

    cy.wrap(element).invoke('text').then((text) => {

        if(text === ''){
            cy.wrap(element).invoke('val')
        }else {
            cy.wrap(element).invoke('text')
        }
        })
    })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })