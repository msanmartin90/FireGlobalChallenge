declare namespace Cypress {
  interface Chainable {
    findLatAndLong(place: string): Chainable<string>
  }
}