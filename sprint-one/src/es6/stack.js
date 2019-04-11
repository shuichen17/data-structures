class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
  }


push (value){
  if(_.isEmpty(this.storage)){
  this.storage[0] = value;
    } else {
  var arr = Object.keys(this.storage);
  var max = Math.max(...arr);
  this.storage[max + 1] = value;   
  }
}
  pop  () {
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
size  () {
    if (_.isEmpty(this.storage)){
      return 0;
     }
    else {

     return Object.keys(this.storage).length;
}
    
}



}
var instance = new Stack();