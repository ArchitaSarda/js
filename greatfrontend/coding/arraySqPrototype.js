const arr = [1,2,3,4];

const sqFn = num => num*num;

Array.prototype.square = function() {
    // const output = [];
    // for(let i=0; i<this.length; i++) {
    //     output.push(sqFn(this[i]))
    // }
    // return output;
    
    return this.map(sqFn)
}

console.log(arr.square());