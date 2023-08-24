import LogInPage from "../pageobjects/LogInPage";
import HomePage from "../pageobjects/HomePage";
import DetailsPage from "../pageobjects/DetailsPage";
describe('Details Page Test', () => {
    it('Validate pressing of ADD TO CART button from Details Page to AddToCart Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName('standard_user');
        lp.setUserPassword('secret_sauce');
        lp.clickBtnLogin();
        const hp = new HomePage();
        hp.clicksauceLabsBackpackLink();
        const dp = new DetailsPage();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBikeLightLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBoltTshirtLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsFleeceJacketLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsOnesieLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicktestAllTheThingsTshirtRed();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clickCartLogo();
        hp.verifyAddToCartBtnPress();
    });
    /*First Add 6 items 
    and then remove 5 items by clicking remove button from details page 
    and the validate that the remaines 1 item is present on Cart Page*/
    it('Validate pressing of Remove button from Details Page to AddToCart Page', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        const lp = new LogInPage();
        lp.setUserName('standard_user');
        lp.setUserPassword('secret_sauce');
        lp.clickBtnLogin();
        const hp = new HomePage();
        hp.clicksauceLabsBackpackLink();
        const dp = new DetailsPage();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBikeLightLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBoltTshirtLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsFleeceJacketLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsOnesieLink();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicktestAllTheThingsTshirtRed();
        dp.clickaddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBackpackLink();
        dp.clickremoveAddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBikeLightLink();
        dp.clickremoveAddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsBoltTshirtLink();
        dp.clickremoveAddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsFleeceJacketLink();
        dp.clickremoveAddToCartBtn();
        cy.go('back');
        hp.clicksauceLabsOnesieLink();
        dp.clickremoveAddToCartBtn();
        cy.go('back');
        hp.clickCartLogo();
        dp.verifyremoveItemNumber();
    });
});








