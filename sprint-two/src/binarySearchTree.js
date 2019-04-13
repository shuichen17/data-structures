var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;

  tree.left = null;
  tree.right = null;
  
_.extend(tree, treeMethod);
  return tree;
};

var treeMethod = {};
treeMethod.insert = function (value) {
  // check value we want to insert to the current node
  // if the value is less than current node, then add it left of current node
  
  if (value < this.value) {
     if (this.left !== undefined){
     this.left.insert(value);
    this.left = BinarySearchTree(value);
    } else {
     this.left = BinarySearchTree(value);
      }
    
  } else {
  // if value is greater than current node, add it to right of current node
      if (this.right !== undefined){
       this.right.insert(value);
      this.right = BinarySearchTree(value);
      } else {
       this.right = BinarySearchTree(value);
        }
  }
   
}

treeMethod.contains = function(value) {

};

treeMethod.depthFirstLog = function(cb) {
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
