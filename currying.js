// currying through bind

// let multiply = function(x,y) {
//     console.log(x*y);
// }

// multiply(2,4);

// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(4);



// curring through closures

let multiply = function(x) {
    return function (y) {
        console.log(x*y);
    }
}

let multiplyBy2 = multiply(2);
multiplyBy2(4);



//currying in react
//exampe 1

// const handleClick = (data) => {
//     setVal(data)    
// }

// const handleClick = data => () => {setVal(data)}

// <input onclick={handleClick(data)} />



