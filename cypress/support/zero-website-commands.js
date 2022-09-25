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
// Cypress.Commands.add('login', (email, password) => { ... })
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
Cypress.Commands.add('login', (username, password) => {
    zeroWebsite.typeUsername().type(username)
    zeroWebsite.typePassword().type(password)
    zeroWebsite.clickLogin()
    cy.url().should('include', '/bank/pay-bills.html')
})

Cypress.Commands.add('bills', (payee, account, amount, date, description) => {
    zeroWebiste.inputPaye().should('have.value', 'bofa')
    zeroWebiste.inputAccount().should('have.value', '5')
    zeroWebiste.inputAmount.type(amount)
    zeroWebiste.inputDate.type(date)
    cy.contains('11').click()
    zeroWebiste.inputDescription().type(description)
})