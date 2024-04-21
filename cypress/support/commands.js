import HomePage from "./pageObjects/homePage";
import ProductDetailsPage from "./pageObjects/productDetailsPage"
import MainBar from "./pageElements/MainBar";

Cypress.Commands.add('selectRandomProductAndNavigateToCart', () => {
    const homepage = new HomePage();
    const productDetailsPage = new ProductDetailsPage();
    const mainBar = new MainBar();

    cy.visit('https://www.demoblaze.com/');
    homepage.selectRandomProductFromGrid();
    productDetailsPage.addToCartProduct();
    mainBar.openProductsCart();
});

Cypress.Commands.add('setViewportByTag', (tags) => {
    if (tags.includes('@MOBILE')) {
      cy.viewport(375, 667); 
    } else if (tags.includes('@DESKTOP')) {
      cy.viewport(1440, 900); 
    }
  });