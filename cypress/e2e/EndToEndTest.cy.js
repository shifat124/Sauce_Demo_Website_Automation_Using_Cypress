import LogInPage from "../pageobjects/LogInPage";
import HomePage from "../pageobjects/HomePage";
import AddToCartPage from "../pageobjects/AddToCartPage";
import CheckOutPage from "../pageobjects/CheckOutPage";
describe('End To End Test', () => {
    it('Validate end to end test of the whole system', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName('standard_user');
        lp.setUserPassword('secret_sauce');
        lp.clickBtnLogin();
        const hp = new HomePage();
        hp.clickallAddToCartBtn();
        hp.clickCartLogo();
        const ac = new AddToCartPage();
        ac.clickcheckoutBtn();
        const cp = new CheckOutPage();
        cp.setUserFirstName('Md. Shifat');
        cp.setUserLastName('Laskor');
        cp.setUserPostalCode('1200');
        cp.clickContinueCartInfoButton();
        cp.clickfinishCheckoutBtn();
        hp.clicksideMenuBar();
        hp.clicklogoutOption();
        hp.verifyLogoutOptionPress();
    });
});





















