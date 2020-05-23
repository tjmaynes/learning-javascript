// https://leetcode.com/problems/two-sum/
export default function twoSum(nums, target) {
    let temp = {};
    
    nums.forEach((num, index) => {
        if (!temp[num]) {
            temp[num] = [index];
        } else {
            const currentTempValue = temp[num];
            currentTempValue.push(index);
            temp[num] = currentTempValue;
        }
    });
    
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (temp[diff]) {
            let diffIndex = temp[diff][0];
            if (diffIndex === i && temp[diff].length > 1) {
                diffIndex = temp[diff][1];
                result.push(i);
                result.push(diffIndex);
                break;
            } else if (diffIndex !== i) {
                result.push(i);
                result.push(diffIndex);
                break;
            }
        }
    }

    return result;
};
