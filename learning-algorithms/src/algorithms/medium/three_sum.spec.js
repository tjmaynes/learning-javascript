import threeSum from './three_sum';

describe("#threeSumProblem", () => {
    it("args: nums => [-1,0,1,2,-1,-4]", () => runTest([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]));
    it("args: nums => [1,1,-2]", () => runTest([1, 1, -2], [[-2, 1, 1]]));
    it("args: nums => [-2,0,1,1,2]", () => runTest([-2, 0, 1, 1, 2], [[-2, 0, 2], [-2, 1, 1]]));
    it("args: nums => [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]", () => runTest([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6], [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]));
    it("args: nums => [0,0]", () => runTest([0, 0], []))
    it("args: nums => [0*3000]", () => runTest(range(20, 0), [[0, 0, 0]]))
    it("args: nums => []", () => runTest([], []));
    it("args: nums => [0]", () => runTest([0], []));

    function runTest(nums, correctValue) {
        const results = threeSum(nums);
        expect(results).to.deep.equal(correctValue);
    }
});
