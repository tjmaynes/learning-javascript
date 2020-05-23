// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
export default function letterCombinations(digits) {
    const lookupTable = {
        "0": ["_"],
        "1": ["%"],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    if (digits.length <= 0) {
        return [];
    }

    const numbers = digits.split('');
    let digitToLetters = [];
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const letters = lookupTable[currentNumber];
        digitToLetters.push(letters);
    }

    return digitToLetters.reduce((previousLetters, currentLetters) => {
        let temp = [];
        previousLetters.forEach(previousLetter => {
            currentLetters.forEach(currentLetter => {
                temp.push(`${previousLetter}${currentLetter}`)
            });
        });
        return temp;
    });
};
