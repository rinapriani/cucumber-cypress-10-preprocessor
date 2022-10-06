/// <reference types="cypress"/>

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const registerInvesnow = require('../page_object/register-invesnow')

    Given ('I open register page', () => {
        cy.visit('https://invesnow:invesnow2017@test-app.investamart.net/register')
        cy.get('h1').should('have.text', 'Register')
        cy.wait(5000)
    });


    When ("I enter email address {string}", (emailAdress) => {
        cy.fixture("invesnow-register").then(user => {
            let email = user[emailAdress]
            
            registerInvesnow.typeEmail(email)
            cy.pause()

        })

       
    });

    Then("I enter number phone {string}", (numberPhone)=> {
        cy.fixture("invesnow-register").then(user =>{
            let number = user[numberPhone]

            registerInvesnow.typeNumber(number)
        })
    })

    Then("I enter password {string}", (inputPassword)=> {
        cy.fixture("invesnow-register").then(user =>{
            let password = user[inputPassword]

            registerInvesnow.typePassword(password)
        })
    })


    Then('I enter confirmation password {string}', (inputPasswordConfirmation)=> {
        cy.fixture("invesnow-register").then(user =>{
            let passwordConfirmation = user[inputPasswordConfirmation]

            registerInvesnow.typeConfirmation(passwordConfirmation)
        })
    })


    Then('I click register button', () => {
        registerInvesnow.typeCheckbox()
        registerInvesnow.typeRegisterBtn()
    });
    
    Then('I generate otp code', () => {
        
    });

// it('Leave passport number in register form', () => {
//     Given('I open opening account form', () => {

//     })

//     Then('I fill in personal identity and leave passport number', () => {

//     })

//     Then('I fill domicile address', () => {

//     })

//     Then('I fill correspondence address', () => {

//     })

//     Then('I add bank account 1', () => {

//     })

//     Then('I fill another information', () => {

//     })

//     Then('I fill agreement', () => {

//     })

//     Then(' I click submit opening account')
// });

// it('Enter passport number less than 9 characters', () => {
//     Then ('Enter passport number less than 9 characters', () =>{

//     })
// });

// it('Enter passport number more than 9 characters', () => {
//     Then ('Enter passport number more than 9 characters', () => {

//     })
// });

// it('Register with valid data', () => {
//     Then('Enter a valid passport number')
// });