import oneEditAway from './one_edit_away';

describe("#oneEditAway", () => {
    it("args: str1 => pale, str2 => ple", () => runTest("pale", "ple", true));
    it("args: str1 => pales, str2 => pale", () => runTest("pales", "pale", true));
    it("args: str1 => pale, str2 => bale", () => runTest("pale", "bale", true));
    it("args: str1 => pale, str2 => bake", () => runTest("pale", "bake", false));
    it("args: str1 => '', str2 => 'f'", () => runTest("", "f", true));

    function runTest(str1, str2, correctValue) {
        const results = oneEditAway(str1, str2);
        expect(results).to.equal(correctValue);
    }
});
