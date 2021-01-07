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

// Solution 3
// Time O(n) since going through array once
// Space O(n) since memory size increases with input due to object
function twoNumberSum(array, targetSum) {
	let dictionary = {}

	for (let currentNumber of array){
		let sum = targetSum - currentNumber
		console.log(sum, dictionary)
		if (sum in dictionary){
			return[sum, currentNumber]
		} else {
			dictionary[currentNumber] = true
			}	
		}
return []
}


// Solution 4
// Time O(n log(n)) because sort() runs inn this time
// Space O(1) because no new space is created 
// this solution has better space use but is slightly slower then solution 2
function twoNumberSum(array, targetSum) {

	array.sort((a,b,) =>  a - b)  // sort() is O(nlog(n) time)
	let left = 0 									// initialize pointer
	let right = array.length - 1	// initialize pointer
	
	while (left < right){					// when left pointer is bigger, we've searched entire array
		let sum = array[left] + array[right] 
		if (sum === targetSum){			
			return [array[left], array[right]]
		}
		else if (sum < targetSum){	
			// because array is sorted, and sum is less then target,
			// we know we need to increase a number to maket sum closer to target
			// thus, change left pointer position by 1 to check the next element
			left++	
		}
		else if (sum > targetSum){
			// because array is sorted, and sum is greater then target,
			// we know we need to decrease a number to maket sum closer to target
			// thus, change right pointer (which are larger numbers) position by 1 
			// to check the next element
			right--
		}
	}
	
	return []

}




