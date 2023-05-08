const cart = ["item1", "item2"];
const cart2 = [];

console.log("line1");

function createOrder(cart) {
    return new Promise((resolve,reject) => {
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
}

function proceedToPayment(orderId) {
    return new Promise((resolve,reject) => {
        if(orderId) {
            resolve({
                success: true,
                msg: "payment done",
                orderId: 1,
                paymentId: 11
            })
        } else {
            reject({
                success: false,
                msg: "payment failed"
            })
        }
    })
}

function updateCart(orderId,paymentId) {
    return new Promise((resolve,reject) => {
        if(orderId && paymentId) {
            resolve({
                success: true,
                msg: "cart updated",
            })
        } else {
            reject({
                success: false,
                msg: "cart updation failed"
            })
        }
    })
}

console.log("line2");


// createOrder(cart).then(response => {
//     console.log(response.msg);
//     return proceedToPayment(response.orderId);
// }).then(response => {
//     console.log(response.msg);
//     return updateCart(response.orderId, response.paymentId)
// }).then(response => {
//     console.log(response.msg);
// }).catch(error => {
//     console.log(error.msg);
// }).finally(() => {
//     console.log("will get executed");
// })

console.log("line3");

async function orderApi() {
    try {
        const result1 = await createOrder(cart);
        const result2 = await proceedToPayment(result1.orderId);
        const result3 = await updateCart(result2.orderId, result2.paymentId);
        console.log(result3);
        console.log("line6");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("will get executed");
    }
}

console.log("line4");

orderApi();

console.log("line5");