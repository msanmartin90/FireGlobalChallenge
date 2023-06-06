class AmazonProductPage {
    elements = {
        productTitle: "#productTitle",
        price: "#corePriceDisplay_desktop_feature_div > .a-spacing-none .a-offscreen"
    }
    
    getProductTitle(){
        return cy.get(this.elements.productTitle).invoke("text")
    }

    getProductPrice(){
        return cy.get(this.elements.price).invoke("text").then(price => parseFloat(price.replace("$","")))
    }

}

export const amazonProductPage = new AmazonProductPage() 
