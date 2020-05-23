// https://leetcode.com/problems/longest-substr-without-repeating-characters/
export default function lengthOfLongestSubstring(s) {
    const results = new Set();

    let i = 0, j = 0, count = 0;
    while(i < s.length && j < s.length) {
        const currentValue = s[j];
        if (results.has(currentValue)) {
            const value = s[i++];
            results.delete(value);
        } else {
            const value = s[j++];
            results.add(value);
            if (results.size >= count) {
                count = results.size;
            }
        }
    }

    return count;
};
