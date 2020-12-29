// via AlgoExpert

// Solution 1
// O(n**2) run time
const arraya = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const target = 33

function binarySearch(array, target) {
	let result = search(array, target, 0, array.length-1)
	return result
}

function search(array, target, left, right) {
	if (left > right){   // if left pointer exceeds right, then no match is found
		return -1
	}
	let half = Math.floor((left + right)/2) 
	// index half is test case as the final remaining number is also the half. 
	
	let possibleMatch = array[half]
	// get value in the half index
	
	if (target === possibleMatch){ 
	// when we have a match, return the idex number 
		return half
	}
	
	else if (target < array[half]){
	// check left side, if the target number is less then the number in array[half]
		return search(array, target, 0, half-1)  
	// recursive call resetting the right pointer to half-1  since we checked half already
	// this allows us to check on the left side [0 thru half-1]
	}	
	
	else if (target > array[half]){
	// check right side, if the target number is less then the number in array[half]
		return search(array, target, half+1, right)
	// recursive call resetting the left pointer to half +1 since we checked half already
	// this allows us to check the right size [half + 1 thur array.length]	
	}
}



// Solution 2
// same run time, less memory then solution 1 since the aarray is not copied
function binarySearch(array, target) {
	let leftPointer = 0
	let rightPointer = array.length-1
	let index = 0

	while (leftPointer <=rightPointer){		// key to stop searching loop is when no match is found
			let half = Math.floor((leftPointer + rightPointer)/2)
			let possibleMatch = array[half]

			if (target === possibleMatch){
				return half
			}
			
			else if (target < possibleMatch){
				rightPointer = half - 1
			}
			
			else {
				leftPointer = half+1
			}
	
	}
	
return -1

}



// Attempt 3 from memory
function binarySearch(array, target) {
  // declare pointer left = 0, right: array-1 above loop 
	// declare half inside loop by adding pointers together/2 w/ math.floor to find half & possible match
	// check if target === half, if so return array position
	// else check if target is less then half, if so, set right to half-1
	//else if target is greater then half, set left to half+1
	// else return -1 for no match
	
	let left = 0
	let right = array.length - 1
	
	while (left <= right){
		let half = Math.floor((right + left)/2)
		let match = array[half]

		if (target === match){
			return half
		}	
		else if (target < match ){
			 right = half - 1
		}
		else if (target > match){
			left = half + 1
		}
	}
	
	return -1
	
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
