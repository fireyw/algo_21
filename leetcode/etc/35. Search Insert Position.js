// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
    // for(const [index, value] of nums.entries()){
    //     if(value>=target){
    //         return index;
    //     }
    // }
    // return nums.length
};

function binarySearch(array, target, start, end) {
    console.log('start: ', start, 'end: ', end);
    if(start > end)
        return start;

    let mid = Math.floor((start+end)/2);
    console.log('mid:', mid);

    if(array[mid]===target)
        return mid

    if(array[mid]>target)
        return binarySearch(array, target, start, mid-1)
    else
        return binarySearch(array, target, mid+1, end)


}

var nums = [1, 3, 5, 6];
var target =7;
console.log(searchInsert(nums, target));
