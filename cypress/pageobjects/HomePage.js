class HomePage {
    totalItemsNumber = '.inventory_item';
    sauceLabsBackpackLink = '#item_4_title_link';
    sauceLabsBikeLightLink = '#item_0_title_link';
    sauceLabsBoltTshirtLink = '#item_1_title_link';
    sauceLabsFleeceJacketLink = '#item_5_title_link';
    sauceLabsOnesieLink = '#item_2_title_link';
    testAllTheThingsTshirtRed = '#item_3_title_link';
    titleOfItemsDetailsPage = '.inventory_details_name';
    cartLogo = 'path[fill="currentColor"]';
    allAddToCartBtn = 'button.btn_primary.btn_inventory';
    totalNumberItemAddCartPage = '.fa-layers-counter.shopping_cart_badge';
    sideMenuBar = '.bm-burger-button';
    allItemsOption = '#inventory_sidebar_link';
    aboutOption = '#about_sidebar_link';
    logoutOption = '#logout_sidebar_link';
    dropdownBox = '.product_sort_container';
    clicksauceLabsBackpackLink() {
        cy.get(this.sauceLabsBackpackLink).click();
    }
    clicksauceLabsBikeLightLink() {
        cy.get(this.sauceLabsBikeLightLink).click();
    }
    clicksauceLabsBoltTshirtLink() {
        cy.get(this.sauceLabsBoltTshirtLink).click();
    }
    clicksauceLabsFleeceJacketLink() {
        cy.get(this.sauceLabsFleeceJacketLink).click();
    }
    clicksauceLabsOnesieLink() {
        cy.get(this.sauceLabsOnesieLink).click();
    }
    clicktestAllTheThingsTshirtRed() {
        cy.get(this.testAllTheThingsTshirtRed).click();
    }
    clickCartLogo() {
        cy.get(this.cartLogo).click();
    }
    clickallAddToCartBtn() {
        cy.get(this.allAddToCartBtn).each(($element, index) => {
            cy.wrap($element).click();
        });
    }
    clicksideMenuBar() {
        cy.get(this.sideMenuBar).click();
    }
    clickallItemsOption() {
        cy.get(this.allItemsOption).click();
    }
    clickaboutOption() {
        cy.get(this.aboutOption).click();
    }
    clicklogoutOption() {
        cy.get(this.logoutOption).click();
    }
    selectNameAToZ() {
        cy.get(this.dropdownBox).select('az');
    }
    selectNameZToA() {
        cy.get(this.dropdownBox).select('za');
    }
    selectPriceLowToHigh() {
        cy.get(this.dropdownBox).select('lohi');
    }
    selectPriceHighToLow() {
        cy.get(this.dropdownBox).select('hilo');
    }
    verifyCountItems() {
        cy.get(this.totalItemsNumber).each((element, index, list) => {
        }).then((elements) => {
            const count = elements.length;
            cy.wrap(count).should('eq', 6);
        });
    }
    verifyClicksauceLabsBackpackLink() {
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Backpack');
    }
    verifyClicksauceLabsBikeLightLink() {
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Bike Light');
    }
    verifyClicksauceLabsBoltTshirtLink() {
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Bolt T-Shirt');
    }
    verifyClicksauceLabsFleeceJacketLink() {
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Fleece Jacket');
    }
    verifyClicksauceLabsOnesieLink() {
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Onesie');
    }
    verifyClicktestAllTheThingsTshirtRed() {
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Test.allTheThings() T-Shirt (Red)');
    }
    verifyCartLogoVisibility() {
        cy.get(this.cartLogo).should('be.visible');
    }
    verifyCartLogoPress() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
    }
    verifyAddToCartBtnPress() {
        cy.get(this.totalNumberItemAddCartPage).invoke('text').should('equal', '6');
    }
    verifyAllItemsOptionPress() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
    verifyAboutOptionPress() {
        cy.title().should('eq', 'Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing');
    }
    verifyLogoutOptionPress() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
    }
    verifyDropdownVisibility() {
        cy.get(this.dropdownBox).should('be.visible');
    }
    verifyDropdownExpectedOptions() {
        cy.get(this.dropdownBox).find('option').each(($option, index) => {
            const expectedOptions = ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)']; // Update with your expected option texts
            cy.wrap($option).should('have.text', expectedOptions[index]);
        });
    }
    verifyVisibilityOfNameAToZ() {
        const expectedOptionText = 'Name (A to Z)';
        cy.get(this.dropdownBox).find('option[value="az"]').should('have.text', expectedOptionText);
    }
    verifyVisibilityOfNameZToA() {
        const expectedOptionText = 'Name (Z to A)';
        cy.get(this.dropdownBox).find('option[value="za"]').should('have.text', expectedOptionText);
    }
    verifyVisibilityOfPriceLowToHigh() {
        const expectedOptionText = 'Price (low to high)';
        cy.get(this.dropdownBox).find('option[value="lohi"]').should('have.text', expectedOptionText);
    }
    verifyVisibilityOfPriceHighToLow() {
        const expectedOptionText = 'Price (high to low)';
        cy.get(this.dropdownBox).find('option[value="hilo"]').should('have.text', expectedOptionText);
    }
}
export default HomePage;