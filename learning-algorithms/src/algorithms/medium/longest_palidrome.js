// https://leetcode.com/problems/longest-palindromic-substring/
export default function longestPalidrome(s) {
    const getHighestValue = (arr) => {
        const lastIndex = arr.length - 1;
        return arr.sort((a, b) => a - b)[lastIndex];
    }

    const isPalidrome = (str) => {
        if (str.length == 2 && str[0] === str[1]) return true;
        const offset = str.length / 2;
        const left = str.slice(0, offset + 1);

        let right = "";
        for (let i = str.length - 1; i >= offset - 1; i--) {
            right += str[i];
        }

        return JSON.stringify(left) === JSON.stringify(right);
    }

    const containsSameValue = (str) => {
        const set = new Set(str);
        return set.size == 1;
    }

    if (s.length <= 1 || containsSameValue(s)) return s;
    if (s.length <= 2) return s[0];

    let results = {};
    let i = 0, j = s.length;

    while(i < s.length && j > 0) {
        const currentValue = s[i];
        const otherValue = s[j - 1];
        const chars = s.slice(i, j);

        if (currentValue === otherValue && isPalidrome(chars)) {
            if (!results.hasOwnProperty(chars.length)) {
                results[chars.length] = chars;
            }

            i++;
            j = s.length;
        } else {
            j--;
        }
    }

    const highestValue = getHighestValue(Object.keys(results));
    return results[highestValue];
}
