const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;

global.range = function range(size, value = null) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(value);
    }
    return arr;
}
