const dropRightWhile = (array, predicate) => {
    let i = array.length-1;
    while(i >= 0 && predicate(array[i])) {
        i--;
    }
    return array.slice(0,i+1);
}


console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value < 3)); 
console.log(dropRightWhile([1, 2, 3], (value) => value > 6)); 

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
console.log(dropRightWhile(users, function(o) { return !o.active; }));
// => objects for ['barney']

// import dropRightWhile from './drop-right-while';

// /* eslint-disable no-undef */
// describe('dropRightWhile', () => {
//   test('should drop elements from the right until predicate returns falsey', () => {
//     const array = [1, 2, 3, 4, 5];
//     const predicate = (value) => value > 3;
//     expect(dropRightWhile(array, predicate)).toEqual([1, 2, 3]);
//   });

//   test('should return original array if predicate always returns falsey', () => {
//     const array = [1, 2, 3, 4, 5];
//     const predicate = (value) => value < 0;
//     expect(dropRightWhile(array, predicate)).toEqual([1, 2, 3, 4, 5]);
//   });

//   test('should return empty array if predicate always returns truthy', () => {
//     const array = [1, 2, 3, 4, 5];
//     const predicate = (value) => value < 6;
//     expect(dropRightWhile(array, predicate)).toEqual([]);
//   });

//   test('should return an empty array if array is empty', () => {
//     const array = [];
//     const predicate = (value) => value > 3;
//     expect(dropRightWhile(array, predicate)).toEqual([]);
//   });
// });