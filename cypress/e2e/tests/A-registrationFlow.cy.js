import HomePage from '../pageObjects/HomePage';
import RegisterPage from '../pageObjects/RegisterPage';
import LoginPage from '../pageObjects/LoginPage';

describe('Registration Flow', () => {

    let userData

    before(() => {
        
        cy.generateRandomEmail().then((email) => {
            cy.readFile('cypress/fixtures/userData.json').then((data) => {
                data.email = email;
                cy.writeFile('cypress/fixtures/userData.json', data)
            })
        })

        cy.fixture('registerUser').then((data) => {
            userData = data;
        })
    })

    it('User should be able to register and login successfully', () => {
        cy.visit('/');
        const homepage = new HomePage()
        const registerpage = new RegisterPage()
        const loginpage = new LoginPage()
        homepage.createAnAccountHeader().click()
        registerpage.firstnameField().type(userData.firstName)
        registerpage.lastnameField().type(userData.lastName)
        registerpage.emailField().type(userData.email)
        registerpage.passwordField().type(userData.password)
        registerpage.confirmPasswordField().type(userData.password)
        registerpage.createAnAccountButton().click()
        registerpage.errorMessage().should('not.exist')
        // Validate registration success
        registerpage.welcomeMessage().invoke('text').then((text) => {
            expect(text).contain(userData.welcomeText);
        })

        //Logout
        homepage.customerMenuButton().click()
        homepage.signoutButton().click()
        cy.wait(7000)
        homepage.homepageText().invoke('text').then((text) => {
            expect(text).contain("Home Page");
        })

        //Login Again
        homepage.signInHeader().click()
        loginpage.login(userData.email, userData.password)
        cy.wait(2000)
        homepage.homepageText().invoke('text').then((text) => {
            expect(text).contain("Home Page");
        })

    });

})