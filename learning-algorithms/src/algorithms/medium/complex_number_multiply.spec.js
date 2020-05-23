import complexNumberMultiply from './complex_number_multiply';

describe("#complexNumberMultiply", () => {
    it("args: a => 1+1i, b => 1+1i", () => runTest("1+1i", "1+1i", "0+2i"));
    it("args: a => 1+-1i, b => 1+-1i", () => runTest("1+-1i", "1+-1i", "0+-2i"));

    function runTest(a, b, correctValue) {
        const results = complexNumberMultiply(a, b);
        expect(results).to.equal(correctValue);
    }
});
