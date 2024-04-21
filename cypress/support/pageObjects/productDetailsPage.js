export default class ProductDetailsPage {
    
    ProductDetailsPageLocators = {
        productTitle: '.name',
        productPrice: '.price-container',
        productDescription: '#more-information',
        addToCartBtn: '.btn.btn-success.btn-lg'
    }

    assertProductDetailsPage() {
        cy.get(this.ProductDetailsPageLocators.productTitle);
        cy.get(this.ProductDetailsPageLocators.productPrice);
        cy.get(this.ProductDetailsPageLocators.productDescription);
    }

    getSelectedProduct() {
        return cy.get(`h2${this.ProductDetailsPageLocators.productTitle}`) 
          .invoke('text')
          .then((productTitleText) => {
            return productTitleText.trim();
          });
      }

    addToCartProduct() {
        cy.get(this.ProductDetailsPageLocators.addToCartBtn).click();
    }
}