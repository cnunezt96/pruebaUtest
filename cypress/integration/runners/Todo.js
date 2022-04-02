// import cypress from "cypress"
// import { describe } from "mocha"
import boton from "../task/JoinToday.js"
import regisusuario from "../task/usuario.js"
import direccion from "../task/direció.js"
import divces from "../task/devices.js"
import contras from "../task/contraseña.js"


describe('Registrar usuario', () =>{

    it('Visitar pagina',()=>{

    cy.visit('/')
    
})

it('Datos Basicos',()=>{
    
    boton.elementssesion()
    regisusuario.elementssesion()
    
})

it('Dirección',()=>{
    
    direccion.elementdir()
    
})

it('Dispositivos',()=>{
    
    divces.elementdiv()
    
})

it('Contraseña',()=>{
    
    contras.elementdiv()
    
})


})