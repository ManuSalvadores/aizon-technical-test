Feature: Product Checkout process

    @DESKTOP
    Scenario: [desktop]: Complete a successful purchase
    Given I am on the product cart page with an item
    And I proceed to checkout
    And I fill in the checkout details with "defaultUser" data
    And I complete the purchase
    Then I should see a success modal with "defaultUser" summary data
    
    @MOBILE
    Scenario: [mobile]: Complete a successful purchase
    Given I am on the product cart page with an item
    And I proceed to checkout
    And I fill in the checkout details with "defaultUser" data
    And I complete the purchase
    Then I should see a success modal with "defaultUser" summary data