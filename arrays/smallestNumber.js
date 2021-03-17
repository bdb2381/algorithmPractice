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


// -1, 3 5 10 20 28
// 15 17 26 134 135