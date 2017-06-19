// # Control Flow Exercise

// ## Use control flow to create a calculator

// Using everything you've learned to this point create a simple calculator.

// ## Timings

// This lab should take approximately 90 minutes.

// ## Hints and tips

// The following might help:

// * if
// * else
// * prompt
// * console.log
// * prompt returns a string even if you type in a number. You might need to change it to a number (parse)

// #### Feature 1

// User should be able to enter two values to add together. The sum of the two values should be shown to the user. This should work for all numbers including decimals.

// #### Feature 2

// User should be able to enter two values then choose between adding, dividing, subtracting, or multiplying. The answer should be shown to the user.

var value1 = parseFloat(prompt("Welcome to my calculator. Enter your first value:"));
console.log('You have entered ' + value1);

var value2 = parseFloat(prompt("Enter your second value:"));
console.log('You have entered ' + value2);

var choice = prompt('Enter m to multiply, d to divide, a to add and s to subtract');

 if (choice === 'm') {
 	var answer = value1 * value2;
 	//console.log('The answer is ' + answer);
 	alert('You have chosen to multiply ' + value1 + " and " + value2 + '. The answer is ' + answer);

 } else if (choice === 'd'){
 	var answer = value1 / value2;
 	//console.log('The answer is ' + answer);
 	alert('You have chosen to divide ' + value1 + " and " + value2 + '. The answer is ' + answer);

 } else if (choice=== 'a') {
 	var answer = value1 + value2;
 	//console.log('The answer is ' + answer);
 	alert('You have chosen to add ' + value1 + " and " + value2 + '. The answer is ' + answer);

 } else if (choice === 's'){
 	var answer = value1 - value2;
 	//console.log('The answer is ' + answer);
 	alert('You have chosen to subtract ' + value1 + " and " + value2 + '. The answer is ' + answer);
// #### Feature 3

// Calculator should choose addition if the user leaves it blank.
 } else if (choice === ''){
 	var answer = value1 + value2;
 	//console.log('The answer is ' + answer);
 	alert('You have chosen to add ' + value1 + " and " + value2 + '. The answer is ' + answer);

 } else {
 	alert('You have not chosen a function');
 }


// #### Bonus

// Research the while loop. 

// User should be able to make more than one calculation or choose to quit the calculator