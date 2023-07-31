// let arr = ["a","s","d","f"];

// console.time("for")

// for(let a in arr) {
//   console.log(arr[a]);
// }

// console.timeEnd("for")

// console.time("for")

// for(let a of arr) {
//   console.log(a);
// }
// console.timeEnd("for")

// console.time("for")

// for(let a=0;a<arr.length;a++) {
//   console.log(arr[a]);
// }
// console.timeEnd("for")

// console.time("for")

// arr.forEach((a,i) => {
//   console.log(a);
// })
// console.timeEnd("for")



let obj = {
  key1: "val1",
  key2: "val2",
  key3: "val3",
}

Object.defineProperty(obj, 'marks', {
        value: 98,
        configurable: true,
        writable: false,
        enumerable: false,
    });

console.log(obj);

console.time("for");

Object.keys(obj).forEach(val => console.log(obj[val]))

console.timeEnd("for")

console.time("for");

for(let key in obj) {
  console.log(obj[key]);
}

console.timeEnd("for")

console.time("for");

Object.getOwnPropertyNames(obj).forEach((property) => {
  console.log(obj[property]);
});

console.timeEnd("for");