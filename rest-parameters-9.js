// Lecture: Rest Parameters

// ES5
/*function isFullAge5() {
    // an object
    console.log(arguments); // [1990, 1999, 1965, 2016, 2008] obj
    // on object turned into array
    var argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr); // [1990, 1999, 1965, 2016, 2008] array
    
    argsArr.forEach(function(cur) {
        console.log((2019 - cur) >= 18); // 3 true, 2 false
    });
}

isFullAge5(1990, 1999, 1965, 2016, 2008);*/ 


// ES6
function isFullAge6(...years) {
    console.log(years); // an array [1990, 1999, 1965, 2016, 2008]
    years.forEach(cur => console.log((2019 - cur) >= 18)); // 3 true, 2 false
}

isFullAge6(1990, 1999, 1965, 2016, 2008);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Spread operator is used in a function call
// Rest operator is used in a function declaration




// ES5
/*function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(arguments); // [21, 1990, 1999, 1965]
    console.log(argsArr); // [1990, 1999, 1965]
    argsArr.forEach(function(cur) {
        console.log((2019 - cur) >= limit); // true, false, true
    });
}

isFullAge5(21, 1990, 1999, 1965); */


// ES6
function isFullAge6(limit,...years) {
    console.log(years);
    years.forEach(cur => console.log((2019 - cur) >= limit)); // true, false, true
}

isFullAge6(21, 1990, 1999, 1965);