

// Instantiate a new graph
var Graph = function() {
 this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.graph[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    for (var key in this.graph) {
      if (Number(key) === node) {
        return true;
      }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
      delete this.graph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
   if(this.contains(fromNode) && this.contains(toNode)){
    if (this.graph[fromNode].includes(toNode) || this.graph[toNode].includes(fromNode)) {
    return true;
  }
}
  
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode)){
    this.graph[fromNode].push(toNode);
}
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    var index = this.graph[fromNode].indexOf(toNode);
    this.graph[fromNode].splice(index, 1);
  

};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this.graph);
   for (var i = 0; i < keys.length; i++){
       cb(Number(keys[i]));
   }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(n)
removeNode: O(1)
hasEdge: O(2n)
addEdge: O(n)
removeEdge: O(n)
forEachNode: O(n)
 */


