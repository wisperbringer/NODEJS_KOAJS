const assert = require('assert');

function sum(a,b) {
    return a+b;
}

function getPairs(n) {
    const base = Math.floor(n/2);
    return [base, n - base];
}

describe('sum tests', function () {
    it('should sum 2 numbers', ()=>{
        assert.equal(sum(2,3),5);
    })
});