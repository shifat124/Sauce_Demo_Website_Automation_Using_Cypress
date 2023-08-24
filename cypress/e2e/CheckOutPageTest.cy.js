import LogInPage from "../pageobjects/LogInPage";
import HomePage from "../pageobjects/HomePage";
import AddToCartPage from "../pageobjects/AddToCartPage";
import CheckOutPage from "../pageobjects/CheckOutPage";
describe('Checkout Page Test', () => {
    it('Validate total price in CheckOutPage after adding items from HomePage to AddToCartPage', () => {
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
        cp.verifyTotalPrice();
    });
    it('Validate the pressing of cancel button of Checkout Info Details Given Page', () => {
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
        cp.clickcancelCartInfoBtn();
        cp.verifyCancelBtnPress();
    });
    it('Validate the checkout operation completes after click on Finish button of CheckOutPage', () => {
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
        cp.verifyCheckoutOperation();
    });
    it('Validate the checkout operation cancels after click on Cancel button of CheckOutPage', () => {
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
        cp.clickcancelCheckoutBtn();
        cp.verifyclickcancelCheckoutBtn();
    });
    it('Validate Checkout Info Details from the JSON file from Checkout Info Details Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName('standard_user');
        lp.setUserPassword('secret_sauce');
        lp.clickBtnLogin();
        const hp = new HomePage();
        hp.clickallAddToCartBtn();
        cy.fixture('CheckOutInfoData.json').then((data) => {
            const firstnames = data.checkoutinfodetails.map((user) => user.firstname);
            const lastnames = data.checkoutinfodetails.map((user) => user.lastname);
            const postalcodes = data.checkoutinfodetails.map((user) => user.postalcode);
            for (let i = 0; i < firstnames.length; i++) {
                cy.visit('https://www.saucedemo.com/v1/');
                const lp = new LogInPage();
                lp.setUserName('standard_user');
                lp.setUserPassword('secret_sauce');
                lp.clickBtnLogin();
                const hp = new HomePage();
                hp.clickCartLogo();
                const ac = new AddToCartPage();
                ac.clickcheckoutBtn();
                const cp = new CheckOutPage();
                cp.setUserFirstName(firstnames[i]);
                cp.setUserLastName(lastnames[i]);
                cp.setUserPostalCode(postalcodes[i]);
                cp.clickContinueCartInfoButton();
                cp.verifyTotalPrice();
            }
        });
    });
});





