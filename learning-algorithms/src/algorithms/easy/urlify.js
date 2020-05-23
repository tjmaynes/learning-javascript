export default function urlify(str, target) {
    if (str.length <= 0) return "";

    let spaceLocations = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        const currentValue = str.charAt(i);
        if (currentValue === ' ') {
            spaceLocations[i] = true;
        }
    }

    let result = new Array();
    for (let i = spaceLocations.length - 1; i >= 0; i--) {
        if (!spaceLocations[i]) {
            const currentCharValue = str[i];
            result[i] = currentCharValue
        } else if (result.length >= 1) {
            result[i] = '%20';
        }
    }

    return result.join('');
}
