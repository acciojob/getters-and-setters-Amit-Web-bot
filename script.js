//complete this code
class Person {
	constructor(name,age){
		name = this.name,
		age = this.age
	}
}

class Student extends Person {
	super(name,age)
	study(){
		console.log(`${name} is studying`)
	}
}

class Teacher extends Person {
	super(name,age)
	teach(){
		console.log(`${name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
