const getData = (args) => {
    console.log("getdata", args);
}


const debounce = (fn, delayTime=0) => {
    let timerId;
    return (...arguments) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this,arguments)
        },delayTime)
    }
}


const getSuggestions = debounce(getData, 500);



// let input = document.getElementById('name');
// let debounceValue = document.getElementById('debounce-value');
// const updateDebounceValue = () => {
//   debounceValue.innerHTML = input.value;
// }
// let debounceTimer;
// const debounce = (callback, time) => {
//   window.clearTimeout(debounceTimer);
//   debounceTimer = window.setTimeout(callback, time);
// };
// input.addEventListener(
//   "input",
//   () => {
//     debounce(updateDebounceValue, 500)
//   },
//   false
// );
