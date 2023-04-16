//sum(1,2,3..m)(4,5,6..m)(7,8,9..m)…n()

// console.log(sum(1,2,3,4)(2,3,4)(3,6,7)(4,5)()) //44

//step 1
// const sum = (...args) => {
//     console.log(args);
//     // let total = 0;
//     // for(let i=0;i<args.length;i++) {
//     //     total = total+args[i];
//     // }
//     // console.log(total);
    
//     let total = args.reduce((acc,val) => acc + val,0);
//     console.log(total);
//     return total;
// }

// console.log(sum(1,2,3,4));


// step 2

// const sum = (...args) => {
//     return (...arg) => {
//         // return arg.reduce((acc,val) => acc + val,0) + args.reduce((acc,val) => acc + val,0);
//         return [...arg, ...args].reduce((acc,val) => acc + val,0)
//     }
// }

// console.log(sum(1,2,3,4)(2,3,4));


//step 3

const sum = (...args) => {
    return (...arg) => {
        if(arg.length > 0)
            return sum(...[...arg, ...args])
        else
            return args.reduce((acc,val) => acc + val,0)
    }
}

console.log(sum(1,2,3,4)(2,3,4)())
console.log(sum(1,2,3,4)(2,3,4)(3,6,7)(4,5)())