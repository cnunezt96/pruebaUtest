

const contra = require('../../fixtures/ultimo.json')


class contras{

    elementdiv(){

               cy.get('input').eq(0).type(contra.contraseña)
               cy.get('input').eq(1).type(contra.contraseña)
               cy.get('span').eq(13).click()
               cy.get('span').eq(15).click()
               cy.get('a.btn.btn-blue').click()
               


    }

}
module.exports = new contras()