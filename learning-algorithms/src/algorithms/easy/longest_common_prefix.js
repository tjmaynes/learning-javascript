// https://leetcode.com/problems/longest-common-prefix/submissions/
export default function longestCommonPrefix(strs) {
    if (strs.length <= 0) { return ""; }

    return strs.reduce((longestCommonPrefix, word) => {
        const currentWord = word.split('');
        const lcpSliced = longestCommonPrefix.slice(0, currentWord.length);

        return currentWord.reduce((chars, char, currentInnerIndex) => {
            if (lcpSliced[currentInnerIndex] !== char) {
                return chars.slice(0, currentInnerIndex);
            } else {
               return chars;
            }
        }, lcpSliced);
    }, strs[0]);
};
