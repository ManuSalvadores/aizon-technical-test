import { Before, Given, When, And } from 'cypress-cucumber-preprocessor/steps'
import MainBar from '../../support/pageElements/MainBar'
import SignupModalPage from '../../support/pageObjects/signupModalPage'
import LoginModalPage from '../../support/pageObjects/loginModalPage';

const mainBar = new MainBar();
const signup = new SignupModalPage();
const login = new LoginModalPage();

Before({ tags: '@MOBILE' }, function () {
  cy.setViewportByTag('@MOBILE')
});

Before({ tags: '@DESKTOP' }, function () {
  cy.setViewportByTag('@DESKTOP')
});

Given('I am on the homepage', () => {
  cy.visit('https://www.demoblaze.com/');
})

When('I sign up with valid credentials', () => {
  mainBar.openSignUpModal();

  const { username, password } = signup.fillSignupForm();
  cy.wrap({ username, password }).as('newUserData');
})

When('I log in with the new user credentials', () => {
  mainBar.openLoginModal();

  cy.get('@newUserData').then(({ username, password }) => {
    login.fillLoginForm(username, password);
  });
});

Then('I should be logged in', () => {
  mainBar.assertLoggedIn();
})

And('I should be able to log out successfully', () => {
  mainBar.logout();
  mainBar.assertLoggedOut();
})

