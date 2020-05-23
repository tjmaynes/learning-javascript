import longestPalidrome from './longest_palidrome';

describe("#longestPalidrome", () => {
    it("args: str => babad", () => runTest("babad", "bab"));
    it("args: str => cbbd", () => runTest("cbbd", "bb"));
    it("args: str => ''", () => runTest("", ""));
    it("args: str => a", () => runTest("a", "a"));
    it("args: str => ac", () => runTest("ac", "a"));
    it("args: str => bb", () => runTest("bb", "bb"));
    it("args: str => ccc", () => runTest("ccc", "ccc"));
    it("args: str => aaaa", () => runTest("aaaa", "aaaa"));
    it("args: str => abcda", () => runTest("abcda", "a"));
    it("args: str => ababababa", () => runTest("ababababa", "ababababa"));
    it("args: str => tattarrattat", () => runTest("tattarrattat", "tattarrattat"));
    it("args: str => some-big-input", () => runTest("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth", "ranynar"))
    it("args: str => a*1000", () => {
        const str = range(1000, "a").join("");
        runTest(str, str);
    });

    function runTest(str, correctValue) {
        const results = longestPalidrome(str);
        expect(results).to.equal(correctValue);
    }
});
