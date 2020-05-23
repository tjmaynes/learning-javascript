import findAnyCombo from './find_any_combo';

describe("#findAnyCombo", () => {
    it("args: nums => [10, 15, 1, 8], k => 9", () => runTest([10, 15, 1, 8], 9, true));
    it("args: nums => [10, 15, 3, 7], k => 17", () => runTest([10, 15, 3, 7], 17, true));
    it("args: nums => [], k => 17", () => runTest([], 17, false));
    it("args: nums => [10, 10, 10, 10], k => 17", () => runTest([10, 10, 10, 10], 17, false));
    it("args: nums => [1, 0, 9, 10], k => 1", () => runTest([1, 0, 9, 10], 1, true));
    it("args: nums => [0, 0, 1, 10, 12], k => 11", () => runTest([5, 0, 1, 10, 12], 11, true));
    it("args: nums => [0, 0, 0, 0], k => 0", () => runTest([0, 0, 0, 0], 0, true));
    it("args: nums => [-1, 9, 1, 2], k => 0", () => runTest([-1, 9, 1, 2], 0, true));

    function runTest(nums, target, correctValue) {
        const results = findAnyCombo(nums, target);
        expect(results).to.equal(correctValue);
    }
});
