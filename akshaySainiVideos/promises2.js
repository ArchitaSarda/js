const cart = ["item1", "item2", "item3"];
const cart2 = [];
console.log("line1");
function createOrder(cart) {
    const promise = new Promise((resolve, reject) => {
        if(cart.length > 1) {
            resolve({
                success: true,
                msg: "cart created",
                orderId: 1
            })
        } else {
            reject({
                success: false,
                msg: "cart creation failed"
            })
        }
    })
    return promise;
}
console.log("line2");

const order = createOrder(cart);

console.log("line3");

order.then(response => {
    console.log(response.msg);
}).catch(error => {
    console.log(error.msg);
})

console.log("line4");

const order2 = createOrder(cart2);
order2.then(response => {
    console.log(response.msg);
}).catch(error => {
    console.log(error.msg);
})

console.log("line5");