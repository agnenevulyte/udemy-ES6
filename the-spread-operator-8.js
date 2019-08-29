// Lecture: The spread operator

// expand elements of an array in arguments and function calls

function addFourAges(a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log('simple adding: ', sum1); // 81

var ages = [18,30,12,21];

// ES5
var sum2 = addFourAges.apply(null, ages);
console.log('ES5: ',sum2); // 81

// ES6 - using spread operator ...ages
const sum3 = addFourAges(...ages);
console.log('ES6: ', sum3); // 81

// -----------------------------------------------------

const familySmith = ['John', 'Jane', 'Mark'];
const famillyMiller = ['Mary', 'Bob', 'Ann'];
// binds both families together
const bigFamily = [...familySmith, ...famillyMiller];
console.log(bigFamily); // ['John', 'Jane', 'Mark', 'Mary', 'Bob', 'Ann']
const bigFamilywithAChild = [...familySmith, 'Lily', ...famillyMiller];
console.log(bigFamilywithAChild); // ['John', 'Jane', 'Mark', 'Lily', 'Mary', 'Bob', 'Ann']


// -----------------------------------------------------
// use in a node list
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');