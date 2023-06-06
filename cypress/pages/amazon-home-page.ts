class AmazonHomePage {
    elements = {
        searchTextBox: "#twotabsearchtextbox",
        searchSubmitButton: "#nav-search-submit-button",
        suggestion: ".s-suggestion[role=button]",
        result: "[data-component-type='s-search-result']"
    }

    findProduct(productName: string) {
        cy.get(this.elements.searchTextBox).type(productName, { delay: 0 })
        cy.get(this.elements.suggestion).contains(productName, { matchCase: false }).first().click()
    }

    clickOnProductFromResults(productName: string) {
        cy.getResultItemByName(productName).find('a').first().click()
    }

    getResultsList() {
        return cy.get(amazonHomePage.elements.result)
    }

}

export const amazonHomePage = new AmazonHomePage() 
