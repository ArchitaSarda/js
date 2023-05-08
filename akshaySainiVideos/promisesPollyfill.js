const cart = ["item1", "item2", "item3"];
const cart2 = [];

let executor = (resolve, reject) => {
    if(cart2.length > 1) {
        resolve("success");
    } else {
        reject("failure");
    }
}

const promise = new Promise(executor)

promise
.then(response => console.log(response))
.catch(error => console.log(error))


function MyPromise(executor) {
    let onResolve, onReject;
    let fulfilled = false, called = false, value;
    function resolve(val) {
        fulfilled = true;
        value = val;
        if(typeof onResolve === 'function') {
            onResolve(val);
            called = true; 
        }
    }
    function reject(val) {
        fulfilled = true;
        value = val;
        if(typeof onReject === 'function') {
            onReject(val);
            called = true; 
        }
    }
    this.then = function(callback) {
        onResolve = callback;
        if (fulfilled && !called) {
            called = true;
            onResolve(value);
        }
        return this;
    }
    this.catch = function(callback) {
        onReject = callback;
        if (fulfilled && !called) {
            called = true;
            onReject(value);
        }
        return this;
    }
    executor(resolve,reject)
}

const promise2 = new MyPromise(executor)

promise2
.then(response => console.log(response))
.catch(error => console.log(error))