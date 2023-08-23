class AddToCartPage {
    continueShoppingBtn = '.btn_secondary';
    checkoutBtn = '.btn_action.checkout_button';
    clickcontinueShoppingBtn() {
        cy.get(this.continueShoppingBtn).click();
    }
    clickcheckoutBtn() {
        cy.get(this.checkoutBtn).click();
    }
    verifyclickcontinueShoppingBtn() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
    verifyclickcheckoutBtn() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html');
    }
}
export default AddToCartPage;