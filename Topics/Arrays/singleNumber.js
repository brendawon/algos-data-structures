//LeetCode 136. Single Number
//Given a non-empty array of integers, every element appears twice except one. Find that single number. 

//solution with O(n) time and O(1) space
//variable singleNumber set to 0
//loop through nums
//use bitwise XOR operand ^ which (very simplified explanation:) returns 0 when there is a duplicate of a number
//singleNumber ^ num[i] will remove the duplicate numbers (set = 0, and when 0 ^ number, this equals the number), ultimately, the remaining value will be the single number
var singleNumber = function(nums) {
    let singleNumber = 0;
    for (let i = 0; i < nums.length; i++){
        singleNumber = singleNumber ^ nums[i];
    }
    return singleNumber;
};

//solution with O(n) time complexity and O(n) space
//loop through nums
//if item is not in seen, store it
//if it is in seen, remove it
//return Object.keys(seen)[0]
// var singleNumber = function(nums) {
//     let seen = {};
//     for (let i = 0; i < nums.length; i++){
//         if (seen[nums[i]]){
//             delete seen[nums[i]];
//         } else {
//             seen[nums[i]] = nums[i]
//         }
//     }
//     return Object.keys(seen)[0];
// };

//sample input: nums = [2, 2, 1]
//expected output: 1