class HomePage{
    totalItemsNumber = '.inventory_item';
    sauceLabsBackpackLink = '#item_4_title_link';
    sauceLabsBikeLightLink = '#item_0_title_link';
    sauceLabsBoltTshirtLink = '#item_1_title_link';
    sauceLabsFleeceJacketLink = '#item_5_title_link';
    sauceLabsOnesieLink = '#item_2_title_link';
    testAllTheThingsTshirtRed = '#item_3_title_link'; 

    titleOfItemsDetailsPage = '.inventory_details_name';
    cartLogo = 'path[fill="currentColor"]';


    clicksauceLabsBackpackLink(){
        cy.get(this.sauceLabsBackpackLink).click();
    }

    clicksauceLabsBikeLightLink(){
        cy.get(this.sauceLabsBikeLightLink).click();
    }

    clicksauceLabsBoltTshirtLink(){
        cy.get(this.sauceLabsBoltTshirtLink).click();
    }

    clicksauceLabsFleeceJacketLink(){
        cy.get(this.sauceLabsFleeceJacketLink).click();
    }

    clicksauceLabsOnesieLink(){
        cy.get(this.sauceLabsOnesieLink).click();
    }

    clicktestAllTheThingsTshirtRed(){
        cy.get(this.testAllTheThingsTshirtRed).click();
    }

    clickCartLogo(){

        cy.get(this.cartLogo).click();

    }





    verifyCountItems(){
        cy.get(this.totalItemsNumber).each((element, index, list) => {
        }).then((elements) => {
          const count = elements.length;
          cy.wrap(count).should('eq', 6);
        });
    }

    verifyClicksauceLabsBackpackLink(){
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Backpack');

    }

    verifyClicksauceLabsBikeLightLink(){
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Bike Light');

    }

    verifyClicksauceLabsBoltTshirtLink(){
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Bolt T-Shirt');

    }

    verifyClicksauceLabsFleeceJacketLink(){
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Fleece Jacket');

    }

    verifyClicksauceLabsOnesieLink(){
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Sauce Labs Onesie');

    }

    verifyClicktestAllTheThingsTshirtRed(){
        cy.get(this.titleOfItemsDetailsPage).invoke('text').should('equal', 'Test.allTheThings() T-Shirt (Red)');

    }

    verifyCartLogoVisibility(){
        cy.get(this.cartLogo).should('be.visible');
    }

    verifyCartLogoPress(){
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
    }
}


export default HomePage;