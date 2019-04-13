var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail == null){
        list.head = newNode;
        list.tail = newNode;
    } else {
        list.tail.next = newNode;
        list.tail = newNode;
        
}

  };

  list.removeHead = function() {
     //var head = new Node;
   if(list.head === null){
          return null;
}

     var remove = list.head.value;
         list.head = list.head.next;
         return remove;
};


  list.contains = function(target) {
     while(list.head !== null){
          if (list.head.value === target){
              return true;
        } 
          list.head = list.head.next;

    }

     return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addTail: O(1) cause finds tail and adds it. Same steps every time.
removeHead: O(1) 
contains: O(n) cause worst case it looks through the whole list

 */
