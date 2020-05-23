import lengthOfLongestSubstring from './length_of_longest_substring';

describe("#lengthOfLongestSubstring", () => {
    it("args: str => abcabcbb", () => runTest("abcabcbb", 3));
    it("args: str => bbbbb", () => runTest("bbbbb", 1));
    it("args: str => pwwkew", () => runTest("pwwkew", 3));
    it("args: str => au", () => runTest("au", 2));
    it("args: str => dvdf", () => runTest("dvdf", 3));
    it("args: str => anviaj", () => runTest("anviaj", 5));
    it("args: str => bpfbhmipx", () => runTest("bpfbhmipx", 7));
    it("args: str => abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", () => runTest("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", 94));
    it("args: str => ''", () => runTest("", 0));
    it("args: str => ' '", () => runTest(" ", 1));
    it("args: str => '  '", () => runTest("  ", 1));

    function runTest(str, correctValue) {
        const results = lengthOfLongestSubstring(str);
        expect(results).to.equal(correctValue);
    }
});
