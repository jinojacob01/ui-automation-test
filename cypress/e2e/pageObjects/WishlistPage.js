class WishlistPage {

    addAllToCartButton() {
        return cy.get("button[data-role='all-tocart']")
    }

    alertMessage() {
        return cy.get("div[role='alert']")
    }

    verifyWishlistToCart(wproduct) {
        cy.get('#maincontent').should('be.visible').and('contain.text', wproduct.name)
    }


}

export default WishlistPage;