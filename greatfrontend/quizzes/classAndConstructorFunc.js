const Person1 = function(name) {
    this.name = name;
}

class Person2 {
    constructor(name) {
        this.name = name
    }
}

const p1 = new Person1("a");
const p2 = new Person2("b");
console.log(p1);
console.log(p2);


const Student1 = function(name, studentId) {
    Person1.call(this,name)
    this.studentId = studentId;
}

class Student2 extends Person2{
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId
    }
}


const s1 = new Student1("c",123);
const s2 = new Student2("d",234);
console.log(s1);
console.log(s2);