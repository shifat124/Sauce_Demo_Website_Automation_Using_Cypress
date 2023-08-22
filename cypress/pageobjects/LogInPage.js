class LogInPage {
    txtUserName = '#user-name';
    txtUserPassword = '#password';
    btnLogin = '#login-button';
    errorLoginMsg = "h3[data-test='error']";
    setUserName(username) {
        cy.get(this.txtUserName).type(username);
    }
    setUserPassword(password) {
        cy.get(this.txtUserPassword).type(password);
    }
    clickBtnLogin() {
        cy.get(this.btnLogin).click();
    }
    verifyLogin() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
    verifyLoginErrorMsg() {
        cy.get(this.errorLoginMsg).should('be.visible');
    }
}
export default LogInPage;