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

// falsy values: undefined, null, 0, '', NaN
/*
let height;
height = 0;

(height) ? console.log ('Variable is defined') : console.log ('Variblre is undefined');
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

//Coding Challenge 3 Tips Calculator
/*
function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
    } else {
    percentage = 0.1;
    }
    return percentage * bill;
}
let bills = [124, 48, 268];
let tips = [Math.round(tipCalculator(bills[0])),
            Math.round(tipCalculator(bills[1])),
            Math.round(tipCalculator(bills[2]))];
let finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, finalValues);

 */

//**************************
//Objects and Properties

/*
let jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1969;
jane.job = 'driver';
console.log(jane);
console.log('');

let john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : [jane, 'Mark', 'Bob', 'Emily'],
    job : 'teacher',
    isMarried : false
};

console.log(john.firstName);
console.log('');

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

 */
//*************************
// Objects and methods
/*
let john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane', 'Mark', 'Bob', 'Emily'],
    job : 'teacher',
    isMarried : false,
    calcAge : function(birthYear){
        this.age = 2019 - this.birthYear;
    }
};
console.log(john.calcAge(1990));

console.log(john);

 */
//*************************
// Coding Challenge 4
/*
let john = {
    fullName : 'John Smith',
    height : 1.82,
    weight : 129,
    calcBMI : function(){
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;

    }
};

let mark = {
    fullName : 'Mark Doe',
    height : 1.91,
    weight : 96,
    calcBMI : function(){
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They havee the same BMI');
}

 */
// ****************************
// Loops and Iteration
/*
console.log('________FOR LOOP');
for(let i = 0; i < 10; i++){
    console.log(i);
}
let john = ['John', 'Smith', 1970, 'carpenter', false];
for (let i = 0; i < john.length; i++ ){
    console.log(john[i]);
}

//----
console.log('_______WHILE LOOP');
let i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}

// continue and brake statements
console.log('______CONTINUE');

for (let i = 0; i < john.length; i++ ){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log('______BREAK')
for (let i = 0; i < john.length; i++ ){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
console.log('_____LOOP BACKWARDS')
for(let i = john.length - 1; i >= 0; i--){
    console.log(i):
}

 */
//*****************************+  !!!!!! Section 1 Final Task !!!!!!! ********************************
// Coding challenge 5

let john = {
    fullName : 'John Smith',
    bills : [124, 48, 268, 180, 42],
    calcTips : function(){
        this.tips = [],
        this.finalValues = [];

        for(let i = 0; i < this.bills.length; i++){
            //Determine the percentage based on tipping rules
            let percentage;
            if (this.bills[i] < 50) percentage = .2;
            else if (this.bills[i] >= 50 && this.bills[i] < 200) percentage = .15;
            else percentage = .1;

            //Add result to the corresponding arrays
            this.tips[i] = Math.round(this.bills[i] * percentage);
            this.finalValues[i] = Math.round(this.bills[i] + this.bills[i] * percentage);
        }
    }
}

let mark = {
    fullName : 'Mark Doe',
    bills : [77, 375, 110, 45],
    calcTips : function(){
        this.tips = [],
            this.finalValues = [];

        for(let i = 0; i < this.bills.length; i++){
            //Determine the percentage based on tipping rules
            let percentage;
            if (this.bills[i] < 100) percentage = .2;
            else if (this.bills[i] >= 100 && this.bills[i] < 300) percentage = .1;
            else percentage = .25;

            //Add result to the corresponding arrays
            this.tips[i] = Math.round(this.bills[i] * percentage);
            this.finalValues[i] = Math.round(this.bills[i] + this.bills[i] * percentage);
        }
    }
}
function calcAverage(tips){
    let sum = 0;
    for(let i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john);
console.log(mark);

if(john.average > mark.average) console.log(john.fullName + "\'s family pays higher tips, with average of $" + john.average);
else if(john.average < mark.average) console.log(mark.fullName + "\'s family pays higher tips, with average of $" + mark.average);
else console.log(john.fullName + "\'s family and " + mark.fullName + "\'s family pays the same tips, with average of $" + john.average + ' and ' + mark.average);




































































