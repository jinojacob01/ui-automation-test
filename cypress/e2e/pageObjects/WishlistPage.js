import ProductPage from "./ProductPage"
import CartPage from "./CartPage"

class WishlistPage {

    productpage = new ProductPage()
    cartpage = new CartPage()

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