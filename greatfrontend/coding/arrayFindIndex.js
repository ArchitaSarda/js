const findIndex = (array, predicate, fromIndex = 0) => {
    if(!Array.isArray(array) || array.length === 0) {
        return -1;
    }
    if(typeof predicate !== 'function') {
        return -1;
    }
    if(fromIndex < 0) {
        if(fromIndex < array.length*-1) {
            fromIndex = 0;
        } else {
            fromIndex = array.length - (fromIndex*-1);
        }
    }
    if(fromIndex >= array.length) {
        return -1;
    }
    let i=fromIndex || 0;
    while(i<array.length) {
        if(predicate(array[i])) {
            return i;
        }
        i++;
    }
    return -1;
}


const arr = [1, 2, 3, 4, 5];

// Search for the first number in the array that is greater than 3
console.log(findIndex(arr, (num) => num > 3)); // Returns index 3

// Start searching from index 3 (inclusive)
console.log(findIndex(arr, (num) => num > 3, 4)); // Returns index 4

console.log(findIndex(arr, (num) => num > 10, 3)); // Returns index -1



// import findIndex from './find-index';

// /* eslint-disable no-undef */
// describe('findIndex', () => {
//   const arr = [5, 12, 8, 130, 44];

//   test('finds index of first even number', () => {
//     const result = findIndex(arr, (num) => num % 2 === 0);
//     expect(result).toBe(1);
//   });

//   test('returns -1 if no element passes test', () => {
//     const result = findIndex(arr, (num) => num > 200);
//     expect(result).toBe(-1);
//   });

//   test('returns -1 if array is empty', () => {
//     const result = findIndex([], (num) => num > 200);
//     expect(result).toBe(-1);
//   });

//   test('searches from given start index', () => {
//     const result = findIndex(arr, (num) => num % 2 === 0, 3);
//     expect(result).toBe(3);
//   });

//   test('handles negative fromIndex', () => {
//     const result = findIndex(arr, (num) => num > 3, -2);
//     expect(result).toEqual(3);
//   });

//   test('handles out of range index', () => {
//     expect(findIndex(arr, (value) => value >= 12, 10)).toEqual(-1);
//     expect(findIndex(arr, (value) => value >= 12, -10)).toEqual(1);
//   });
// });