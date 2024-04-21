Feature: Product Cart Management

    @DESKTOP
    Scenario: [desktop] Add product to cart and successfully delete it
    Given I am on the homepage
    When I select a product to view its details
    And I am on the product details page
    And I add the product to the cart
    And I navigate to the cart page
    And I verify that the product is in the cart
    And I delete the product from the cart
    Then I should see that the cart is empty

    @MOBILE
    Scenario: [mobile] Add product to cart and successfully delete it
    Given I am on the homepage
    When I select a product to view its details
    And I am on the product details page
    And I add the product to the cart
    And I navigate to the cart page
    And I verify that the product is in the cart
    And I delete the product from the cart
    Then I should see that the cart is empty