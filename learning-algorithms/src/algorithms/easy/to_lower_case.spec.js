import toLowerCase from './to_lower_case';

describe("#toLowerCase", () => {
    it("args: str => Hello", () => runTest("Hello", "hello"));
    it("args: str => here", () => runTest("here", "here"));
    it("args: str => LOVELY", () => runTest("LOVELY", "lovely"));
    it("args: str => al&phaBET", () => runTest("al&phaBET", "al&phabet"))

    function runTest(str, correctValue) {
        const results = toLowerCase(str);
        expect(results).to.deep.equal(correctValue);
    }
});
