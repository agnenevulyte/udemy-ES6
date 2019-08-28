// Lecture: let and const

// ES5
var name5 = 'Jame Smith';
var age5 = 23;
name5 =  'Jane Miller';
console.log(name5, age5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller'; // can't do this, because of const
console.log(name6, age6);


// ES5
function driversLicenceES5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(firstName + 'born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }
};

driversLicenceES5(true);


// ES6
var driversLicenceES6 = (passedTest) => {
    let firstName;
    const yearOfBirth = 1991;

    if (passedTest) {
        firstName = 'Laura';
    }

    console.log(firstName + 'born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicenceES6(true);


// ES6
let i = 23; // if it was var i=23;

for(let i=0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

console.log(i); // 23 // if var, this console.log would be 5.
