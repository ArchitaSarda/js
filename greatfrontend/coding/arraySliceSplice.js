const arr = [1,2,3,4,5];

// console.log(arr.slice());
// console.log(arr.slice(1));
// console.log(arr.slice(1,5));
// console.log(arr.slice(0,8));
// console.log(arr.slice(-4,-1));
// console.log(arr.slice(-1,-5));
// console.log(arr.slice(-3,5));
// console.log(arr.slice(1,-5));
// console.log(arr.slice(4,-1));
// console.log(arr.slice(1,-2));


const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits);
fruits.splice(2, 1, "Lemon", "Kiwi")
console.log(fruits);
fruits.splice(2, 3)
console.log(fruits);