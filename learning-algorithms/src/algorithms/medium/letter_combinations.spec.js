import letterCombinations from './letter_combinations';

describe("#letterCombinations", () => {
    it("args: digits => 23", () => runTest("23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]));
    it("args: digits => ''", () => runTest("", []));
    it("args: digits => 2", () => runTest("2", ["a", "b", "c"]));
    it("args: digits => 234", () => runTest("234", ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]));

    function runTest(digits, correctValue) {
        const results = letterCombinations(digits);
        expect(results).to.deep.equal(correctValue);
    }
});
