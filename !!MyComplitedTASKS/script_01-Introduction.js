//**************
// if- else

/*let firstName = 'John';
let civilStarus = 'single';

if(civilStarus === 'married'){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

 */

// ****************
//Boolean ligic

/*
let firstName  = 'John';
let age = 20;

if(age < 13){
    console.log(firstName + ' is a boy');
} else if (age >=13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a men');
}
*/

//***************
// The Ternary Operator and Switch Statements
/*
let firstName = 'John';
let age = 16;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//--------

let job = 'teacher';
switch (job){
    case 'teacher' :
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver' :
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer' :
        console.log(firstName + ' designs beautiful websites');

    default : console.log(firstName + ' do something');
}

switch(true){
    case age < 13 :
        console.log(firstName + ' is a boy');
        break;
    case age >=13 && age < 20 :
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30 :
        console.log(firstName + ' is a young man');
        break;
    default :
        console.log(firstName + ' is a men');
}
*/

//*****************
// Truthy and Falsy values and equality operators

// falsy values: undefine, null, 0, '', NaN
/*
let height;
height = 0;

(height) ? console.log ('Variblre is defined') : console.log ('Variblre is undefined');
*/

// Coding Chalenge #2

//***************************************************************************************
//***************************************************************************************

// FUNCTIONS
/*
function calculateAge(birthYear){
    return 2019 - birthYear;
}

console.log(calculateAge(1990));

function yearUntilRetirement(year, firstName){
    let age = calculateAge(year);
    let retirement =  65 - age;

    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
}

yearUntilRetirement(1990, 'Bob');
yearUntilRetirement(1970, 'Mike');
yearUntilRetirement(1948, 'Tim');
*/

//***********************************
// Function Statements and Expressions
/*
let whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids hoe to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'QA':
            return firstName + ' tests web applications';
        default:
            return firstName + ' does nothing';
    }
}

console.log(whatDoYouDo('teacher', 'Bob'));
console.log(whatDoYouDo('retiter', 'Tim'));
*/

//***************************
// Arrays
/*
let names = ['John', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1948);

console.log(names, names.length);

names[1] = 'Ben';
names[5] = 'Mary';

console.log(names, names.length);

//Different data type

let john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf('Smith'));

let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/
