// Lecture: Maps

// key value data structure in ES6. 
// we can use numbers, booleans, strings, functions as a key. This wasn't available with ES5.


const question = new Map();
// sets keys and values for the question
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer!');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question')); // What is the official name of the latest major JavaScript version?
console.log(question.size); // 8 // size used instead of length


if (question.has(4)) {
    // deletes the element with the key 4
    question.delete(4);
}

// clears all the elements
// question.clear(); // Map(0){}

question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));
/*
This is question, and it's set to What is the official name of the latest major JavaScript version?
maps-11.js:31 This is 1, and it's set to ES5
maps-11.js:31 This is 2, and it's set to ES6
maps-11.js:31 This is 3, and it's set to ES2015
maps-11.js:31 This is 4, and it's set to ES7
maps-11.js:31 This is correct, and it's set to 3
maps-11.js:31 This is true, and it's set to Correct Answer!
maps-11.js:31 This is false, and it's set to Wrong, please try again!
*/

// destructuring
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    } 
}

// converting string into a number
const ans = parseInt(prompt('Write the correct answer'));
// comparing if the answer is correct
console.log(question.get(ans === question.get('correct')));