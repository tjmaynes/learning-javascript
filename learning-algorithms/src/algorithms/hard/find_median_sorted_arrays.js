export default function findMedianSortedArrays(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length + nums2.length; i++) {
        const nums1Value = nums1[i];
        const nums2Value = nums2[i];

        if (nums1Value !== undefined) {
            result.push(nums1Value);
        }

        if (nums2Value !== undefined) {
            result.push(nums2Value);
        }
    }

    result.sort((a,b) => a - b);

    if (result.length % 2 === 0) {
        const getMiddleIndex = (result.length / 2);
        const middleValue = result[getMiddleIndex - 1];
        const nextValue = result[getMiddleIndex];
        return (middleValue + nextValue) / 2;
    } else {
        return result[Math.floor(result.length / 2)];
    }
};
