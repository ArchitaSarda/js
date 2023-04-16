let name = {
    firstname: "Archita",
    lastname: "Sarda",
}


const printFullName = function(city,state, country) {
    console.log(this.firstname + " " + this.lastname + " from " + city + " in the state " + state + " of the country " + country);
}

printFullName.apply(name,['Indore', 'MP', 'India']);


Function.prototype.myApply = function(obj, args) {
    obj.fn = this;
    obj.fn(...args);
}


printFullName.myApply(name,['Indore', 'MP', 'India']);
