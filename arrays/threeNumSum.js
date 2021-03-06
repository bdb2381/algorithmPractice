
//Time: O(n^2) since we need to touch each element in array via two loops
//Space: O(n) as no new space is created so depends upon given array size
function threeNumberSum(array, targetSum) {

  //sorts in place. w/o arrow func, sorts as text
	array.sort((a, b) =>  a - b);  
		
	let result = []
	
  // length-2 in order as we need 2 points + current available 
	for (let i = 0; i < array.length - 2; i++){

    //create pointers for respective index
		let current = i
		let left = i + 1
		let right = array.length - 1
		

    // once left & right are the same, we checked everything so end loop, 
    // readjust pointers
		while (left < right){

			let currentSum = array[current] + array[left] + array[right]

			if(currentSum === targetSum){
				result.push([array[current], array[left], array[right]])
				left++
				right--
			}

			else if (currentSum < targetSum){
				left++
			}
			else{
				right--
			}


		}	
	}
	return result 
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;




//Second Attempt - Took 24 minutes
// 10 minutes to debug. Remember when setting pointers, you are setting to the index
// the right pointer is the last element, which is different from the for loop check

function threeNumberSum(array, targetSum) {

	array.sort((a, b ) => a-b)
	let result = []
	
	for (let i = 0; i < array.length - 2; i++){
		let current = i 
		let left = i + 1
		let right = array.length - 1
		
		while (left < right){
			let currentSum = array[current] + array[left] + array[right]
			
			if(currentSum === targetSum){
				result.push([array[current], array[left], array[right]])
				left++
				right--
			}
			
			else if (currentSum < targetSum){
				left++
			}
			
			else if (currentSum > targetSum) {
				right--
			}
		}
	}	

	return result 
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
