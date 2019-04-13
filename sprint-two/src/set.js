var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
    if(!this._storage.includes(item)){
        this._storage.push(item);
  }

};

setPrototype.contains = function(item) {
        if(this._storage.includes(item)){
              return true;
    }
       return false;
};

setPrototype.remove = function(item) {

      if(this._storage.includes(item)){
          var index = this._storage.indexOf(item);
          this._storage.splice(index, 1);
      }
};

/*
 * Complexity: What is the time complexity of the above functions?
add: O(n)
contains: O(n)
remove: O(n)
 */
