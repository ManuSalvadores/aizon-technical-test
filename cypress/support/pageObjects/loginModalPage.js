export default class LoginModalPage {

    loginModalLocators = {
        usernameField: '#loginusername',
        passwordField: '#loginpassword',
        loginBtn: '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    };


    fillLoginForm(username, password) {
        cy.get(this.loginModalLocators.usernameField).type(username, { force: true }).then(() => {
            cy.wait(500)
        })
        cy.get(this.loginModalLocators.passwordField).type(password)
        cy.get(this.loginModalLocators.loginBtn).click();
    }
}
