//complete this code
class Person {
	constructor(n,a){
		this.name= n ;
		this.age = a;
	}
	get name(){
		return `${this.name}`
	}
	set setAge(){
		this.age = age
		return `${age}`
	}
}

class Student extends Person {
	constructor(name){
		super(name);
		study(){
			console.log(this.name + "is studying")
		}
	}
}

class Teacher extends Person {
	constructor(name){
		super(name);
		teach(){
			console.log(this.name + "is teaching")
		}
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
