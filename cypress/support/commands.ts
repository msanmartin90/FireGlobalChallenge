/// <reference types="cypress" />

Cypress.Commands.add('findLatAndLong', (place: string) => { 
    cy.get("#place").type(place)
    cy.get("#btnfind").click()
    cy.get("#lat").invoke("text").then(console.log)
    cy.get("#lng").invoke("text").then(console.log)
})
