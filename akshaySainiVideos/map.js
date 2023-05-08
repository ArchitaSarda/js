const arr = [1,2,3,4,8,9,10,11,12,13,14,15,16,17,18];


//basic
const binary = val => val.toString(2);
const hexa = val => val.toString(16);
const octa = val => val.toString(8);

console.log(arr.map(binary));
console.log(arr.map(hexa));
console.log(arr.map(octa));



const data = [1,2,3,4,5,""," ",null,undefined];

const square = val => val*val;
const cube = val => val*val*val;

const calculatePower = (n=1) => {
    return (num,index,arr) => {
        let answer = 1;
        for(let i=0; i<n; i++) {
            answer = answer * num;
        }
        return answer;
    }
}

Array.prototype.myMap = function(cbF,thisArg) {
    const output = [];
    for(let i=0;i<this.length;i++) {
        output.push(cbF.call(thisArg,this[i],i,this))
    }
    return output;
}


console.log(data.map(square));
console.log(data.map(cube));

const power = calculatePower(3);
console.log(data.myMap(power));
console.log(data.map(power));
console.log(data.map(calculatePower(3)));


//map on object
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
