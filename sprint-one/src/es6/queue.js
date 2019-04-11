class Queue {  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
  }
  enqueue (value) {
   if(_.isEmpty(this.storage)){
      this.storage[0] = value;
    } else {
      var arr = Object.keys(this.storage);
      var max = Math.max(...arr);
      this.storage[max + 1] = value;
     
    }
}
  dequeue () {
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
   size () {
    if(_.isEmpty(this.storage)){
      return 0;
    } else {
      return Object.keys(this.storage).length;
    }
  
}



}
var instance = new Queue();


