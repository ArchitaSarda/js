//sum(1)(2)(3)



function add(x){
    let sum = x;
    return function resultFn(y){
        sum += y;
        resultFn.result = sum;
        return resultFn;
    }
}

console.log(add(3)(4)(5).result)