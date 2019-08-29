// Lecture: Default Parameters

// we use it when we want one or two parameters to be preset


// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'English' : nationality = nationality;
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }



// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'English') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
console.log(john); // {firstName: "John", yearOfBirth: 1990, lasName: "Smith", nationality: "English"}
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish'); // {firstName: "Emily", yearOfBirth: 1983, lasName: "Diaz", nationality: "Spanisg"}
console.log(emily);