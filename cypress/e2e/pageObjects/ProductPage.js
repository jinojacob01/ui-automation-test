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

    addProductToCart(product) {
        cy.contains('.product-item-link', product.name).click({ force: true })
        cy.contains('.swatch-option.text', product.size).scrollIntoView().click({ force: true })
        cy.get('.swatch-option.color').eq(product.colorIndex).scrollIntoView().click({ force: true })
        cy.get('#product_addtocart_form .primary').click({ force: true })
        cy.get("div[role='alert']").invoke('text').then((text) => {
            expect(text).to.contain(product.name)
        })
        cy.wait(2000)
        cy.go('back')
    }

    verifyCartTotal() {
        cy.wait(3000)
        let expectedTotal = 0;
        cy.get('tr.item-info').should('have.length.at.least', 1)
        cy.get('tr.item-info').each(($el) => {
            const price = parseFloat($el.find('td.subtotal').text().replace('$', ''))
            expectedTotal += price
        }).then(() => {
            cy.get('tr td.amount .price').eq(0).invoke('text').then(actualTotalText => {
                const actualTotal = parseFloat(actualTotalText.replace('$', ''))
                expect(actualTotal).to.eq(expectedTotal)
            })
        })
    }

    addProductToWishlist(wproduct) {
        cy.contains('.product-item-link', wproduct.name).click({ force: true })
        cy.contains('.swatch-option.text', wproduct.size).scrollIntoView().click({ force: true })
        cy.get('.swatch-option.color').eq(wproduct.colorIndex).scrollIntoView().click({ force: true })
        this.addToWishList().click({ force: true })
        cy.wait(2000)
        cy.get("div[role='alert']").invoke('text').then((text) => {
            expect(text).to.contain(wproduct.name)
        })
        cy.go('back').go('back')
    }

    deleteAllItems() {
        cy.get('.action-delete').then(($els) => {
            if ($els.length > 0) {
                cy.wrap($els[0]).click({ force: true })
                cy.wait(2000)
            }
        })
    }

}

export default ProductPage;