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

// window.addEventListener("resize",windowResizeCb);
