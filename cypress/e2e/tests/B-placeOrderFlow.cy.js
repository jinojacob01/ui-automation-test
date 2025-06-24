import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';
import ProductPage from '../pageObjects/ProductPage';

describe('Place Order Flow', () => {

    let userData

    before(() => {
        cy.fixture('registerUser').then((data) => {
            userData = data
        })
    })

    it('User should be able to place order with multiple products', () => {
        cy.visit('/');
        const homepage = new HomePage()
        const loginpage = new LoginPage()
        const productpage = new ProductPage()

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
        cy.fixture('products').then((products) => {
            products.forEach((product) => {
                productpage.addProductToCart(product)
            })
        })
        productpage.cartButton().click({ force: true })
        productpage.viewCartButton().click({ force: true })
        productpage.verifyCartTotal()
        // productpage.deleteAllItems()

        //Delete all prroducts
        // cy.get(".action-delete").should('exist').each(($el) => {
        //     cy.wrap($el).click({ force: true })
        //     cy.wait(2000)
        // })
    })

})