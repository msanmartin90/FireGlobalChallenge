declare namespace Cypress {
  interface Chainable {
    getResultItemByName(itemName: string): Chainable<JQuery<HTMLElement>>
  }
}