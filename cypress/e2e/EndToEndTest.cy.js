describe('End To End Test', () => {
    it('Validate end to end test of the whole system', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('button.btn_primary.btn_inventory').each(($element, index) => {
            cy.wrap($element).click();
        });
        cy.get('path[fill="currentColor"]').click();
        cy.get('.btn_action.checkout_button').click();
        cy.get('#first-name').type('Md. Shifat');
        cy.get('#last-name').type('Laskor');
        cy.get('#postal-code').type('1200');
        cy.get("input[value='CONTINUE']").click();
        cy.get('.btn_action.cart_button').click();
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
    });
});





















