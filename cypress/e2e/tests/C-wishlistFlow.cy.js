import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';
import ProductPage from '../pageObjects/ProductPage';
import WishlistPage from '../pageObjects/WishlistPage';
import CartPage from '../pageObjects/CartPage';

describe('Wishlist Flow', () => {

    const homepage = new HomePage()
    const loginpage = new LoginPage()
    const productpage = new ProductPage()
    const wishlistpage = new WishlistPage()
    const cartpage = new CartPage()

    let userData
    let wproducts
    let address

    before(() => {
        cy.fixture('registerUser').then((data) => {
            userData = data
        })

        cy.fixture('wishlistproducts').then((data) => {
            wproducts = data
        })

        cy.fixture('address').then((data) => {
            address = data
        })
    })

    it('User should be able to place order from wishlist', () => {
        cy.visit('/');
        homepage.signInHeader().click()
        loginpage.login(userData.email, userData.password)
        cy.wait(2000)
        homepage.homepageText().invoke('text').then((text) => {
            expect(text).contain("Home Page");
        })
        homepage.optionMen().click()
        cy.wait(3000)
        productpage.categoryTops().click()
        cy.wait(3000)
        wproducts.forEach((wproduct) => {
            productpage.addProductToWishlist(wproduct)
        })
        cy.visit('/wishlist/')
        wishlistpage.addAllToCartButton().click({ force: true })
        productpage.cartButton().click({ force: true })
        productpage.viewCartButton().click({ force: true })
        wproducts.forEach((wproduct) => {
            wishlistpage.verifyWishlistToCart(wproduct)
        })
        cy.visit("/checkout/#shipping")
        cartpage.loadingIcon().should('not.exist', { timeout: 10000 })
        cy.wait(10000)
        cartpage.streetAddressField().type(address.street, { force: true }, { timeout: 10000 })
        cartpage.cityField().type(address.city, { force: true }, { timeout: 10000 })
        cartpage.stateField().select(address.stateId, { force: true })
        cartpage.zipcodeField().type(address.zipcode, { force: true }, { timeout: 10000 })
        cartpage.phoneNumberField().type(address.phone, { force: true }, { timeout: 10000 })
        cartpage.shippingMethods().eq(0).click()
        cartpage.nextButton().click()
        cartpage.loadingIcon().should('not.exist', { timeout: 10000 })
        cartpage.placeOrderButton().click({ force: true })
        cy.wait(10000)
        homepage.homepageText().invoke('text').then((text) => {
            expect(text).contain("Thank you for your purchase!");
        })
    })
})