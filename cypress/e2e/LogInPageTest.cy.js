describe('LogIn Page Test', () => {
    it('Validate LogIn with valid username and password - Positive Testing', () => {
       cy.visit('https://www.saucedemo.com/v1/');
       cy.get('#user-name').type('standard_user');
       cy.get('#password').type('secret_sauce');
       cy.get('#login-button').click();
       cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
      });
    it('Validate LogIn with invalid username and password - Negative Testing', () => {
       cy.visit('https://www.saucedemo.com/v1/');
       cy.get('#user-name').type('sta_usr');
       cy.get('#password').type('sec_sau');
       cy.get('#login-button').click();
       cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
      });
      });