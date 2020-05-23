// https://leetcode.com/problems/roman-to-integer/
export default function romanToInteger(s) {
    const romans = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let value = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = s[i];
        const nextValue = s[i + 1];
        if ((currentValue === "I" && (nextValue === "V" || nextValue === "X")) ||
            (currentValue === "X" && (nextValue === "L" || nextValue === "C")) ||
            (currentValue === "C" && (nextValue === "D" || nextValue === "M"))) {
            const a = romans[currentValue];
            const b = romans[nextValue];
            value += (b - a);
            i++;
        } else {
            value += romans[currentValue];
        }
    }
    
    return value;
}
