export default function findAnyCombo(nums, target) {
    let result = false;
    let i = 0;
    let j = 0;

    while(i < nums.length) {
        const currentValue = nums[i];
        if (currentValue <= target) {
            const subsetValues = nums.slice(j+1);
            const nextValue = subsetValues[0];
            const sum = currentValue + nextValue;
            if (sum === target) {
                result = true;
                break;
            } else if (subsetValues.length <= 0) {
                i++;
                j = 0;
            }
            j++;
        } else {
            i++;
        }
    }

    return result;
}
