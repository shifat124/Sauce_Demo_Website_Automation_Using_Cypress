describe('Home Page Test', () => {
  it('Validate the count of items', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.inventory_item').each((element, index, list) => {
    }).then((elements) => {
      const count = elements.length;
      cy.wrap(count).should('eq', 6);
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
  it('Validate the visibility of cart logo', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('path[fill="currentColor"]').should('be.visible');
  });
  it('Validate the press of cart logo', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('path[fill="currentColor"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
  });
  it('Validate the press of Add To Cart button for each items', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('button.btn_primary.btn_inventory').each(($element, index) => {
      cy.wrap($element).click();
    });
    cy.get('path[fill="currentColor"]').click();
    cy.get('.fa-layers-counter.shopping_cart_badge').invoke('text').should('equal', '6');
  });
  it('Validate the press of All Items of side menu bar', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.bm-burger-button').click();
    cy.get('#inventory_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
  });
  it('Validate the press of About of side menu bar', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.bm-burger-button').click();
    cy.get('#about_sidebar_link').click();
    cy.title().should('eq', 'Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing');
  });
  it('Validate the press of Logout of side menu bar', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
  });
  it('Validate the visibility of dropdown in home page', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').should('be.visible');
  });
  it('Validate the dropdown contains the expected and right options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').find('option').each(($option, index) => {
      const expectedOptions = ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)']; // Update with your expected option texts
      cy.wrap($option).should('have.text', expectedOptions[index]);
    });
  });
  it('Validate visibility of "Name (A to Z)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').select('az');
    const expectedOptionText = 'Name (A to Z)';
    cy.get('.product_sort_container').find('option[value="az"]').should('have.text', expectedOptionText);
  });
  it('Validate visibility of "Name (Z to A)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').select('za');
    const expectedOptionText = 'Name (Z to A)';
    cy.get('.product_sort_container').find('option[value="za"]').should('have.text', expectedOptionText);
  });
  it('Validate visibility of "Price (low to high)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').select('lohi');
    const expectedOptionText = 'Price (low to high)';
    cy.get('.product_sort_container').find('option[value="lohi"]').should('have.text', expectedOptionText);
  });
  it('Validate visibility of "Price (high to low)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.product_sort_container').select('hilo');
    const expectedOptionText = 'Price (high to low)';
    cy.get('.product_sort_container').find('option[value="hilo"]').should('have.text', expectedOptionText);
  });
});