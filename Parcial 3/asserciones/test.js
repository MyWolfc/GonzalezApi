
let funciones =require('./src/funciones.js');
let chai = require('chai');
let should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

chai.should();
describe('Pruebas de la funcion longitud (con should)',function(){
    it('Deberia regresar la longitud de la cadena',function(){
        let resultado = funciones.Longitud("HolaMundo");
        resultado.should.be.a('number');
        resultado.should.equal(9);
    })
})

describe('Pruebas de la funcion longitud (con except)',function(){
    it('Deberia regresar la longitud de la cadena',function(){
        let resultado = funciones.Longitud("HolaMundo");
        expect(resultado).to.be.a('number');
        expect(resultado).to.equal(9);
    })
})


describe('Pruebas de la funcion longitud (con asserciones)',function(){
    it('Deberia regresar la longitud de la cadena',function(){
        let resultado = funciones.Longitud("HolaMundo");
        assert.typeOf(resultado, 'number');
        assert.equal(resultado, 9);
    })
})


