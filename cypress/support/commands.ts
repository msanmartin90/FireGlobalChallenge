/// <reference types="cypress" />

import { amazonHomePage } from "../pages/amazon-home-page"

Cypress.Commands.add('getResultItemByName', (itemName: string) => {
    return amazonHomePage.getResultsList().filter(`:contains(${itemName})`).first()
})
