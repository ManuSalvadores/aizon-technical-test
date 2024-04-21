export default class MainBar {
    mainBarLocators = {
        homeBtn: 'Home',
        contactBtn: 'Contact',
        aboutUsBtn: '[data-target=#videoModal]',
        cartBtn: '#cartur',
        loginBtn: '#login2',
        logoutBtn: '#logout2',
        signUpBtn: '#signin2',
        welcomeBtn: '#nameofuser'
    }

    openLoginModal() {
        cy.get(this.mainBarLocators.loginBtn).click()
    }

    openSignUpModal() {
        cy.get(this.mainBarLocators.signUpBtn).click()
    }

    openProductsCart() {
        cy.get(this.mainBarLocators.cartBtn).click()
    }

    logout() {
        cy.get(this.mainBarLocators.logoutBtn).click()
    }

    assertLoggedIn() {
        cy.get(this.mainBarLocators.welcomeBtn);
    }

    assertLoggedOut() {
        cy.get(this.mainBarLocators.loginBtn)
    }
}