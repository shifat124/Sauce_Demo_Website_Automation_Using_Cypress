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
  it('Validate LogIn by reading usernames and passwords from the JSON file', () => {
    cy.fixture('LogInData.json').then((data) => {
      const usernames = data.users.map((user) => user.username);
      const passwords = data.users.map((user) => user.password);
      for (let i = 0; i < usernames.length; i++) {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type(usernames[i]);
        cy.get('#password').type(passwords[i]);
        cy.get('#login-button').click();
        cy.url().then(url => {
          const currentUrl = url
          if (currentUrl === "https://www.saucedemo.com/v1/inventory.html") {
            cy.log('LogIn Passed');
            cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
          }
          else {
            cy.log('LogIn Failed');
            cy.get("h3[data-test='error']").should('be.visible');
          }
        });
      }
    });
  });
});





