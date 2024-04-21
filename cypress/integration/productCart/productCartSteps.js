import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import MainBar from "../../support/pageElements/MainBar";
import HomePage from "../../support/pageObjects/homePage";
import ProductDetailsPage from "../../support/pageObjects/productDetailsPage";
import ProductCartPage from "../../support/pageObjects/productCartPage";

const mainBar = new MainBar();
const homepage = new HomePage();
const productDetailsPage = new ProductDetailsPage();
const productCartPage = new ProductCartPage()

Before({ tags: '@MOBILE' }, function () {
    cy.setViewportByTag('@MOBILE')
});

Before({ tags: '@DESKTOP' }, function () {
    cy.setViewportByTag('@DESKTOP')
});

Given('I am on the homepage', () => {
    cy.visit('https://www.demoblaze.com/');
});

When('I select a product to view its details', () => {
    homepage.selectRandomProductFromGrid();
});

And('I am on the product details page', () => {
    productDetailsPage.assertProductDetailsPage();
    productDetailsPage.getSelectedProduct().then((product) => {
        cy.wrap({ product }).as('product');
    });
});

And('I add the product to the cart', () => {
    productDetailsPage.addToCartProduct();
});

And('I navigate to the cart page', () => {
    mainBar.openProductsCart();
});

And('I verify that the product is in the cart', () => {
    cy.get('@product').then((product) => {
        productCartPage.assertProductIsAdded(product.product);
    })
});

And('I delete the product from the cart', () => {
    productCartPage.deleteProductFromCart();
});

Then('I should see that the cart is empty', () => {
    productCartPage.assertProductCartIsEmpty();
});