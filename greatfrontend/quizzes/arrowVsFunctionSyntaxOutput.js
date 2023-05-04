const Person = function (firstName) {
  this.firstName = firstName;
  this.sayName1 = function () {
    console.log(this.firstName);
  };
  this.sayName2 = () => {
    console.log(this.firstName);
  };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); 
john.sayName2(); 

// The regular function can have its 'this' value changed, but the arrow function cannot
john.sayName1.call(dave); 
john.sayName2.call(dave); 

john.sayName1.apply(dave); 
john.sayName2.apply(dave); 

john.sayName1.bind(dave)(); 
john.sayName2.bind(dave)(); 

var sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1(); 

var sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2(); 

// The main advantage of using an arrow function as a method inside a constructor is that the value of this gets set at the time of the function creation and can't change after that.



// The value of this within arrow functions is bound to the context in which the function is created, not to the environment in which the function is called.