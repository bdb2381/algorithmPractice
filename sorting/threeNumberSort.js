// via AlgoExpert 


const array = [1, 0, 0, -1, -1, 0, 1, 1]
const order = [0, 1, -1]

// Solution 1
// O(n) runtime and O(1) memory
function threeNumberSort(array, order) {
	let orderCount = [0, 0 ,0]
	
	for (i in array){  // count number of times array[i] appears
		let orderIndex = order.indexOf(array[i]) 
		// match the num (from array[item]) to num's matching num in order array.
		// if there is a match, provide the index number of that match

		orderCount[orderIndex]++
		//increase value in orderIndex by 1 for every match from array
	}
	
for (let i = 0; i < 3; i++){ // using orderCount tracking, replace all items in array based on its sequence and tracking
	let value = order[i] 				// actual number, such as 9, or -8
	let count = orderCount[i] 	// how many value(s) to insert
	
	
	let numOfElementsBefore = orderCount.slice(0, i).reduce((a, b) => a+b, 0) 
	// determine how many elements come before the new value insert location
	// slice out start at index 0 through index 0 (on first loop) and reduce these two values to 1 number
	
	for(let n = 0; n < count; n++){
		// insert values from order[] according to how many we counted in first loop
		const currentIndex = numOfElementsBefore + n //determine location to insert, on first loop, it'll be itself
		array[currentIndex] = value // insert the appropriate value into the array
	}
}	

	return array
}

// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;



// Solution 2 
// sort on first order[0], sort on last order[2] which leaves oder[1] sorted.  
  // optimized second for loop to stop at switchIndex-1 since first array portion is sorted
  // O(n) run time 
function threeNumberSort(array, order) {
  const firstOrder = order[0]  	// create key for first array subsegment
	const lastOrder = order[2]		// create key for last array subsegment 
	// middle subsegment will self order based on sorting firstand last
	
	let switchIndex = 0
	for(let i = 0; i < array.length; i++){  // loop through entire array
		if(array[i] === firstOrder){					// only if we have a match do we swap because switchIndex tracks which last index was not the match
			swap(i, switchIndex, array)					// swap
			switchIndex++												// move index into the next position, which not a match to firstOrder
			console.log(switchIndex)
		}
	}
	
	let switchLastIndex = array.length-1		// set starting point to the last index (length-1)
	for(let i = array.length-1; i > switchIndex-1; i--){  // start at last index, loop downwards, stop when reach sorted firstOrder
		if(array[i] === lastOrder){
			swap(i, switchLastIndex, array)
			switchLastIndex --
		}
	}
	
	return array
}

function swap(i, j, array){
	[array[i], array[j]] = [array[j], array[i]]
}


// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
