const arr = [1,2,3,4,8,9,10,11,12,13,14,15,16,17,18];

const greaterThan4 = val => val>4;
const isEven = val => val%2 === 0;

console.log(arr.filter(greaterThan4));
console.log(arr.filter(isEven));

//polyfill
Array.prototype.calculate = function(logic) {
    let output = [];
    for(let i=0; i<this.length; i++) {
        if(logic(this[i]))
            output.push(this[i]);
    }
    return output;
}

console.log(arr.calculate(greaterThan4));
console.log(arr.calculate(isEven));


//pollyfill
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const output = [];
  for(let i=0; i<this.length; i++) {
    if(this[i] && callbackFn.call(thisArg, this[i], i, this)) {
      output.push(this[i])
    }
  }
  return output;
};


const divisibleBy2 = val => val%2 === 0
const divisibleBy3 = val => val%3 === 0

const divisibleByN = (n=1) => {
    return (val) => val%n === 0
}

console.log(arr.filter(divisibleBy2));
console.log(arr.filter(divisibleBy3));

const divisibleBy4 = divisibleByN(4);
console.log(arr.filter(divisibleBy4));