// via AlgoExpert 
//https://www.algoexpert.io/questions/Bubble%20Sort


const array = [8, 5, 2, 9, 5, 6, 3]

// Solution 1.  Time: O(N**2)
function bubbleSort(array) {
  // track if array isSorted. true means nothing left to sort
	// track how many while loops in counter to enhance runtime
	// track how many loops completed in the while loop via counter to ensure the array is fully sorted 
	// for each index, compare i to j and if i >= j, swap(i, j, array) where j is i+1 
	// restart while loop process when i reaches array.length - 1 - counter 
	// finish when isSorted = true, return array
	
	let isSorted = false
	let counter = 0
	
	while (isSorted == false){
		isSorted = true
		for(let i = 0; i < array.length - 1 - counter; i++){
			if(array[i] > array[i+1]){
				swap(i, i+1, array)
				isSorted = false
			}
		}
			counter++
	}
	
	return array	
}

function swap(i, j, array){
	[array[i], array[j]] = [array[j], array[i]]
	return array
}
	

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
