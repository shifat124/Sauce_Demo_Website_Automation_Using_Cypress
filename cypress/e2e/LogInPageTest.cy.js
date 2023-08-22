import LogInPage from "../pageobjects/LogInPage";
describe('LogIn Page Test', () => {
  it('Validate LogIn with valid username and password - Positive Testing', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    lp.verifyLogin();
  });
  it('Validate LogIn with invalid username and password - Negative Testing', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('sta_usr');
    lp.setUserPassword('sec_sau');
    lp.clickBtnLogin();
    lp.verifyLogin();
  });
  it('Validate LogIn by reading usernames and passwords from the JSON file', () => {
    cy.fixture('LogInData.json').then((data) => {
      const usernames = data.users.map((user) => user.username);
      const passwords = data.users.map((user) => user.password);
      for (let i = 0; i < usernames.length; i++) {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName(usernames[i]);
        lp.setUserPassword(passwords[i]);
        lp.clickBtnLogin();
        cy.url().then(url => {
          const currentUrl = url
          if (currentUrl === "https://www.saucedemo.com/v1/inventory.html") {
            cy.log('LogIn Passed');
            lp.verifyLogin();
          }
          else {
            cy.log('LogIn Failed');
            lp.verifyLoginErrorMsg();
          }
        });
      }
    });
  });
});





