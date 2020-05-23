export default function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) { return false };

    let visited = new Map(str1.split('').reduce((accum, character) => {
        accum.push([character, 0]);
        return accum;
    }, []));

    for (let i = 0; i < str2.length; i++) {
        const currentStr2Char = str2.charAt(i);
        visited.set(currentStr2Char, 1);
    }

    let result = true;
    visited.forEach((value, _key, _map) => {
        if (value !== 1) {
            result = false;
        }
    });

    return result;
}
