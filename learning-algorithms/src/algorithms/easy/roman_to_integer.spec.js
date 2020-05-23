import romanToInteger from './roman_to_integer';

describe("#romanToInteger", () => {
    it("args: str => III", () => runTest("III", 3));
    it("args: str => IV", () => runTest("IV", 4));
    it("args: str => IX", () => runTest("IX", 9));
    it("args: str => MCMXCIV", () => runTest("MCMXCIV", 1994));

    function runTest(str, correctValue) {
        const results = romanToInteger(str);
        expect(results).to.deep.equal(correctValue);
    }
});
