// cypress/e2e/step_definitions/login.js

/// <reference types="cypress"/>

import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";

Given ('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include', '/login.html')
});

When ('I submit login', () => {
    //todo
    cy.get('#user_login').type('username')
    cy.get('#user_password').clear()
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()
});

Then ('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
});