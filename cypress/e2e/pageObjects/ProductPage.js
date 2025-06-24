class ProductPage {

    categoryTops() {
        return cy.get("ol.items li.item:nth-child(1) a")
    }

    cartButton() {
        return cy.get('.showcart  span.qty')
    }

    viewCartButton() {
        return cy.get("a.viewcart")
    }

    addToWishList() {
        return cy.get(".product-info-main .towishlist")
    }

    productNameLink() {
        return ".product-item-link"
    }

    productSize() {
        return ".swatch-option.text"
    }

    productColor() {
        return cy.get(".swatch-option.color")
    }

    addToCartButton() {
        return cy.get("#product_addtocart_form .primary")
    }

    alertMessage() {
        return cy.get("div[role='alert']")
    }

    addProductToCart(product) {
        cy.contains(this.productNameLink(), product.name).click({ force: true })
        cy.contains(this.productSize(), product.size).scrollIntoView().click({ force: true })
        this.productColor().eq(product.colorIndex).scrollIntoView().click({ force: true })
        this.addToCartButton().click({ force: true })
        this.alertMessage().invoke('text').then((text) => {
            expect(text).to.contain(product.name)
        })
        cy.wait(2000)
        cy.go('back')
    }


    productList() {
        return cy.get("tr.item-info")
    }

    productSubTotal() {
        return "td.subtotal"
    }

    productPrice() {
        return cy.get("tr td.amount .price").eq(0)
    }

    verifyCartTotal() {
        cy.wait(3000)
        let expectedTotal = 0;
        this.productList().should('have.length.at.least', 1)
        this.productList().each(($el) => {
            const price = parseFloat($el.find(this.productSubTotal()).text().replace('$', ''))
            expectedTotal += price
        }).then(() => {
            this.productPrice().invoke('text').then(actualTotalText => {
                const actualTotal = parseFloat(actualTotalText.replace('$', ''))
                expect(actualTotal).to.eq(expectedTotal)
            })
        })
    }

    addProductToWishlist(wproduct) {
        cy.contains(this.productNameLink(), wproduct.name).click({ force: true })
        cy.contains(this.productSize(), wproduct.size).scrollIntoView().click({ force: true })
        this.productColor().eq(wproduct.colorIndex).scrollIntoView().click({ force: true })
        this.addToWishList().click({ force: true })
        cy.wait(2000)
        this.alertMessage().invoke('text').then((text) => {
            expect(text).to.contain(wproduct.name)
        })
        cy.go('back').go('back')
    }

}

export default ProductPage;