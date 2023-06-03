describe("Tests", () => {
  beforeEach(() => {
    console.log(Cypress.config('baseUrl'))
    cy.visit("/")
  })

  it("Find Latitude and Longitud", () => {
    cy.findLatAndLong("Tandil, Arg")

    cy.get("#lat").should("have.value", "-37.316429")
    cy.get("#lng").should("have.value", "-59.120331" )
  })
})