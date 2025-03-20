import { homePage } from "../pages/homePage";

const homepage = new homePage();

describe('Add Product To Cart test', { tags: ['@smoke', '@regression'] }, () => {

    let testdata;

    beforeEach(() => {
        cy.fixture('testData.json').then((data) => {
            testdata = data;
        })
    })

    it('Add Product To the Cart and Validate success message', () => {
        cy.login(testdata.login.username, testdata.login.password)
        homepage.searchProduct("Mac");
        homepage.addProductToCart(testdata.product.productName)
        homepage.validateSuccessMessage(testdata.product.productName);
    })
})