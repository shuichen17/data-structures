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
  // first we check if the tree is empty
  // if the tree is empty, set the value as the root position
  if (this.value === undefined){ //recursion start
        this.value = value;
        return;

} else { //if the tree isn't empty, we scan each node to compare node to value
  // if the value is less than current node, 
  if (value < this.value) {
    if (this.left === null){ //if current node's left is empty, set value to left position
      this.left = BinarySearchTree(value);
    } else { //if current node's left is not empty, we do left recursion until node's left is empty
      this.left.insert(value);
    } 
  } else {
  // if value is greater than current node, add it to right of current node
      if (this.right === null){//if current node's right is empty, set value to right position
       this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value); //if current node's right is not empty, we do right recursion until node's right is empty
      }
    }
  }
};

treeMethod.contains = function(value) {
    if (this.value !== undefined){
    if (this.value === value){
       return true;
    } else {
      if (this.left !== null){
        if(this.left.contains(value)){
          return true;
        }
      }
      if (this.right !== null) {
        if(this.right.contains(value)){
          return true;
      }
      }
      return false;
}
  

} 
  
};

treeMethod.depthFirstLog = function(cb) {
   if (this.value !== undefined){
      cb(this.value);
      if (this.left !== null){
        this.left.depthFirstLog(cb); 
      }
      if (this.right !== null) {
        this.right.depthFirstLog(cb);
      }
    }



};
/*
 * Complexity: What is the time complexity of the above functions?
 */
