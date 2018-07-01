const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');

describe('api routes', function(){
    describe('GET /user', function(done){
        it('shoud resturn user in json', function(done){
            request(app)
            .get('/user')
            .end(
                function(err,res) {
                console.log(res.body);
                
                expect(res.body.name).to.be.equal("hello");
                done();
            })
            done();
        })
        
    })

    
})