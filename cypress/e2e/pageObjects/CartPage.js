class CartPage {

  proceedToCheckout() {
    return cy.get("button[data-role='proceed-to-checkout']")
  }

  streetAddressField() {
    return cy.get("._required .input-text").eq(2)
  }

  cityField() {
    return cy.get("._required .input-text").eq(3)
  }

  zipcodeField() {
    return cy.get("._required .input-text").eq(5)
  }

  phoneNumberField() {
    return cy.get("._required .input-text").eq(6)
  }

  stateField() {
    return cy.get("._required .select").eq(0)
  }

  shippingMethods() {
    return cy.get("td.col-method .radio")
  }

  nextButton() {
    return cy.get("div.primary .continue.primary")
  }

  placeOrderButton() {
    return cy.get("div.primary .checkout")
  }

  loadingIcon() {
    return cy.get(".loader[alt='Loading...']")
  }

}
export default CartPage;