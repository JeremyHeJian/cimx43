//Our best friend
console.log();

console.log('Is this thing on?');
console.log(1 + 2);
console.log(2.00001);
//Data types in Javascript

//Math with numbers

console.log(2 / 0);
console.log(Infinity / Infinity);

//If you see something like 2++, it means increase by 1. If you see 2-- it means decrease by 1.

console.log(13 % 5);

//Strings
console.log('this is string');
console.log('this is a string'.length);

//Concatenation: adding string together
console.log('This' + ' and' + ' that');
console.log('2' + 2);

console.log(true);
console.log(false);
console.log('--------------------');
console.log(2 + 2 == 5);
console.log(2 + 2 == 4);

//VARIABLES
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');
console.log('--------------------');

// Define and assign at the same time with nothing before the variable name;
foo = 2;
console.log(foo);

var foo = 20;
console.log(foo);

// Define and assign at the same time with let keyword;
let x;
x = 20;

let thereBe = 'light';

// Define and assign with const keyword
const gravity = 9.8;
console.log(gravity);

//VARIABLE NAME RULES
//1. start with a letter, underscore, or dollar sign -- no numbers
//2. no spaces
//3. Can't have certain special characters: ! . , / \ + - * =

const moo = 4;
//This is how you define a function
function test() {
  const moo = 4;
  console.log(moo);
}
test();

let an_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let another_array = [0, '1', 'song', gravity];

console.log(an_array);
console.log(another_array);
// console.log(an_array.length);
console.log(another_array[3]);

//Updating an array
another_array[3] = gravity + 2;
console.log(another_array[3]);
console.log(another_array);

let a_third_array = [];
let a_4th_array = new Array();
