let name = {
    firstname: "Archita",
    lastname: "Sarda",
}

let name2 = {
    firstname: "Abc",
    lastname: "Xyz",
}

const printFullName = function(city,state, country) {
    console.log(this.firstname + " " + this.lastname + " from " + city + " in the state " + state + " of the country " + country);
}

printFullName.call(name,'Indore', 'MP', 'India');
let printName = printFullName.bind(name, 'Indore', 'MP');
printName('India');

Function.prototype.myBind = function(obj, ...args) {
    obj.fn = this;
    return (...args2) => {
        obj.fn(...args, ...args2);
    }
    // let a = args;
    // return function(...args2) {
    //     obj.fn(...a, ...args2)
    // }
}

let printName2 = printFullName.myBind(name, 'Indore', 'MP');
printName2('India');
