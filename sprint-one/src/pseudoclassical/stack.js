var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 this.storage = {};


};

Stack.prototype.push = function(value){
  if(_.isEmpty(this.storage)){
  this.storage[0] = value;
    } else {
  var arr = Object.keys(this.storage);
  var max = Math.max(...arr);
  this.storage[max + 1] = value;   
  }
}
Stack.prototype.pop = function () {
  if(_.isEmpty(this.storage)){
     return undefined;
    } else {
     var arr = Object.keys(this.storage);
     var max = Math.max(...arr);
     var del = this.storage[max];
     delete this.storage[max];
     return del;
    }
}
Stack.prototype.size = function () {
    if (_.isEmpty(this.storage)){
      return 0;
     }
    else {

     return Object.keys(this.storage).length;
}
    
}

var instance = new Stack();

