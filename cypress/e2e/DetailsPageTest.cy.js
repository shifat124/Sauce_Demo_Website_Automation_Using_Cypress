describe('Details Page Test', () => {
    it('Validate pressing of ADD TO CART button from Details Page to AddToCart Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_4_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_0_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_1_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_5_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_2_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_3_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('path[fill="currentColor"]').click();
        cy.get('.fa-layers-counter.shopping_cart_badge').invoke('text').should('equal', '6');
    });
    /*First Add 6 items 
    and then remove 5 items by clicking remove button from details page 
    and the validate that the remaines 1 item is present on Cart Page*/
    it('Validate pressing of Remove button from Details Page to AddToCart Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_4_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_0_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_1_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_5_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_2_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_3_title_link').click();
        cy.get('.btn_primary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_4_title_link').click();
        cy.get('.btn_secondary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_0_title_link').click();
        cy.get('.btn_secondary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_1_title_link').click();
        cy.get('.btn_secondary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_5_title_link').click();
        cy.get('.btn_secondary.btn_inventory').click();
        cy.go('back');
        cy.get('#item_2_title_link').click();
        cy.get('.btn_secondary.btn_inventory').click();
        cy.go('back');
        cy.get('path[fill="currentColor"]').click();
        cy.get('.fa-layers-counter.shopping_cart_badge').invoke('text').should('equal', '1');
    });
});








