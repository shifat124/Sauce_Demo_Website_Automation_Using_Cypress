describe('LogIn Page Test', () => {
    it('Validate press on Continue Shopping button', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('path[fill="currentColor"]').click();
        cy.get('.btn_secondary').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });
    it('Validate press on Checkout button', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('path[fill="currentColor"]').click();
        cy.get('.btn_action.checkout_button').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html');
    });
});





