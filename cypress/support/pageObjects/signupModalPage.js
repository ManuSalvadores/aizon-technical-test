import { generateRandomPassword, generateRandomUsername } from "../utils";

export default class SignupModalPage {
  signupModalLocators = {
    signupUserName: "#sign-username",
    signupUserPassword: "#sign-password",
    signUpBtn: "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary",
    closeSignupModal: ".btn.btn-secondary",
    closeIconBtn: ".close"
  };


  fillSignupForm() {
    const username = generateRandomUsername();
    const password = generateRandomPassword(12);

    cy.get(this.signupModalLocators.signupUserName)
      .type(username, { force: true }).then(() => {
        cy.wait(500)
      });

    cy.get(this.signupModalLocators.signupUserPassword)
      .type(password);
      
    cy.get(this.signupModalLocators.signUpBtn).click();

    return { username, password }
  }
}
