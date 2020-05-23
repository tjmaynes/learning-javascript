export default function oneEditAway(str1, str2) {
    let edits = 0;
    let higherLength = str1.length >= str1.length ? str1.length : str2.length;

    let i = 0;
    let j = 0;
    while(i < higherLength && j < higherLength) {
        const currentStr1Value = str1[i];
        const currentStr2Value = str2[j];

        if (currentStr1Value !== currentStr2Value) {
            if (str1.length > str2.length) {
                i++;
            } else {
                i++;
                j++;
            }
            edits += 1;
        } else {
            i++;
            j++;
        }

        if (edits > 1) {
            break;
        }
    }

    return edits <= 1;
}
