// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
// from AlgoExpert


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // Time  is O(v + e)
  // Space is O(v)
  // v is each vertices (aka node)
  // e is an edge a parent has to its child(ren) 
  depthFirstSearch(array) {
		// add name of node eah t ime depthFirstSearch function is called
		array.push(this.name)  
		
		// for every child in hte parent array, call the DFS function on it
		// pass the child.DFS the array so to give access to append the name
		for (let child of this.children){	
			child.depthFirstSearch(array)
		}
		return array
  }
}

// Do not edit the line below.
exports.Node = Node;


// Attempt 2  9.40 minutes

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		array.push(this.name)

	for(const child of this.children){
		child.depthFirstSearch(array)
	}		
		return array
	}
	
	
	
}

// Do not edit the line below.
exports.Node = Node;
