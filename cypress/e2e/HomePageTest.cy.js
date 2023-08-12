describe('Home Page Test', () => {
    it('Validate the count of items', () => {
       cy.visit('https://www.saucedemo.com/v1/');
       cy.get('#user-name').type('standard_user');
       cy.get('#password').type('secret_sauce');
       cy.get('#login-button').click();
       cy.get('.inventory_item').each((element, index, list) => {
        // This callback will be executed for each element in the list
        // You can perform any actions on the element if needed
      }).then((elements) => {
        // The elements array contains the list of elements
        const count = elements.length;
        
        // Now you can use the 'count' variable to validate
        cy.wrap(count).should('eq', 6); // Assert that the count is equal to 6
      });
      });
      // I want to fuck odhora.Ifsgrg
      // gsdgrdghdfh
      // rgdfhtfh
      // hrtfhtr
      // hbftghjntgrhjn
    
      });