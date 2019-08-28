// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1980;

// ES5 function
function calcAgeES5(year) {
    return 2019-year;
}

// ES6 function
var calcAgeES6 = (year) => 2019-year;

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAgeES5(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAgeES6(yearOfBirth)} years old.`);


// ES6 - if string starts, ends, includes something
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // true, because John Smith
console.log(n.startsWith('j')); // false, because not a capital
console.log(n.endsWith('th')); // true because Smith ends with th
console.log(n.includes(' ')); // true, because string includes a space.
console.log(n.includes('o')); // true, because string includes o.
console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)); //John John John John John