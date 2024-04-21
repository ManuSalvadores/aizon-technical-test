export default class CheckOutModalPage {
    
    userData = {};

    checkoutModalLocators = {
        totalPrice: '#totalm',
        nameField: '#name',
        countryField: '#country',
        cityField: '#city',
        cardField: '#card',
        monthField: '#month',
        yearField: '#year',
        purchaseBtn: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    }

    fillCheckoutData(user) {
        cy.fixture('userData.json').then((userData) => {
            this.userData = userData[user]; 
            const { userName, country, city, creditCardNumber, month, year } = this.userData;

            cy.get(this.checkoutModalLocators.nameField).type(userName, {force: true});
            cy.get(this.checkoutModalLocators.countryField).type(country);
            cy.get(this.checkoutModalLocators.cityField).type(city);
            cy.get(this.checkoutModalLocators.cardField).type(creditCardNumber);
            cy.get(this.checkoutModalLocators.monthField).type(month);
            cy.get(this.checkoutModalLocators.yearField).type(year);
        })
    }

    completePurchase() {
        cy.get(this.checkoutModalLocators.purchaseBtn).click();
    }

    assertSummaryData() {
        const { userName, creditCardNumber } = this.userData;
        cy.contains(userName);
        cy.contains(creditCardNumber);
    }
}
