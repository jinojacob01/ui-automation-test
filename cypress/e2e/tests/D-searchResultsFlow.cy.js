import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';

describe('Validate Search', () => {

    let userData

    before(() => {
        cy.fixture('registerUser').then((data) => {
            userData = data
        })
    })

    it('Verify if product search is as expected', () => {
        cy.visit('/');
        const homepage = new HomePage()
        const loginpage = new LoginPage()

        homepage.signInHeader().click()
        loginpage.login(userData.email, userData.password)
        cy.wait(2000)
        homepage.homepageText().invoke('text').then((text) => {
            expect(text).contain("Home Page");
        })
        cy.fixture('search').then((searchtexts) => {
            searchtexts.forEach((searchtext) => {
                homepage.searchBox().clear().type(searchtext.text)
                cy.contains(homepage.searchDropdownValues(), searchtext.productname).click()
                cy.contains(homepage.productLink(), searchtext.productname).click({ force: true })
                homepage.homepageText().invoke('text').then((text) => {
                    expect(text.trim()).to.equal(searchtext.productname)
                })
                cy.go('back')
            })
        })
    })
})