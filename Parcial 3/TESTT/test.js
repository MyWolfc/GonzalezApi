let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8081';
// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Obtiene Jugadores: ',()=>{
    it('Deberia obtener todos los jugadores', (done) => {
        chai.request(url)
        .get('/Jugadores')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            done();
        });
    });
});
