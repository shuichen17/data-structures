var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (_.isEmpty(storage)){
      
       storage[0] = value;
     
    } else {
       var arr = Object.keys(storage);
       var maxIndex = Math.max(...arr);
       storage[maxIndex + 1] = value;

    }
    return storage;

  };

  someInstance.dequeue = function() {
    if(_.isEmpty(storage)){
        return null;
    } else {
        var arr = Object.keys(storage);
        var minIndex = Math.min(...arr);
        var del = storage[minIndex];
        delete storage[minIndex];
        return del;
    }
    
  };

  someInstance.size = function() {

  if(_.isEmpty(storage)){
       return 0;
    } else {
      return Object.keys(storage).length;
    }
  };

  return someInstance;
};
