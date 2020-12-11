/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * via Leetcode
 * Constraints:
      2 <= nums.length <= 103
      -109 <= nums[i] <= 109
      -109 <= target <= 109
      Only one valid answer exists.
 */

var twoSum = function(nums, target) {
    
    let map = {}
    let answer = []

    for(let i = 0; i < nums.length; i++) {
      let compliment = target - nums[i] ;
        if (compliment in map) {
          return [map[compliment], i];
        }
      map[nums[i]] = i;

    }    
};
