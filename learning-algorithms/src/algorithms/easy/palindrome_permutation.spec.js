import palindromePermutation from './palindrome_permutation';

describe("#palindromePermutation", () => {
    it("args: strs => 'Tact Coa'", () => runTest('Tact Coa', true));
    it("args: strs => 'Tact zCoa'", () => runTest('Tact zCoa', false));

    function runTest(str, correctValue) {
        const results = palindromePermutation(str);
        expect(results).to.equal(correctValue);
    }
});
