// sum(1)(2)(3)(4)...(n)()

//step 1
function sum2(n) {
    return function y (nxt) {
        return function () {
            return n+nxt;
        }
    }
}

// console.log(sum2(1)(2)());


function sum3(n) {
    return function y (nxt) {
        return function z(nxt2) {
            return function () {
                return n+nxt+nxt2;
            }
        }
    }
}

// console.log(sum3(1)(2)(3)());


//step 2
// function sum(n) {
//     return function (nxt) {
//         if (nxt !== undefined) return sum(n+nxt)
//         else return n
//     }
// }

const sum = n => nxt => nxt !== undefined ? sum(nxt+n) : n

console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4)(5)(6)());
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)());

