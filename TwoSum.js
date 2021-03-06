Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        a.push(i);
        a.push(j);
        return a;
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

//method2-hashmap
Hashmap is a great way to optimize some of the algorithms at the cost of some space.

var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i]
    } else {
      obj[nums[i]] = i;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
