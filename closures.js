function a() {
    var a1 = 7;
    var a2 = 9;
    console.log(a2);
    return () => {
        console.log(a1);
    }
}
a()();

var a3 = a();

console.log(a3);
a3();