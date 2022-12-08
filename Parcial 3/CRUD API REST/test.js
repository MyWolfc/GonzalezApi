let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8081';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Obtiene Cantates: ',()=>{
    it('Deberia obtener a todos los cantantes', (done) => {
        chai.request(url)
        .get('/Musica')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});

describe('Obtiene Cantates en especifico uno: ',()=>{
    it('Deberia obtener a un cantante', (done) => {
        chai.request(url)
        .get('/Musica/1')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});

describe('Obtiene Cantates Aleatorios: ',()=>{
    it('Deberia obtener a un cantante aleatorio', (done) => {
        chai.request(url)
        .get('/Musica/Random')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});
