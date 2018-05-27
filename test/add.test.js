const expect = require('chai').expect;
const addFor = require('../fortest/add');


describe('math',function(){
    describe('add function',function(){
        it('should return sum 1 + 2',function(){
            const result = addFor(1,2);
            expect(result).to.equal(3);
        })
    })
})