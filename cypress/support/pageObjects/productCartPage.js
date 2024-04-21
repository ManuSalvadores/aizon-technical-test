export default class ProductCartPage {
    
    productCartPageLocators = {
        productCart: '#tbodyid',
        deleteBtn: 'Delete',
        checkoutBtn: '.btn.btn-success'
    }

    assertProductIsAdded(productTitleText) {
        cy.contains(productTitleText);
    }

    assertProductCartIsEmpty() {
        cy.get(this.productCartPageLocators.productCart).should('not.be.visible');
    }

    deleteProductFromCart() {
        cy.contains(this.productCartPageLocators.deleteBtn).click();
    }

    proceedToCheckOut() {
        cy.get(this.productCartPageLocators.checkoutBtn).click();
    }
}