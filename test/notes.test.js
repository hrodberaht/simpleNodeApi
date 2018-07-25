const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');

describe('api routes', function(){
    describe('GET /notes', function(){
        it('should return notes in json', function(done){
            request(app)
            .get('/notes')
            .end(
                function(err,res) {
                    
                    done();
                }
            )
        })
    })
})