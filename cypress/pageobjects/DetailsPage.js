class DetailsPage {
    addToCartBtn = '.btn_primary.btn_inventory';
    removeAddToCartBtn = '.btn_secondary.btn_inventory';
    removeItemNumber = '.fa-layers-counter.shopping_cart_badge';
    clickaddToCartBtn() {
        cy.get(this.addToCartBtn).click();
    }
    clickremoveAddToCartBtn() {
        cy.get(this.removeAddToCartBtn).click();
    }
    verifyremoveItemNumber() {
        cy.get(this.removeItemNumber).invoke('text').should('equal', '1');
    }
}
export default DetailsPage;