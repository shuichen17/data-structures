var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
      if(_.isEmpty(storage)){
        storage[0] = value;
    } else {
        var arr = Object.keys(storage);
        var max = Math.max(...arr);
        storage[max + 1] = value;
    }
    return storage;
  };

  someInstance.pop = function() {
     if(_.isEmpty(storage)){
      return undefined;
  } else {
       var arr = Object.keys(storage);
       var max = Math.max(...arr);
       var del = storage[max];
       delete storage[max];
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
