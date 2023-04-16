const arr = [1,2,3,4,8,9,10,11,12,13,14,15,16,17,18];

//basic
const square = val => val*val;
const cube = val => val*val*val;

console.log(arr.map(square));
console.log(arr.map(cube));

//generalising
const pow = (val,n) => {
    let answer = 1;
    for(let i=0; i<n; i++) {
        answer = answer * val;
    }
    return answer;
}

const calculate = (n) => {
    const output = [];
    for(let i=0; i<arr.length; i++) {
        output.push(pow(arr[i],n));
    }
    return output;
}

console.log(calculate(4));

//polyfill
Array.prototype.calculate = function(n) {
    const output = [];
    for(let i=0; i<this.length; i++) {
        output.push(pow(this[i],n));
    }
    return output;
}

console.log(arr.calculate(2));
console.log(arr.calculate(3));
console.log(arr.calculate(4));


//basic
const binary = val => val.toString(2);
const hexa = val => val.toString(16);

console.log(arr.map(binary));
console.log(arr.map(hexa));
