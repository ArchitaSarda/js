s = "string"
s[0] = "A"
s[1] = "B"

console.log(s);

n = 45;
n[0] = 5;
console.log(n);

Math.PI = 3;
console.log(Math.PI);


let myObject = {};
Object.defineProperty(myObject, 'number', {
  value: 42,
  writable: false,
  configurable: false,
});
console.log(myObject.number); // 42
myObject.number = 43;
console.log(myObject.number); // 42


let myObject2 = {
  a: 2,
};

Object.preventExtensions(myObject2);
myObject2.a = 4;
myObject2.b = 3;
myObject2.b; // undefined

console.log(myObject2);

const arr = [1,2,3];
Object.freeze(arr);
arr.push(4);
console.log(arr);


