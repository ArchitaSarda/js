const fill = (array, value, start = 0, end = array.length) => {
    const arraySize = array.length;
    if(start < 0 && end < 0) {
       start = arraySize - (start*-1);
       end = arraySize - (end*-1);
    }
    let i=start;
    while(i<arraySize && i<end) {
        array[i] = value;
        i++;
    }
    return array;
}


const array = [1, 2, 3];
console.log(fill(array, 'a')); // => ['a', 'a', 'a']
console.log(fill([4, 6, 8, 10], '*', 1, 3)); // => [4, '*', '*', 10]
console.log(fill(array, '*', 1, 10));



// import fill from './fill';

// /* eslint-disable no-undef */
// describe('fill', () => {
//   test('fills array with value from start to end', () => {
//     const arr = [1, 2, 3, 4, 5];
//     expect(fill(arr, '*', 2, 4)).toEqual([1, 2, '*', '*', 5]);
//   });
//   test('fills array with value from start to end by default', () => {
//     const arr = [1, 2, 3];
//     expect(fill(arr, '*')).toEqual(['*', '*', '*']);
//   });
//   test('fills array with value from start to end when negative indices are provided', () => {
//     const arr = [1, 2, 3];
//     expect(fill(arr, '*', -2, -1)).toEqual([1, '*', 3]);
//   });
//   test('fills array with value from start to end when out of range indices are provided', () => {
//     const arr = [1, 2, 3];
//     expect(fill(arr, '*', 1, 10)).toEqual([1, '*', '*', '*']);
//   });
//   test('mutates original array', () => {
//     const arr = [1, 2, 3];
//     expect(fill(arr, '*', 1, 2)).toBe(arr);
//   });
// });