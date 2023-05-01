const cart = ["item1", "item2", "item3"];
const cart2 = [];

const promise = new Promise((resolve,reject) => {
    if(cart.length > 1) {
        resolve("success");
    } else {
        reject("failure");
    }
})

promise
.then(response => console.log(response))
.catch(error => console.log(error))


function MyPromise(resolveFn, rejectFn) {

}