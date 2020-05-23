import twoSum from './two_sum';

describe("#twoSumProblem", () => {
    it("args: nums => [2,7,11,15], target => 9", () => runTest([2, 7, 11, 15], 9, [0, 1]));
    it("args: nums => [3,2,4], target => 6", () => runTest([3, 2, 4], 6, [1, 2]));
    it("args: nums => [0,4,3,0], target => 0", () => runTest([0, 4, 3, 0], 0, [0, 3]));

    function runTest(nums, target, correctValue) {
        const results = twoSum(nums, target);
        expect(results).to.deep.equal(correctValue);
    }
});
