import { amazonHomePage } from "../pages/amazon-home-page"

import * as products from "../fixtures/products.json"
import { amazonProductPage } from "../pages/amazon-product-page"

describe("Amazon E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  products.forEach(product => {
    const {name, price} = product
    
    return it(`Validate price for product: ${name}`, () => {
      amazonHomePage.findProduct(name)
      amazonHomePage.clickOnProductFromResults(name)
      amazonProductPage.getProductTitle().should("contain", name)
      amazonProductPage.getProductPrice().should("eq", price)
    })

  })
})