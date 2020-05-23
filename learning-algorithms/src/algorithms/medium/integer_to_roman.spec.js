import integerToRoman from './integer_to_roman';

describe("#integerToRoman", () => {
    it("args: num => 3", () => runTest(3, "III"));
    it("args: num => 4", () => runTest(4, "IV"));
    it("args: num => 8", () => runTest(8, "VIII"));
    it("args: num => 9", () => runTest(9, "IX"));
    it("args: num => 1994", () => runTest(1994, "MCMXCIV"));
    it("args: num => 100", () => runTest(100, "C"));
    it("args: num => 58", () => runTest(58, "LVIII"));
    it("args: num => 101", () => runTest(101, "CI"));
    it("args: num => 102", () => runTest(102, "CII"));
    it("args: num => 120", () => runTest(120, "CXX"));
    it("args: num => 200", () => runTest(200, "CC"));
    it("args: num => 500", () => runTest(500, "D"));
    it("args: num => 600", () => runTest(600, "DC"));
    it("args: num => 1000", () => runTest(1000, "M"));
    it("args: num => 1001", () => runTest(1001, "MI"));

    function runTest(str, correctValue) {
        const results = integerToRoman(str);
        expect(results).to.deep.equal(correctValue);
    }
});
