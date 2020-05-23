export default function palindromePermutation(str) {
    let visited = [];
    let duplicates = [];
    
    for(let i = 0; i < str.length; i++) {
        const currentValue = str.charAt(i).toLowerCase();
        if (currentValue !== " " && visited.includes(currentValue)) {
            duplicates.push(currentValue);
        } else if (currentValue !== " ") {
            visited.push(currentValue);
        }
    }

    return duplicates.length + 1 === visited.length;
}
