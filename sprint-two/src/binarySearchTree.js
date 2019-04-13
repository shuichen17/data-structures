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
  if(this.value === undefined){
      this.value = value;
      return;

  } else {
    if (value < this.value) {
     if(this.left !== null) {
      this.left.insert(value);
     } else {
      this.left = BinarySearchTree(value);
     }
     
    //this.left = BinarySearchTree(value);
    } 
    

  // if value is greater than current node, add it to right of current node
      else {
        if(this.right !== null){
         this.right.insert(value); 
        } else {
          this.right = BinarySearchTree(value);
        }
       
  
        }
  }
  
}

treeMethod.contains = function(value) {
  if (this.value !== undefined){
    if(this.value === value){
    return true;
   } else {
    if(this.left !== null){
     if(this.left.contains(value)){
      return true;
     }; 
    }
    if(this.right !== null){
    if(this.right.contains(value)){
      return true;
    };  
    }
   }
  }
   
   return false;
};

treeMethod.depthFirstLog = function(cb) {
  if(this.value === undefined){
    return;
  } else {
    cb(this.value);
    if(this.left !== null){
      this.left.depthFirstLog(cb);
    }
    if(this.right !== null){
      this.right.depthFirstLog(cb);
    }

  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
