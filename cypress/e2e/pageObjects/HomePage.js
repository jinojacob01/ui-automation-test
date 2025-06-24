class HomePage {

    createAnAccountHeader() {
        return cy.get("ul.header li:nth-child(3)").eq(0)
    }

    customerMenuButton() {
        return cy.get("span.customer-name").eq(0)
    }
    
    signoutButton() {
        return cy.get(".links ul li.authorization-link").eq(0)
    }

    wishListButton() {
        return cy.get(".links ul li.wishlist").eq(0)
    }


    homepageText() {
        return cy.get("span.base")
    }

    signInHeader() {
        return cy.get("ul.header li:nth-child(2)").eq(0)
    }

    optionMen() {
        return cy.get("a#ui-id-5")
    }

    profileDownArrow() {
        return cy.get("button[data-action='customer-menu-toggle']").eq(0)
    }


}

export default HomePage;