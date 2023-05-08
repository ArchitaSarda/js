function a(b) {
    console.log(b);
    b();
}

a(function b() {
    console.log("hello");
})


setTimeout( ()=> {
    console.log("settimeout");
}, 1000);