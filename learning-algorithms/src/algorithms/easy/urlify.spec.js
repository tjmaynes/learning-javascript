import urlify from './urlify';

describe("#urlify", () => {
    it("args: str => 'Mr John Smith   '", () => runTest('Mr John Smith   ', 13, 'Mr%20John%20Smith'));

    function runTest(str, target, correctValue) {
        const results = urlify(str, target);
        expect(results).to.equal(correctValue);
    }
});
