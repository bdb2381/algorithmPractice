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


// Solution 2
// Time O(n**2) 
// Space O(n) since no new space is created 
let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10
function twoNumberSum(array, targetSum) {
	let results = []
	
	for (let i = 0; i < array.length; i++){
		for(let y = i+1; y < array.length; y++){
			let sum = array[i] + array[y]
			
			if (sum === targetSum){
				results.push(array[i], array[y])
			}
		}
	}
	
	return results
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;