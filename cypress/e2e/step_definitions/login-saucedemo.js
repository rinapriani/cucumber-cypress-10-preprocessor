import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const pageLoginSaucedemo = require('../../e2e/page_object/page-login-saucedemo')

Given('A user opens the login page', () => {
    cy.visit('https://www.saucedemo.com/')
});

When('A user enter the username {string}', (username) => {
    pageLoginSaucedemo.typeUsername(username)
});

Then('A user enter the password {string}', (password)=> {
    pageLoginSaucedemo.typePassword(password)
});

Then('A user clicks on the login button', () => {
    pageLoginSaucedemo.clickLogin()
});

Then('A user will be logged in', () => {
    cy.url().should('include', '/inventory.html')
});

//write a failed login just create this code
Then('A user will be receiving a failed message', () => {
    pageLoginSaucedemo.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})