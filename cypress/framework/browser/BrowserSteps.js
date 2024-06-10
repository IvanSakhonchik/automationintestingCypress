class BrowserSteps {
    static navigateTo(url) {
        cy.visit(url);
    }
}

export default BrowserSteps;
