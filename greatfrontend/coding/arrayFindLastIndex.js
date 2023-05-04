const findLastIndex = (array, predicate, fromIndex = array.length-1) => {
    const {length} = array;
    if(!Array.isArray(array) || length === 0) {
        return -1;
    }
    if(typeof predicate !== 'function') {
        return -1;
    }
    let endIndex =
        fromIndex < 0
        ? Math.max(length + fromIndex, 0)
        : Math.min(fromIndex, length - 1);

    let index = array.length - 1;

    while (index >= endIndex) {
        if (predicate(array[index], index, array)) {
        return index;
        }
        index--;
    }
    return -1;
}



const arr = [5, 4, 3, 2, 1];

// Search for the last number in the array that is greater than 3
console.log(findLastIndex(arr, (num) => num > 3)); // Returns index 1

// Start searching from index 3 (inclusive)
console.log(findLastIndex(arr, (num) => num <= 1, 3)); // Returns index 4

console.log(findLastIndex(arr, (num) => num < 1, 3)); // Returns index -1


// import findLastIndex from './find-last-index';

// /* eslint-disable no-undef */
// describe('findLastIndex', () => {
//   const array = [1, 2, 3, 4, 5];

//   test('returns the index of the last element that satisfies the predicate', () => {
//     const predicate = (value) => value > 2;
//     expect(findLastIndex(array, predicate)).toEqual(4);
//   });

//   test('returns -1 if no element satisfies the predicate', () => {
//     const predicate = (value) => value > 5;
//     expect(findLastIndex(array, predicate)).toEqual(-1);
//   });

//   test('returns -1 if the array is empty', () => {
//     const predicate = (value) => value > 5;
//     expect(findLastIndex([], predicate)).toEqual(-1);
//   });

//   test('starts the search from the given index', () => {
//     const predicate = (value) => value < 4;
//     expect(findLastIndex(array, predicate, 3)).toEqual(-1);
//   });

//   test('handles negative fromIndex', () => {
//     const predicate = (value) => value > 3;
//     expect(findLastIndex(array, predicate, -2)).toEqual(4);
//   });

//   test('handles out of range index', () => {
//     expect(findLastIndex(array, (value) => value > 3, 10)).toEqual(4);
//     expect(findLastIndex(array, (value) => value % 2 == 0, -10)).toEqual(3);
//   });
// });