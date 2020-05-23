// https://leetcode.com/problems/3sum/
export default function threeSum(nums, target = 0) {
    const ascendingSort = (arr) => arr.sort((a, b) => a - b);
    const removeDuplicates = (arr) => {
        const visited = {};
        return arr.filter(item => !visited.hasOwnProperty(item) ? (visited[item] = true) : false);
    }
    const isExactArray = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

    const sortedNums = ascendingSort(nums);
    const targetTriplet = [target, target, target];
    const results = [];

    for (let i = 0; i < sortedNums.length; i++) {
        let left = i + 1;
        let right = sortedNums.length - 1;
        let previousAbc = null;

        const currentTriplet = [sortedNums[i], sortedNums[i+1], sortedNums[i+2]];
        if (isExactArray(currentTriplet, targetTriplet)) {
            results.push([target, target, target]);
            break;
        }

        while (left < right) {
            const a = sortedNums[i];
            const b = sortedNums[left];
            const c = sortedNums[right];
            const sum = (a + b + c);

            if (sum === target) {
                const abc = [a, b, c];
                results.push(abc);

                if (isExactArray(previousAbc, abc)) {
                    right--;
                } else {
                    previousAbc = abc;
                    left++;
                }
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return removeDuplicates(results);
}
