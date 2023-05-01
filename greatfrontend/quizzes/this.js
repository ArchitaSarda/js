// "use strict";

//this
console.log(this);

//this
//If a function is called as a method, such as obj.method() — this is the object that the function is a property of.
const obj = {
    firstname: "archita",
    fn: function printName() {
        console.log(this.firstname);
    }
}
obj.fn();

//If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.
const a = obj.fn;
a();

//this
//If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.
function printName() {
    console.log(this.firstname);
}
const obj2 = {
    firstname: "abc"
}
printName.call(obj2)

//this
//If the new keyword is used when calling the function, this inside the function is a brand new object.
function Animal(name) {
    console.log(arguments);
    this.name = name;
    console.log(this.name);
}
const Dog = new Animal("luffy");

// this
// arrow functions - it ignores all the rules above and receives the this value of its surrounding scope at the time it is created.

const arrow = () => {
    console.log(this);
}
arrow();

const obj3 = {
    firstname: "arch",
    fn: function() {
        const arrow =  () => {
            console.log(this.firstname);
        }
        arrow();
    }
}
obj.fn();
