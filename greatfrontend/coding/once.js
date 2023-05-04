// Sometimes it's helpful to ensure a function runs only once during the lifecycle of the website, e.g. for setting up logging, initializing an environment, etc.

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const once = (func) => {
    let ranOnce = false;
    let ans;
    return (...args) => {
        if(!ranOnce) {
            ans = func.apply(this, args);
            ranOnce = true;
        }
        return ans;
    }
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce(2)); // i is now 3; The function returns 3.
console.log(incrementByOnce(3)); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
console.log(incrementByOnce(2)); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.
console.log(i);





// import once from './once';

// /* eslint-disable no-undef */
// describe('once', () => {
//   test('returns function', () => {
//     const onced = once(() => {});
//     expect(onced).toBeInstanceOf(Function);
//   });

//   test('only run once', () => {
//     let i = 0;
//     const onced = once(() => ++i);

//     onced();
//     onced();
//     expect(i).toBe(1);
//   });

//   test('returns the value of the first invocation', () => {
//     let i = 0;
//     const onced = once(() => ++i);
//     expect(onced()).toBe(1);
//     expect(onced()).toBe(1);
//     expect(i).toBe(1);

//     i = 99;
//     expect(onced()).toBe(1);
//     expect(i).toBe(99);
//   });

//   describe('accepts arguments', () => {
//     test('single arguments', () => {
//       const onced = once((a) => a * 2);

//       expect(onced(2)).toBe(4);
//       expect(onced(6)).toBe(4);
//       expect(onced(100)).toBe(4);
//     });

//     test('two arguments', () => {
//       const onced = once((a, b) => a + b);

//       expect(onced(2, 3)).toBe(5);
//       expect(onced(6, 7)).toBe(5);
//     });
//   });

//   test('can access this', () => {
//     const onced = once(function (val) {
//       return this.multiplier * val;
//     });

//     const obj = { multiplier: 5, mul: onced };
//     expect(obj.mul(7)).toBe(35);
//     expect(obj.mul(10)).toBe(35);
//   });
// });