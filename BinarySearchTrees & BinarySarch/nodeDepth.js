function nodeDepths(root) {
	let runningDepth = -1 
	let arrayToSum = []
	
	sumDepth(root, runningDepth, arrayToSum)
		
	return arrayToSum.reduce((x, y) => x + y) 
	
}

function sumDepth(node, runningDepth, arrayToSum ){
	if(!node){
		return
	}
	
  // depth of left side, which is found first
	runningDepth = runningDepth + 1

  // because depth is calculated by recursive loop, rightside depth is always minus 1 of running depth
	if(node.right === this.right){
		runningDepth = runningDepth - 1
	}
		
	arrayToSum.push(runningDepth)

	if(!node.left && !node.right){
		return arrayToSum
	}
	
	sumDepth(node.left, runningDepth, arrayToSum)
	sumDepth(node.right, runningDepth, arrayToSum)
	
}



// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
		
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
