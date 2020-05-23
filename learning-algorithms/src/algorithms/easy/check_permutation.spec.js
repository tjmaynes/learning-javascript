import checkPermutation from './check_permutation';

describe("#checkPermutation", () => {
    it("args: str1 => one, str2 => neo", () => runTest("one", "neo", true));
    it("args: str1 => only, str2 => what", () => runTest("only", "what", false));
    it("args: str1 => '', str2 => ''", () => runTest("", "", true));

    function runTest(str1, str2, correctValue) {
        const results = checkPermutation(str1, str2);
        expect(results).to.equal(correctValue);
    }
});
