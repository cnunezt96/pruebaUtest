
const divcs = require('../../fixtures/devices.json')


class divces{

    elementdiv(){

                cy.wait(5000)
                cy.get('span').eq(0).should('contain.text',divcs.computer)
                cy.get('span').eq(1).should('contain.text',divcs.version)
                cy.get('span').eq(2).should('contain.text',divcs.idioma)
                cy.get('i').eq(9).click().as('i')
                cy.get('input').eq(6).type(divcs.mobile)
                cy.wait(2000)
                cy.get('i').eq(12).click().as('i')
                cy.get('input').eq(8).type(divcs.model)
                cy.wait(2000)
                cy.get('i').eq(15).click().as('i')
                cy.get('input').eq(10).type(divcs.system)
                cy.get('a.btn.btn-blue.pull-right').contains('Next: Last Step').click({force:true})
        

    }

}

module.exports = new divces()