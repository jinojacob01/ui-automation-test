
class RegisterPage {

    firstnameField() {
        return cy.get("form.form-create-account #firstname")
    }

    lastnameField() {
        return cy.get("form.form-create-account #lastname")
    }

    emailField() {
        return cy.get("form.form-create-account #email_address")
    }

    passwordField() {
        return cy.get("form.form-create-account #password")
    }

    confirmPasswordField() {
        return cy.get("form.form-create-account #password-confirmation")
    }

    createAnAccountButton() {
        return cy.get("form.form-create-account button[type='submit']")
    }

    errorMessage() {
        return cy.get(".mage-error")
    }

    welcomeMessage() {
        return cy.get("#maincontent .messages").eq(0)
    }

}

export default RegisterPage;