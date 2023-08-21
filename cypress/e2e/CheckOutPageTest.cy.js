describe('Checkout Page Test', () => {
    it('Validate total price in CheckOutPage after adding items from HomePage to AddToCartPage', () => {
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
        cy.get('.summary_total_label').invoke('text').should('equal', 'Total: $140.34');
    });
    it('Validate the pressing of cancel button of Checkout Info Details Given Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('button.btn_primary.btn_inventory').each(($element, index) => {
            cy.wrap($element).click();
        });
        cy.get('path[fill="currentColor"]').click();
        cy.get('.btn_action.checkout_button').click();
        cy.get(' .cart_cancel_link.btn_secondary').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
    });
    it('Validate the checkout operation completes after click on Finish button of CheckOutPage', () => {
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
        cy.get('.complete-header').invoke('text').should('equal', 'THANK YOU FOR YOUR ORDER');
    });
    it('Validate the checkout operation cancels after click on Cancel button of CheckOutPage', () => {
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
        cy.get('.cart_cancel_link.btn_secondary').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });
    it('Validate Checkout Info Details from the JSON file from Checkout Info Details Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('button.btn_primary.btn_inventory').each(($element, index) => {
            cy.wrap($element).click();
        });
        cy.fixture('CheckOutInfoData.json').then((data) => {
            const firstnames = data.checkoutinfodetails.map((user) => user.firstname);
            const lastnames = data.checkoutinfodetails.map((user) => user.lastname);
            const postalcodes = data.checkoutinfodetails.map((user) => user.postalcode);
            for (let i = 0; i < firstnames.length; i++) {
                cy.visit('https://www.saucedemo.com/v1/');
                cy.get('#user-name').type('standard_user');
                cy.get('#password').type('secret_sauce');
                cy.get('#login-button').click();
                cy.get('path[fill="currentColor"]').click();
                cy.get('.btn_action.checkout_button').click();
                cy.get('#first-name').type(firstnames[i]);
                cy.get('#last-name').type(lastnames[i]);
                cy.get('#postal-code').type(postalcodes[i]);
                cy.get("input[value='CONTINUE']").click();
                cy.get('.summary_total_label').invoke('text').should('equal', 'Total: $140.34');
            }
        });
    });
});





