const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 5,
        f: 6
    }
}

const obj2 = {
    ...obj
}

const obj3 = Object.assign(obj);
const obj4 = Object.assign({}, obj);
const obj5 = JSON.parse(JSON.stringify(obj));
const obj6 = obj;

obj.a = "a"
obj.d.e = "e"

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);