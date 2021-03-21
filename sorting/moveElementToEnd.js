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
