const promise = new Promise((res, rej) => {
    console.log("in promise");
    if(true) {
        res("response1");
    } else {
        rej("reject1");
    }
});

console.log("line1");


promise
.then(response => {
    console.log("in promise without new promise then");
    return response;
})
.then((response) => {
    console.log("in promise then", response);
    const promise2 = new Promise((res,rej) => {
        console.log("in promise2");
        res("response2");
    });
    return promise2
})
.then((response) => {
    console.log("in promise2 then", response);
    const promise3 = new Promise((res,rej) => {
        console.log("in promise3");
        res("response3");
    });
    return promise3
}).then((response) => {
    console.log("in promise3 then", response);
})


console.log("line2");

