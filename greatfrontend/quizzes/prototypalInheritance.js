// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.name + ' ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be a new instance of the parent object.
Dog.prototype = Object.create(Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Bolt makes a sound."
bolt.bark(); // "Woof!"


// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function(){
//     console.log(this.name + " in makesound");
// }

// function Dog(name) {
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.bark = function() {
//     console.log(this.name, "make woof sound");
// }

// Dog.prototype.makeSound = function() {
//     console.log(this.name, " hey make sound");
// }

// const luffy = new Dog("Luffy");
// console.log(luffy.name);
// luffy.bark();
// luffy.makeSound();