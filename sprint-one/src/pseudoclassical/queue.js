var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.storage = {};



};





Queue.prototype.enqueue = function (value) {
   if(_.isEmpty(this.storage)){
      this.storage[0] = value;
    } else {
      var arr = Object.keys(this.storage);
      var max = Math.max(...arr);
      this.storage[max + 1] = value;
     
    }
}
Queue.prototype.dequeue = function () {
    if(_.isEmpty(this.storage)){
      return undefined;
    } else {
      var arr = Object.keys(this.storage);
      var min = Math.min(...arr);
      var del = this.storage[min];
      delete this.storage[min];
      return del;
    }

}
Queue.prototype.size = function () {
    if(_.isEmpty(this.storage)){
      return 0;
    } else {
      return Object.keys(this.storage).length;
    }
  
}

var instance = new Queue();



