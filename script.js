/* 
1)How do we assign a value to a variable?
- using the assignment operator (=).
2) How do we change the value of a variable?
- as long as it is not a CONST you can reassign the value.
3)How do we assign an existing variable to a new variable?
- 
4)Remind me, what are declare, assign, and define?
- 
5)What is pseudocoding and why should you do it?*/


/*
B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.
Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
*/

let firstVariable = "Hello World";
firstVariable = 9;
let secondVariable = firstVariable;
secondVariable = "Hi World";

console.log(secondVariable); //prints "Hi World"

/* Create a variable called yourNameand set it equal to your name as a string.
Then, write an expression that takes the string "Hello, my name is " and the variable yourName
so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean*/

let myName = "Tasnim Chowdhury";
console.log(`Hello, my name is ${myName}`)

/* C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console*/
 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name'); 
// FOR THE NEXT TWO, USE ONLY && OR || 
console.log(true || false); 
console.log(false || false || false || false || false || true); 

console.log(false == false) 
console.log(e === 'Kevin'); 
console.log(a < b && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

