//from algo expert
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.

// First Attempt at shiftDown and Swap
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
  }

  siftDown(currentIndex, endIndex, heap) {
		let childOneIndex = currentIndex * 2 + 1
		while (childOneIndex <= endIndex){
			const childTwoIndex = currentIndex * 2 + 2 <= endIndex ?
						currentIndex * 2 + 2
						:
						-1;
			let indexToSwap
			if (childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]){
				indexToSwap = childTwoIndex
			} else {
				indexToSwap = childOneIndex
			}
			if (heap[indexToSwap] < heap[currentIndex]){
				this.swap(currentIndex, indexToSwap, heap)
				currentIndex = indexToSwap
				childOneIndex = currentIndex * 2 + 1
			} else {
				return
			}
		}
	}

  siftUp() {
    // Write your code here.
  }

  peek() {
    // Write your code here.
  }

  remove() {
    // Write your code here.
  }

  insert(value) {
    // Write your code here.
  }


	swap(i, j, heap){
		[heap[i], heap[j]] = [heap[j], heap[i]]
	}

}

// Do not edit the line below.
exports.MinHeap = MinHeap;
