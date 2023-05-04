class ClassWithStaticMethod {
  static staticProperty = 'someValue';
  anotherProperty = 'someOtherValue';
  static staticMethod() {
    return 'static method has been called.';
  }
  static {
    console.log('Class static initialization block called');
  }
}

console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.anotherProperty); //undefined
console.log(ClassWithStaticMethod.staticMethod());
const c1 = new ClassWithStaticMethod();
console.log(c1.anotherProperty);
console.log(c1.staticProperty); //undefined




class Student {
    static count=0;
    constructor() {
        Student.count+=1;
    }
    static showCount() {
        return Student.count;
    }
}
const s1 = new Student()
const s2 = new Student()
const s3 = new Student()
const s4 = new Student()
const s5 = new Student()
console.log(Student.showCount());
