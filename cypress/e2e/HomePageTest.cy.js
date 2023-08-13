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
  it('Validate sauce labs backpack item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_4_title_link').click();
    cy.get('.inventory_details_name').invoke('text').should('equal', 'Sauce Labs Backpack');
  });
  it('Validate sauce labs bike light item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_0_title_link').click();
    cy.get('.inventory_details_name').invoke('text').should('equal', 'Sauce Labs Bike Light');
  });
  it('Validate sauce labs bolt t-shirt item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_1_title_link').click();
    cy.get('.inventory_details_name').invoke('text').should('equal', 'Sauce Labs Bolt T-Shirt');
  });
  it('Validate sauce labs fleece jacket item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_5_title_link').click();
    cy.get('.inventory_details_name').invoke('text').should('equal', 'Sauce Labs Fleece Jacket');
  });
  it('Validate sauce labs onesie item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_2_title_link').click();
    cy.get('.inventory_details_name').invoke('text').should('equal', 'Sauce Labs Onesie');
  });
  it('Validate test.allTheThings() t-shirt (red) item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_3_title_link').click();
    cy.get('.inventory_details_name').invoke('text').should('equal', 'Test.allTheThings() T-Shirt (Red)');
  });
});