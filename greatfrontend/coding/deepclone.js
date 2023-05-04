const obj = {
    a: {
        b: {
            c: {
                d: function() {
                    const z = "some function value";
                    let y = 0;
                    y++
                    console.log("in d")
                    return y;
                },
                e: "value2"
            },
            f: new Date(),
        },
        g: "value4",
        h: {
            i: [1,2,[3,6],[4],5]
        }
    },
    j: Infinity,
    k: null,
    l: undefined,
    m: new Set([1,2,3])
}


// var object_create = Object.create;
// if (typeof object_create !== 'function') {
//     object_create = function(o) {
//         function F() {}
//         F.prototype = o;
//         return new F();
//     };
// }
function deepClone(src) {
    const dest = {}
    // console.log("HERE", src, typeof src);
    if(src === null || typeof(src) !== 'object'){
        // console.log("here1", src);
        return src;
    }

    //Honor native/custom clone methods
    // if(typeof src.clone == 'function'){
    //     console.log("here2", src);
    //     return src.clone(true);
    // }

    //Special cases:
    //Date
    if(src instanceof Date){
        // console.log("here3", src);
        return new Date(src);
    }
    //RegExp
    if(src instanceof RegExp){
        // console.log("here4", src);
        return new RegExp(src);
    }
    //DOM Element
    // if(src.nodeType && typeof src.cloneNode == 'function'){
    //     console.log("here5", src);
    //     return src.cloneNode(true);
    // }
    //Set
    if(src instanceof Set){
        // console.log("here6", src);
        return new Set(src);
    }
    //Array
    if (Array.isArray(src)) {
        // console.log("here7", src);
        //[].slice() by itself would soft clone
        var ret = src.slice();

        var i = ret.length;
        while (i--) {
            ret[i] = deepClone(ret[i]);
        }
        return ret;
    }

    //If we've reached here, we have a regular object
    // var proto = (Object.getPrototypeOf ? Object.getPrototypeOf(src): src.__proto__);    
    // var dest = object_create(proto);
    // console.log("here8", proto, dest);
    for (var key in src) {
        // console.log("here9", src,key);
        //Note: this does NOT preserve ES5 property attributes like 'writable', 'enumerable', etc.
        dest[key] = deepClone(src[key]);
    }
    return dest;
}

const obj2 = deepClone(obj);
const obj3 = JSON.parse(JSON.stringify(obj))

obj.a.h = "changed"

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj.a.b.c.d());
console.log(obj2.a.b.c.d());



//circular dependency test
// function A() {}
// function B() {}
// var a = new A();
// var b = new B();
const a = {}
// const b = {}
// a.b = b;
// b.a = a;
// var c = structuredClone(a);
// console.log(a,b, c);
