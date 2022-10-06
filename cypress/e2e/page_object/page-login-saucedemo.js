const user = require('../../fixtures/saucedemo.json')
class pageLoginSaucedemo{

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(user.username);
    }

    typePassword(password){
        this.elements.passwordInput().type(user.password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }


}

module.exports = new pageLoginSaucedemo();