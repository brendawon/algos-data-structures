# Class - a blueprint for creating objects with pre-defined properties and methods

Not REALLY object-oriented inheritance, but is syntactic sugar over JS existing prototype based objects

## Syntax - creation of a class must use a constructor

class Student {
constructor(firstName, lastName){
this.firstName = firstName;
this.lastName = lastName;
this.latenesses = 0;
}
fullName(){
return `Your full name is ${this.firstName} ${this.lastName}.`
}
markLate(){
this.latenesses += 1;
return `${this.firstName} ${this.lastName} has been late ${this.latenesses} times.`
}
static enrollStudent(student){
//can only be called from the class method, not as an instance method
}
}

## Substantiate Instance from the class

let firstStudent = new Student(Brenda, Wong);

## Instance Methods - provide functionality for the instances of a class

firstStudent.fullName();
firstStudent.markLate();

## Static Methods - can be called without instantiating the class and CANNOT be called through a class instance

Student.enrollStudents(firstStudent);
