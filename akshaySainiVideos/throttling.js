// const getData = () => {
//     console.log("getdata");
// }

// const throttle = (fn, delay) => {
//     let flag = true;
//     return (...args) => {
//         if(flag) {
//             fn.apply(this, [args]);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             },delay)
//         }
//     }
// }
// const windowResizeCb = throttle(getData, 1000);

// const debounce = (fn, delay) => {
//     let timerId;
//     return (...args) => {
//         clearTimeout(timerId);
//         timerId = setTimeout(() => {
//             fn.apply(this,[args]);
//         }, delay)
//     }
// }

// window.addEventListener("resize",windowResizeCb);

const b = () => {
    console.log("b called");
}

const a = (b) => {
    console.log("a called");
    b();
}

a();
