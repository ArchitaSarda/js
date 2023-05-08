getx();
console.log(getx);
console.log(a);

var a = 6;

console.log(a);

function getx() {
    console.log("getx");
    console.log(x);
    var x = 7;
    console.log(x);
}

var gety = () => {
    console.log("gety");
    var y = 9;
    console.log(y);
    function getz() {
        console.log(y);
    }
    getz();
}

gety();
