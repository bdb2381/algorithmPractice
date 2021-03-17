// First Attempt
//Time: O(n log(n) + m log(m)) since we have two separate inputs and sort both
//Space: O(1) since sort is in place and no new data structures created


function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  
	let smallestPair = []
	let oneIdx = 0, twoIdx = 0
	let smallestDifference = Infinity  
	let currentDifference = Infinity

  let i = 0  // counter for debugging

	while (oneIdx < arrayOne.length && twoIdx < arrayTwo.length){
		console.log("loop number:", i,)
		
    // set to readable numbers and to avoid changing Idx position midstream
		let firstNumber = arrayOne[oneIdx]  
		let secondNumber = arrayTwo[twoIdx]
		
		if (firstNumber < secondNumber){
			currentDifference = secondNumber - firstNumber
			oneIdx++
		}
		else if (secondNumber < firstNumber){
			currentDifference = firstNumber - secondNumber
			twoIdx++
		}
		else {
			return [firstNumber, secondNumber]
		}
		
		if (smallestDifference > currentDifference){
			smallestDifference = currentDifference
			// console.log("names:", [firstNumber, secondNumber])
			// console.log("by index:", [arrayOne[oneIdx], arrayTwo[twoIdx]])
			smallestPair = [firstNumber, secondNumber]
		}
		i++
	}
	
return smallestPair 
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;


/////////////////////////
//Second Attempt - 23:30 minutes
// wrote algo first and then leetCode

//sort both arrays in asc order
//asesign pointers for each
	// init currentSmallest & smallest to infinity
//create results array
//while loop through both with && sequence 
	// in loop, assign each idx to human readable stable var
// on each loop, compare each idx to the other
	// if firstNumber is < secondNumber
		// subtract secondNumber - firstNumber and assign to currentSmalleste
		// increase firstNumber idx++  because firstNumber is potential too far from secondnumber
	// else if secondNumber < firstNumber
		// subtract firstNumber - secondNumber and assign to currentSmallest
		// increase secondNumber idx++ to move secondNumber closer to first number
	// else numbers are === and return the result []
	
	//handle comparision of differences
	// if smallestDifference > currentDifference
		// smallestDifference = currentDifference 
		// assign firstNumber and secondNumber to results array
	
	// outside of loop, when complete return results array

function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a-b)
	arrayTwo.sort((a, b) => a-b)
	
	let oneIdx = 0, twoIdx = 0 
	let currentSmallest = Infinity 
	let smallest = Infinity
	let result = [] 

	while(oneIdx < arrayOne.length && twoIdx < arrayTwo.length){
		let firstNumber = arrayOne[oneIdx]
		let secondNumber = arrayTwo[twoIdx]
		
		if (firstNumber < secondNumber){
			currentSmallest = secondNumber - firstNumber
			oneIdx++
		}
		else if (secondNumber < firstNumber) {
			currentSmallest = firstNumber - secondNumber
			twoIdx++
		}
		else {
			return result=[firstNumber, secondNumber]
		}
		
		if (smallest > currentSmallest){
			smallest = currentSmallest
			result=[firstNumber, secondNumber]
		}
		
	}

	return result
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
