import LogInPage from "../pageobjects/LogInPage";
import HomePage from "../pageobjects/HomePage";
import AddToCartPage from "../pageobjects/AddToCartPage";
describe('AddToCart Page Test', () => {
    it('Validate press on Continue Shopping button', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName('standard_user');
        lp.setUserPassword('secret_sauce');
        lp.clickBtnLogin();
        const hp = new HomePage();
        hp.clickCartLogo();
        const ac = new AddToCartPage();
        ac.clickcontinueShoppingBtn();
        ac.verifyclickcontinueShoppingBtn();
    });
    it('Validate press on Checkout button', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName('standard_user');
        lp.setUserPassword('secret_sauce');
        lp.clickBtnLogin();
        const hp = new HomePage();
        hp.clickCartLogo();
        const ac = new AddToCartPage();
        ac.clickcheckoutBtn();
        ac.verifyclickcheckoutBtn();
    });
});





