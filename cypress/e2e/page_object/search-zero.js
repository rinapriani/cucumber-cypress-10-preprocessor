const user = require('../../fixtures/login-zero.json')
const paybills = require('../../fixtures/input-paybills.json')

class zeroWebsite{

    element = {
        searchField: () => cy.get('#searchTerm').type('zero{enter}'),
        zeroKeyword:() => cy.contains('Zero - Pay Bills').click(),
        inputUsername: () => cy.get('#user_login').type(user.username),
        inputPassword: () => cy.get('#user_password').type(user.password),
        submitBtn : () => cy.get('[type ="submit"]'),

        payeInput: () => cy.get('#sp_payee').select(paybills.payee),
        accountInput: () => cy.get('#sp_account').select(paybills.account),
        amountInput: () =>  cy.get('input[name="amount"]').type(paybills.amount),
        dateInput: () => cy.get('input[name="date"]').type(paybills.date),
        descInput: () => cy.get('#sp_description').type(paybills.description),
        saveBtn: () => cy.get('#pay_saved_payees').click()

    }
    //login
    inputSearch(){
        this.element.searchField();
    }

    inputZero(){
        this.element.zeroKeyword();
    }

    usernameInp(){
        this.element.inputUsername();
    }

    passwordInp(){
        this.element.inputPassword();
    }

    clickLogin(){
        this.element.submitBtn().click();
    }

    //input pay bills
    inputPaye(){
        this.element.payeInput();
    }

    inputAccount(){
        this.element.accountInput();
    }

    inputAmount(){
        this.element.amountInput();
    }

    inputDate(){
        this.element.dateInput();
    }

    inputDescription(){
        this.element.descInput();
    }

    clickSave(){
        this.element.saveBtn();
    }

}

module.exports = new zeroWebsite();