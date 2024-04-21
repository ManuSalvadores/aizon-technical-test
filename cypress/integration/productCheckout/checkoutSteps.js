import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import ProductCartPage from "../../support/pageObjects/productCartPage";
import CheckOutModalPage from "../../support/pageObjects/checkoutModalPage";

const productCartPage = new ProductCartPage();
const checkoutModalPage = new CheckOutModalPage();


Before({ tags: '@MOBILE' }, function () {
    cy.setViewportByTag('@MOBILE')
});

Before({ tags: '@DESKTOP' }, function () {
    cy.setViewportByTag('@DESKTOP')
});

Given('I am on the product cart page with an item', (tags) => {
    cy.selectRandomProductAndNavigateToCart();
})

When('I proceed to checkout', () => {
    productCartPage.proceedToCheckOut();
})

And('I fill in the checkout details with {string} data', (user) => {
    checkoutModalPage.fillCheckoutData(user)
})

And('I complete the purchase', () => {
    checkoutModalPage.completePurchase();
})

Then('I should see a success modal with {string} summary data', (user) => {
    checkoutModalPage.assertSummaryData();
})