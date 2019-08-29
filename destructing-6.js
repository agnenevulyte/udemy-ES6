// Lecture: Destructuring

// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];


// ES6
const [firstName, year] = ['John', '26'];
console.log(firstName);
console.log(year);



const obj = {
    fName: 'Laura',
    lName: 'Smith'
};

const {fName, lName} = obj;
console.log(fName);
console.log(lName);




function calcAgeRetirement(year) {
    const personsAge = new Date().getFullYear() - year;
    return [personsAge, 65 - personsAge];
}

const [personsAge, retirement] = calcAgeRetirement(1990);
console.log(personsAge);
console.log(retirement);