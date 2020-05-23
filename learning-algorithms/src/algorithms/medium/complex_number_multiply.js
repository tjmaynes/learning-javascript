// https://leetcode.com/problems/complex-number-multiplication/
export default function complexNumberMultiply(a, b) {
    const complexA = a.split(/\+|i/);
    const complexB = b.split(/\+|i/);
    
    const realA = parseInt(complexA[0]);
    const imaginaryA = parseInt(complexA[1]);
    const realB = parseInt(complexB[0]);
    const imaginaryB = parseInt(complexB[1]);

    return `${((realA * realB) - (imaginaryA * imaginaryB))}+${((realA * imaginaryB) + (realB * imaginaryA))}i`;
}
