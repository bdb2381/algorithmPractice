// via AlgoExpert 

//O(n**2)
function insertionSort(array) {
  // for each index in array, start at index 1, called j
	// while index j is smaller then index j-1 (the index on the leftside of J)
	//swap() index j for idex j-1
	
	for(let i = 1; i < array.length; i++){
		let j = i //j tracks how many positions traveled, until reach array.length
		
		while ( array[j] < array[j-1]){  // so long as j is smaller then its leftside neighhor, swap them
			swap(j, j-1, array)
			j--
		}
	}
	return array
}


function swap(j, i, array){
	 return [array[j], array[i]] = [array[i], array[j]]
}


// Do not edit the line below.
exports.insertionSort = insertionSort;
