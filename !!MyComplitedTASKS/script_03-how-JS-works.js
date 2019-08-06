//##########################################
//        SECTION 3 How JavaScript Works Behind the Scenes
//##########################################

///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);
function calculateAge(year){
    console.log(2019 - year);
}

//retirement(1990);
let retirement = function(year) {
    console.log(65 - (2019 - year));
}

//variables

//console.log(age);
let age = 23;
console.log(age);

function foo(){
    let age = 65;
    console.log(age);
}
foo();
console.log(age)
*/
///////////////////////////////////////
// Lecture: Scoping

// First scoping example
/*

let a = 'Hello!';
first();
function first() {
    let b = 'Hi!';
    second();
    function second() {
        let c = 'Hey!';
        console.log(a + b + c);
    }
}

 */

// Example to show the difference between execution stack and scope chain
/*
let a = 'Hello!';
first();
function first() {
    let b = 'Hi!';
    second();
    function second() {
        let c = 'Hey!';
        third()
    }
}
function third() {
    let d = 'John';
    console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this); // this - is global object here (windows etc.)
/*
calculateAge(1985);
function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
 */

let john = {
    name : 'John',
    yearOfBirth : 1990,
    calculateAge : function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
/*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
*/
    }
}
john.calculateAge();

let mike = {
    name : 'Mike',
    yearOfBirth : 1984,

}
mike.calculateAge = john.calculateAge; //borrow john's method to mike!!!!
mike.calculateAge();
