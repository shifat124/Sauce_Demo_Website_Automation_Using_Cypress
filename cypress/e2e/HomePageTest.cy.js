import LogInPage from "../pageobjects/LogInPage";
import HomePage from "../pageobjects/HomePage";
describe('Home Page Test', () => {
  it('Validate the count of items', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.verifyCountItems();
  });
  it('Validate sauce labs backpack item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksauceLabsBackpackLink();
    hp.verifyClicksauceLabsBackpackLink();
  });
  it('Validate sauce labs bike light item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksauceLabsBikeLightLink();
    hp.verifyClicksauceLabsBikeLightLink();
  });
  it('Validate sauce labs bolt t-shirt item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksauceLabsBoltTshirtLink();
    hp.verifyClicksauceLabsBoltTshirtLink();
  });
  it('Validate sauce labs fleece jacket item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksauceLabsFleeceJacketLink();
    hp.verifyClicksauceLabsFleeceJacketLink();
  });
  it('Validate sauce labs onesie item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksauceLabsOnesieLink();
    hp.verifyClicksauceLabsOnesieLink();
  });
  it('Validate test.allTheThings() t-shirt (red) item click', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicktestAllTheThingsTshirtRed();
    hp.verifyClicktestAllTheThingsTshirtRed();
  });
  it('Validate the visibility of cart logo', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.verifyCartLogoVisibility();
  });
  it('Validate the press of cart logo', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clickCartLogo();
    hp.verifyCartLogoPress();
  });
  it('Validate the press of Add To Cart button for each items', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clickallAddToCartBtn();
    hp.clickCartLogo();
    hp.verifyAddToCartBtnPress();
  });
  it('Validate the press of All Items of side menu bar', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksideMenuBar();
    hp.clickallItemsOption();
    hp.verifyAllItemsOptionPress();
  });
  it('Validate the press of About of side menu bar', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksideMenuBar();
    hp.clickaboutOption();
    hp.verifyAboutOptionPress();
  });
  it('Validate the press of Logout of side menu bar', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.clicksideMenuBar();
    hp.clicklogoutOption();
    hp.verifyLogoutOptionPress();
  });
  it('Validate the visibility of dropdown in home page', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.verifyDropdownVisibility();
  });
  it('Validate the dropdown contains the expected and right options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.verifyDropdownExpectedOptions();
  });
  it('Validate visibility of "Name (A to Z)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.selectNameAToZ();
    hp.verifyVisibilityOfNameAToZ();
  });
  it('Validate visibility of "Name (Z to A)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.selectNameZToA();
    hp.verifyVisibilityOfNameZToA();
  });
  it('Validate visibility of "Price (low to high)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.selectPriceLowToHigh();
    hp.verifyVisibilityOfPriceLowToHigh();
  });
  it('Validate visibility of "Price (high to low)" text after selecting from dropdown options', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    const lp = new LogInPage();
    lp.setUserName('standard_user');
    lp.setUserPassword('secret_sauce');
    lp.clickBtnLogin();
    const hp = new HomePage();
    hp.selectPriceHighToLow();
    hp.verifyVisibilityOfPriceHighToLow();
  });
});




