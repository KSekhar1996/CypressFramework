export class homePage {
    searchField = ".form-control.input-lg";
    searchIcon = ".btn.btn-default.btn-lg";
    productNamesList = "[class='product-thumb'] h4";
    addToCartButtons = "button[onclick*='cart.add']";
    successMessage = "[class*='alert-success']"

    searchProduct(productName) {
        cy.get(this.searchField).type(productName);
        cy.get(this.searchIcon).click();
    }

    addProductToCart(productName) {

        cy.get(this.productNamesList).each(($el, index, list) => {
            const product = $el.text();

            if(product === productName) {
                cy.get(this.addToCartButtons).eq(index).click();
            }
        })

    }

    validateSuccessMessage(productName) {
        cy.get(this.successMessage).should('contain.text', `Success: You have added ${productName} to your shopping cart!`)
    }

}