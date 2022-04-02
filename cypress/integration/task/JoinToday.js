class boton{

    elementssesion(){

        cy.get('a.unauthenticated-nav-bar__sign-up').click()
    }

}

module.exports = new boton()


