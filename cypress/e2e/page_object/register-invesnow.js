/// <reference types="cypress"/>

// const user = require('../../fixtures/invesnow-register.json')

class registerInvesnow{

    element = {
        inputEmail: () => cy.get('#email'),
        numberInput: () => cy.get('#mobile_phone').type(),
        passwordInput: () => cy.get('#password'),
        confirmationPasswordInput:() => cy.get('#password_confirmation'),
        checkboxBtn: () => cy.get('[type ="checkbox"]').click(),
        registerBtn: () => cy.contains('Daftar').click()
    }

    typeEmail(email){
        this.element.inputEmail();
    }

    typeNumber(){
        this.element.numberInput();
    }

    typePassword(){
        this.element.passwordInput();
    }

    typeConfirmation(){
        this.element.confirmationPasswordInput();
    }

    typeCheckbox(){
        this.element.checkboxBtn();
    }

    typeRegisterBtn(){
        this.element.registerBtn();
    }


}

module.exports = new registerInvesnow();