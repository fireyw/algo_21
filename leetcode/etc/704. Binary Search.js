//https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   return binarySearch(nums, target, 0, nums.length-1)
};

function binarySearch(arr, target, start, end){
    if(start>end) return start;

    let mid = Math.floor((start+end)/2);
    if(arr[mid]==target) return mid;

    if(target<arr[mid])
        return binarySearch(arr, target, 0, mid-1)
    else if(target>arr[mid])
        return binarySearch(arr, target, mid+1, end)
}

let nums = [-1,0,3,5,10,12];
let target = 1;
console.log(search(nums, target));
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
