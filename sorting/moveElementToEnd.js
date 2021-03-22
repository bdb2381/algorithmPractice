// Attempt 1
// Time: O(n) need to traverse entre input
// Space: O(1) since sort is in place and depends upon input size
function moveElementToEnd(array, toMove) {
	let current = 0
	let end = array.length - 1

	while(current < end){
		
		// so long as array[end] is matching toMove, find an array[end] that doesn't match
		while(current < end && array[end] === toMove){
			end--
		}
	
		// once we found an end that doesn't match, when we have a current that matches, swap
		if (array[current] === toMove){
			swap(current, end, array)
		}
		
		// we can move forward 1 since we just moved a number into current
		current++
	}
	
	return array
}

function swap(current, end, array){
	[array[end], array[current] ] = [ array[current], array[end] ]

}


// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;


// Attempt 2 27:43 minutes
// uses only 1 while loop. 

function moveElementToEnd(array, toMove) {
	// create current pointer set to 0
	// create end point set to array.length - 1

	// while current < end
		// if array[current] === toMove && array[current] === array[end] 
			// end--
		// else if current != toMove
			//increase current since we can leave it in place
		// else if array[current] != array[end]
			// swap
			// current++ to move to indx
			// end-- 
	
	// return array

	let current = 0
	let end = array.length - 1 
	
	while (current < end){
		
		if ( array[current] === array[end]){
			end--

		}
		else if(array[current] != toMove){
			current++
		}
		else if (array[current] === toMove){
			swap(current, end, array)
			current++
			end--
		}
		
	}
	
	return array
}

function swap(c, e, array){
	[array[e], array[c]] = [array[c], array[e]]
}
// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
