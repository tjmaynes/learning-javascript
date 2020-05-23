// https://leetcode.com/problems/integer-to-roman/
export default function integerToRoman(num) {
    let i = num;
    let result = [];

    while (i > 0) {
        if (i >= 1000) {
            result.push("M");

            if (i === 1000) {
                break;
            }

            i = i - 1000;
        } else if (i < 1000 && i >= 100) {
            if (i >= 900) {
                result.push("CM");
            } else if (i < 900 && i >= 500) {
                let temp = ["D"];
                const target = i.toString()[0] - 5;
                for (let j = 0; j < target; j++) {
                    temp.push("C");
                }
                result.push(temp.join(''));
            } else if (i < 500 && i >= 400) {
                result.push("CD");
            } else {
                let temp = [];
                const target = i.toString()[0];
                for (let j = 0; j < target; j++) {
                    temp.push("C");
                }
                result.push(temp.join(''));
            }

            if (i === 100) {
                break;
            }

            let nextInt = parseInt(i.toString()[1]);
            if (nextInt <= 9 && nextInt >= 1) {
                i = ((nextInt * 10) + (i.toString()[2] * 1));
            } else {
                i = i.toString()[2];
            }
        } else if (i < 100 && i >= 10) {
            if (i >= 90) {
                result.push("XC");
            } else if (i < 90 && i >= 50) {
                let temp = ["L"];
                const target = i.toString()[0] - 5;
                for (let j = 0; j < target; j++) {
                    temp.push("X");
                }
                result.push(temp.join(''));
            } else if (i < 50 && i >= 40) {
                result.push("XL");
            } else if (i > 10) {
                let temp = [];
                const target = i.toString()[0];
                for (let j = 0; j < target; j++) {
                    temp.push("X");
                }
                result.push(temp.join(''));
            } else {
                result.push("X");
                break;
            }
            const nextInt = i.toString()[1];
            i = nextInt * 1;
        } else {
            let temp = [];
            const target = i;
            for (let j = 0; j < target; j++) {
                temp.push("I");
                i--;
            }

            if (target >= 5) {
                temp = temp.slice(5);
                if (temp.length >= 4) {
                    result.push('IX');
                } else {
                    let numerals = "V";
                    numerals += temp.join('')
                    result.push(numerals);
                }
            } else {
                if (temp.length >= 4) {
                    result.push('IV');
                } else {
                    result.push(temp.join(''));
                }
            }
        }
    }

    return result.join('');
}
