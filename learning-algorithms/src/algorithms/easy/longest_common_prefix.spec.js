import longestCommonPrefix from './longest_common_prefix';

describe("#longestCommonPrefix", () => {
    it("args: strs => ['flower','flow','flight']", () => runTest(["flower","flow","flight"], "fl"));
    it("args: strs => ['dog','racecar','car']", () => runTest(["dog","racecar","car"], ""));

    function runTest(strs, correctValue) {
        const results = longestCommonPrefix(strs);
        expect(results).to.equal(correctValue);
    }
});
