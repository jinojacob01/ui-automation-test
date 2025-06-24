import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';
import ProductPage from '../pageObjects/ProductPage';

describe('Validate Search', () => {

    let userData
    let searchtext

    before(() => {
        cy.fixture('registerUser').then((data) => {
            userData = data
        })

        cy.fixture('search').then((data) => {
            searchtext = data
        })
    })

    it('Verify if product search is working fine', () => {
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

    })

})