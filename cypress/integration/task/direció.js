
const dir = require('../../fixtures/direcció.json')


class direccion{

    elementdir(){

                cy.wait(5000)
                cy.get('input').eq(0).should('contain.text',dir.city)
                cy.get('input').eq(1).should('contain.text',dir.postal )
                cy.get('input').eq(2).should('contain.text',dir.country )
                cy.get('a.btn.btn-blue.pull-right').contains('Next: Devices').click({force:true})
        

    }

}

module.exports = new direccion()