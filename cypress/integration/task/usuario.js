
const user = require('../../fixtures/usuario.json')


class regisusuario{

    elementssesion(){

                cy.get('input').eq(0).type(user.firts)
                cy.get('input').eq(1).type(user.last)
                cy.get('input').eq(2).type(user.email)
                cy.get('select').eq(0).select(user.month)
                cy.get('select').eq(1).select(user.da)
                cy.get('select').eq(2).select(user.year)
                cy.get('a.btn.btn-blue').click({force:true})
             

            
       

    }

}

module.exports = new regisusuario()