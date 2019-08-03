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

function calculateAge(birthYear){
    return 2019 - birthYear;
}

console.log(calculateAge(1990));

function yearUntilRetirement(year, firstName){
    let age = calculateAge(year);
    let retirement =  65 - year
}

