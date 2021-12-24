/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    let map = new Map();

    for(let i=0; i<nums.length; i++){
        if(map.has(target - nums[i])){  //키 값이 있는지 확인
            return [map.get(target-nums[i]),i]
        }else{
            map.set(nums[i],i)
        }
    }

    return [];
};

let arr=[5,11,2,7]
let target= 9;
console.log(twoSum(arr, target));
