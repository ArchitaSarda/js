let name = {
    firstname: "Archita",
    lastname: "Sarda",
}


const printFullName = function(city,state, country) {
    console.log(this.firstname + " " + this.lastname + " from " + city + " in the state " + state + " of the country " + country);
}

printFullName.call(name,'Indore', 'MP', 'India');


Function.prototype.myCall = function(obj, ...args) {
    obj.fn = this;
    obj.fn(...args);
}

printFullName.myCall(name,'Indore', 'MP', 'India');
