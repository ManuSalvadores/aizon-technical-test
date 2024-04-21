export default class HomePage {
    
    homePageLocators = {
        cardImg: '.card-img-top'
    }

    selectRandomProductFromGrid() {
        const randomGridElement = Math.floor(Math.random() * 9);
        cy.get(this.homePageLocators.cardImg).eq(randomGridElement).click();
    }
}