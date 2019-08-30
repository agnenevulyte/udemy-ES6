// Lecture: Classes

// ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    return age;
}

var john5 = new Person5('John', 1990, 'teacher');
// accessing the prototype
console.log(john5.calculateAge());



// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }
    // static method, can't be reached outside of the class - more secure
    static _greeting() {
        console.log('hey there!');
    }
}

const john6 = new Person6('John', 1990, 'designer'); 
// getting the method
Person6._greeting();
// accessing the method
console.log(john6.calculateAge());