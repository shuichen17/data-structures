

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//var index = 2;
  // if there isn't a bucket in the hash table at index, then we add a bucket
// and add that tuple to the new bucket
  var bucket = [];
  var flag = true;
  if (!Array.isArray(this._storage.get(index))) {
    
    bucket.push([k, v]);
    this._storage.set(index, bucket);
     
  } else {
// if there already is a bucket, then we push the tuple to the bucket
   var currentBucket = this._storage.get(index);
   for(var i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === k){
              currentBucket[i] = [k, v];
              flag = false;
      }
          
    }
      if(flag === true){
          currentBucket.push([k, v]);
    }
    this._storage.set(index, currentBucket);
    
  }   
};

HashTable.prototype.retrieve = function(k) {
 //var index = 2
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index)
  if(Array.isArray(array)){
     for(var i = 0; i < array.length; i++){
      if(array[i] !== undefined){
        if (array[i][0] === k){
     return array[i][1]; 
    }
       
      } 
  }
 
}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, undefined]);
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1)    // get index from hashTable is O(1) because it is same as get index from array.
normally hashTable has buckets with index and in each bucket, there is only one tuple in bucket. 
retrieve: O(1)  // same way 
remove: O(1)     // same way
 */


