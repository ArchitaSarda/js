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