import { registerPage } from "../pages/registerPage";

const register = new registerPage();

describe('Register Test', { tags: '@smoke' }, () => {

    let registerdata;

    before(() => {
        cy.fixture('registerData.json').then((data) => {
            registerdata = data;
        })
    })

    it('Register test coverage with valid data', () => {

        const randomNumber = register.generateRandomNumber();

        register.openURL();
        register.enterFirstName(registerdata.firstName);
        register.enterLastName(registerdata.lastName);
        register.enterEmail(`test.qaautomation${randomNumber}@gmail.com`);
        register.enterTelephone(registerdata.telephoneNumber);
        register.enterPassword(registerdata.password);
        register.enterConfirmPassword(registerdata.password);
        register.selectPrivacyPolicyCheckbox();
        register.clickContinue();
        register.validateRegisterSuccessText("Your Account Has Been Created!")

    })

})