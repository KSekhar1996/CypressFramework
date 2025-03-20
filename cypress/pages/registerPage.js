export class registerPage {

    firstNameField = "#input-firstname"
    lastNameField = "#input-lastname"
    emailField = "#input-email"
    telephoneField = "#input-telephone"
    passwordField = "#input-password"
    confirmPasswordField = "#input-confirm"
    privacyPolicyCheckbox = "input[name='agree']"
    continueButton = ".btn.btn-primary"
    registerSuccessText = "[id='content'] h1"


    openURL() {
        cy.visit(Cypress.env("URL"));
    }

    enterFirstName(firstName) {
        cy.get(this.firstNameField).type(firstName);
    }

    enterLastName(lastName) {
        cy.get(this.lastNameField).type(lastName);
    }

    enterEmail(emailID) {
        cy.get(this.emailField).type(emailID);
    }

    enterTelephone(telephoneNumber) {
        cy.get(this.telephoneField).type(telephoneNumber);
    }

    enterPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    enterConfirmPassword(password) {
        cy.get(this.confirmPasswordField).type(password);
    }

    selectPrivacyPolicyCheckbox() {
        cy.get(this.privacyPolicyCheckbox).check();
    }

    clickContinue() {
        cy.get(this.continueButton).click();
    }

    validateRegisterSuccessText(successText) {
        cy.get(this.registerSuccessText).should('have.text', successText)
    }

    generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 10000);
        return randomNumber;
    }

}