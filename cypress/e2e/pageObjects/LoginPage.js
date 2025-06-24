class LoginPage {

    loginEmail() {
        return cy.get("input#email")
    }

    loginPassword() {
        return cy.get("input[name='login[password]']")
    }

    signInButton() {
        return cy.get("button.primary")
    }

    login(email, password) {
        this.loginEmail().type(email)
        this.loginPassword().type(password)
        this.signInButton().click()
    }

}

export default LoginPage