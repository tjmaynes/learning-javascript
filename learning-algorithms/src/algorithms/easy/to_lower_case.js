// https://leetcode.com/problems/to-lower-case/
export default function toLowerCase(str) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let lookupTable = {};
    for (let i = 0; i < alphabet.length; i++) {
        lookupTable[alphabet[i]] = alphabet[i];
        lookupTable[alphabet[i].toUpperCase()] = alphabet[i];
    }

    let updatedString = "";

    for (let i = 0; i < str.length; i++) {
        const currentValue = str[i];
        if (lookupTable[currentValue]) {
            updatedString += lookupTable[currentValue];
        } else {
            updatedString += currentValue;
        }
    }
    
    return updatedString;
}
