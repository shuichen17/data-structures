var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var subTree = Tree(value);
  this.children.push(subTree);
  
  

};

treeMethods.contains = function(target) {
       if (this.value === target){
            return true;
    }

    for(var i = 0; i < this.children.length; i++){
        var currentSubTree = this.children[i];
         if (currentSubTree.contains(target)){
             return true;
    }
  }
   
  return false;
};

/////////////////////////////////////////////

/*
 * Complexity: What is the time complexity of the above functions?
addChild: O(1)
contains: O(n) every layer of nodes has time complexity of O(n). Ignore constant n * O(n)
 */
