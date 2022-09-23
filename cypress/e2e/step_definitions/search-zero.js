// cypress/e2e/step_definitions/search-zero.js

/// <reference types="cypress"/>

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given ('I open homepage zero bank', () => {
    cy.visit('http://zero.webappsecurity.com/')
});

When ('I search zero keyword', () => {
    cy.get('#searchTerm').click()
    cy.get('#searchTerm').type('zero{enter}')
});

Then ('I click zero pay bills', () => {
    cy.contains('Zero - Pay Bills').click()
});

Then ('I login with valid data', () => {
    cy.fixture("login-zero").then(user => {
        const username = user.username
        const password = user.password

        //add commands
        cy.login(username,password)
    })
    
});

Given ('I open pay bills page', () => {
    cy.url().should('include', '/bank/pay-bills.html')
});

When ('I input pay bills bank', () => {
    cy.fixture("input-paybills").then(paybills => {
        const payee = paybills.payee
        const account = paybills.account
        const amount = paybills.amount
        const date = paybills.date
        const description = paybills.description

        cy.bills(payee,account,amount,date,description)
    })
    
});

Then ('I Submit pay bills bank', () => {
    cy.get('#pay_saved_payees').click()
});