Feature: Sign Up Process

    @DESKTOP
    Scenario: [desktop] User signs up, logs in, and logs out successfully
    Given I am on the homepage
    When I sign up with valid credentials
    And I log in with the new user credentials
    Then I should be logged in
    And I should be able to log out successfully

    @MOBILE
    Scenario: [mobile] User signs up, logs in, and logs out successfully
    Given I am on the homepage
    When I sign up with valid credentials
    And I log in with the new user credentials
    Then I should be logged in
    And I should be able to log out successfully