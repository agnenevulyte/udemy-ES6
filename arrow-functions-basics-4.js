// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
// callback function in a map
var ages5 = years.map(function(el){
    return 2016 - el;
});
console.log(ages5);



// ES6
let ages6 = years.map(el => 2016 - el);
console.log('ages6: ' + ages6);

// two arguments (el, index)
ages6 = years.map((el, index) => `Age elmenet ${index +1} : ${2018 - el}.`);
console.log('new ages6:' + ages6);


// a few lines of code require {}
ages6 = years.map((el, index) => {
     const now = new Date().getFullYear();
     const age = now -el;
     return `Age elmenet ${index +1} : ${age}.`;
});

console.log("ages6 in a few lines: "+ ages6);