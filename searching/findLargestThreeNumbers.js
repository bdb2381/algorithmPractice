
// O(n) time since we need to touch each element in input
// O(1) space since we only aren't using new memory in amounts that matter

// Solution 1
function findThreeLargestNumbers(array) {
  let finalThree = [ null, null, null ]  // holding array for 3 numbers
	
	// for every element in the array, compare it to elements in finalThree
	for (let index in array){ 		
		compareLargest(finalThree, array[index])	
	}
	
	return finalThree 
}

function compareLargest(finalThree, number){
	// compare number to each index in final three in order to determine size.
	// if null, stick the number into the null spot since we don't know if number isn't largest
	// console.log("compare", finalThree)
		if (number > finalThree[2] || finalThree[2] === null){
			switchAndUpdate(number, finalThree, 2)
		}
		else if (number > finalThree[1] || finalThree[1] === null){
			switchAndUpdate(number, finalThree, 1)
		}
		else if (number > finalThree[0] || finalThree[0] === null){
			switchAndUpdate(number, finalThree, 0)
		}
}	


function switchAndUpdate(arrayNumber, finalThree, indexToUpdate){
	// check which index in finalThree to update/switch.
	// loop from start up through and including the indexToUpdate
	// when there is a match stick the arrayNumber into correct index of finalThree
	// if no match to update yet, in the else switch elements
	
				

	for (let i = 0; i <= indexToUpdate; i++){
		if (i === indexToUpdate){
			finalThree[i] = arrayNumber
		}
		else{
			finalThree[i] = finalThree[i +1]
		}
	}	
}








// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
