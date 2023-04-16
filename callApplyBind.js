// Ex 1

// let name = {
//     firstname: "Archita",
//     lastname: "Sarda",
//     printFullName: function(arg) {
//     console.log(this.firstname + " " + this.lastname + " from " + arg1 + " in the state " + arg2);
//     }
// }

// let name2 = {
//     firstname: "Abc",
//     lastname: "Xyz",
// }

// name.printFullName('Indore', 'MP');
// name.printFullName.call(name2, 'Bangalore', 'Karnataka');

// Ex 2

// let name = {
//     firstname: "Archita",
//     lastname: "Sarda",
// }

// let name2 = {
//     firstname: "Abc",
//     lastname: "Xyz",
// }

// const printFullName = function(city,state) {
//     console.log(this.firstname + " " + this.lastname + " from " + city + " in the state " + state);
// }


// printFullName.call(name, 'Indore', 'MP')
// printFullName.call(name2, 'Bangalore', 'Karnataka')


// printFullName.apply(name, ['Indore', 'MP'])
// printFullName.apply(name2, ['Bangalore', 'Karnataka'])


// Ex 3

let name = {
    firstname: "Archita",
    lastname: "Sarda",
}

let name2 = {
    firstname: "Abc",
    lastname: "Xyz",
}

const printFullName = function(city,state) {
    console.log(this.firstname + " " + this.lastname + " from " + city + " in the state " + state);
}

let printName = printFullName.bind(name, 'Indore', 'MP');
console.log(printName);
printName();
