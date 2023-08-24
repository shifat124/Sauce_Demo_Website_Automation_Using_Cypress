class CheckOutPage {
    userFirstName = '#first-name';
    userLastName = '#last-name'
    userPostalCode = '#postal-code';
    continueCartInfoBtn = "input[value='CONTINUE']";
    cancelCartInfoBtn = ' .cart_cancel_link.btn_secondary';
    finishCheckoutBtn = '.btn_action.cart_button';
    cancelCheckoutBtn = '.cart_cancel_link.btn_secondary';
    totalPriceLabel = '.summary_total_label';
    confirmationLabel = '.complete-header';
    setUserFirstName(firstname) {
        cy.get(this.userFirstName).type(firstname);
    }
    setUserLastName(lastname) {
        cy.get(this.userLastName).type(lastname);
    }
    setUserPostalCode(postalcode) {
        cy.get(this.userPostalCode).type(postalcode);
    }
    clickContinueCartInfoButton() {
        cy.get(this.continueCartInfoBtn).click();
    }
    clickcancelCartInfoBtn() {
        cy.get(this.cancelCartInfoBtn).click();
    }
    clickfinishCheckoutBtn() {
        cy.get(this.finishCheckoutBtn).click();
    }
    clickcancelCheckoutBtn() {
        cy.get(this.cancelCheckoutBtn).click();
    }
    verifyTotalPrice() {
        cy.get(this.totalPriceLabel).invoke('text').should('equal', 'Total: $140.34');
    }
    verifyCancelBtnPress() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
    }
    verifyCheckoutOperation() {
        cy.get(this.confirmationLabel).invoke('text').should('equal', 'THANK YOU FOR YOUR ORDER');
    }
    verifyclickcancelCheckoutBtn() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
}
export default CheckOutPage;