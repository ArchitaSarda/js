const radius = [1,2,3,4];

const area = rad => Math.PI * rad * rad;
const circumference = rad => 2 * Math.PI * rad;
const diameter = rad => 2 * rad;

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));



Array.prototype.calculate = function(logic) {
    const output = [];
    for(let i=0; i< this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}


console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));