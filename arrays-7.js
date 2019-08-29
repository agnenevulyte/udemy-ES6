// Lecture: Arrays

// ------------------------------------------------------------
const boxes =  document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => cur.style.backgroundColor = 'dodgerblue');



// ------------------------------------------------------------
// if we want to change elements not the whole array

// ES5
/*for(var i=0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        // lets to continue without touching this
        continue;
        // break would change only the first elements
        // break;
    } else {
        boxesArr5[i].textContent = 'I changed to blue';
    }
}*/

// ES6
for(const current of boxesArr6) {
    if (current.className.includes('blue')) {
        continue;
    } else {
        current.textContent = 'I changed to blue';
    };
}


// ------------------------------------------------------------

var ages = [12,17,8,21,14,11];

// ES5
/*
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full); // [false, dalse, false, true, false, false]
console.log(full.indexOf(true)); // 3
console.log(ages[full.indexOf(true)]); // 21
*/

// ES6
console.log(ages.findIndex(cur => cur >= 18)); // 3
console.log(ages.find(cur => cur >= 18)); // 21
