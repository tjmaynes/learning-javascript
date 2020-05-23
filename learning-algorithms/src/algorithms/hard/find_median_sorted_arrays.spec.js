import findMedianSortedArrays from './find_median_sorted_arrays';

describe("#findMedianSortedArrays", () => {
    it("args: nums1 => [1, 3], nums2 => [2]", () => runTest([1, 3], [2], 2));
    it("args: nums1 => [1, 2], nums2 => [3, 4]", () => runTest([1, 2], [3, 4], 2.5));

    function runTest(nums1, nums2, correctValue) {
        const results = findMedianSortedArrays(nums1, nums2);
        expect(results).to.deep.equal(correctValue);
    }
});
