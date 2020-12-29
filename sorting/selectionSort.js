// from algoExpert 
//https://www.algoexpert.io/questions/Selection%20Sort


const array = 8, 5, 2, 9, 5, 6, 3

// O(n**2) time. O(1) space 
function selectionSort(array) {
  let unsortedIndex = 0 // the start of the unsorted portion 
	
	while (unsortedIndex < array.length-1){
		let smallestIndex = unsortedIndex // create ability to track smallest int in array
		for (let i = unsortedIndex + 1; i < array.length; i++){ // find smallest on each loop
			if (array[i] < array[smallestIndex]){  // 
				smallestIndex = i
				}
			}
		swap(unsortedIndex,smallestIndex, array)  //make smalleste change places with start of unsorted
		
		unsortedIndex++ // make new start to unsorted section of array, any item before this is sorted
	}
	return array
}


function swap(i, j, array){
	[array[i], array[j]] = [array[j], array[i]]
}


// Do not edit the line below.
// exports.selectionSort = selectionSort;



// Attempt 3 with explantion. Almost from memory
function selectionSort(array) {
	// declare startingIndexUnsorted, which is starting index of unsorted array
	// need two loops, one that runs everything and the swap and an inner that tracks only the smallest ind
	
	let startingIndexUnsorted = 0
	
	while (startingIndexUnsorted < array.length - 1){  // keep going until we check everything
		let smallestIndex = startingIndexUnsorted  // initialize to first position in case this position holds smallest number

		for (let i = startingIndexUnsorted + 1; i < array.length; i++){  // find smallest in the unsorted array
			if(array[smallestIndex] > array[i]){  // if number in smallestIndex pointer is bigger then, 
				 smallestIndex = i									// track which index has smallest 

			}
		}
			swap(startingIndexUnsorted, smallestIndex, array) // swap the numbers in the smallest and the former startingIndexUnosrted
			startingIndexUnsorted++
	}
  return array	
	
}

function swap(i, j, array){
	[array[i], array[j]] = [array[j], array[i]]
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
