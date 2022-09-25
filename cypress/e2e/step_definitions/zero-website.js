// cypress/e2e/step_definitions/search-zero.js

/// <reference types="cypress"/>

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const zeroWebsite = require('../../e2e/page_object/search-zero')

Given ('I open website zero bank', () => {
    cy.visit('http://zero.webappsecurity.com/')
});

When ('I search zero', () => {
    // zeroWebsite.inputSearch().click()
    zeroWebsite.inputSearch()
    zeroWebsite.inputZero()
});

// Then ('I click zero pay bills', () => {
//     zeroWebsite.inputZero()
// });

Then ('I login this webiste', () => {
    cy.fixture("login-zero").then(user => {
        const username = user.username
        const password = user.password

        //add commands
        // cy.login(username,password)

        zeroWebsite.usernameInp()
        zeroWebsite.passwordInp()
        zeroWebsite.clickLogin()
        cy.url().should('include', '/bank/pay-bills.html')
        
    })
    
    
});

Given ('I open pay bills menu', () => {
    cy.url().should('include', '/bank/pay-bills.html')
});

When ('I input pay bills', () => {
    cy.fixture("input-paybills").then(paybills => {
        const payee = paybills.payee
        const account = paybills.account
        const amount = paybills.amount
        const date = paybills.date
        const description = paybills.description

        // cy.bills(payee,account,amount,date,description)
        zeroWebsite.inputPaye()
        zeroWebsite.inputAccount()
        zeroWebsite.inputAmount()
        zeroWebsite.inputDate()
        cy.contains('11').click()
        zeroWebsite.inputDescription()
    })
    
});

Then ('I Submit pay bills', () => {
    zeroWebsite.clickSave()
});