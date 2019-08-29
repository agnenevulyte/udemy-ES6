// Lecture: Arrow functions 2 - this keyword


// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this; // needed this inner var to be defined
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color + '.';
//             alert(str);
//         });
//     }
// };

// box5.clickMe();


// ES6 good usage of THIS!
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}.`;
            alert(str); // all message
        });
    }
};

box6.clickMe();

// ES6
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color + '.';
//             alert(str); // undefined
//         });
//     }
// };

// box66.clickMe();




function Person(name) {
    this.name = name;
}

// ES5 working
Person.prototype.myFriends5 = 
function(friends) {
    var arr = friends.map(function(el)
    {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = 
function(friends) {
    var arr = friends.map((el) =>`${this.name} is friends with ${el}`);
    console.log(arr);
};


new Person('Alice').myFriends6(friends);