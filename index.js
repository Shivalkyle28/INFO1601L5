// Task 1 - Arrays and Iteration
// Create an array and print all elements


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array with 10 elements

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // print each element
}


// Task 2 - Variables, Assignment & Operators
// Calculate the area of a circle


let radius = 7;      // radius of the circle
const pi = 3.14;     // constant value of pi

let area = radius * radius * pi; // area formula: πr²

console.log(area);   // print the area


// Task 3 - Primitive Data Types & Strings
// typeof and template literals


let name = "bob";
let age = 24;

console.log(typeof(name)); // string
console.log(typeof(age));  // number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);


// Task 4.1 - Type Coercion
// Demonstrating loose comparison (==)


console.log('1' == 1);        // true
console.log(1 == true);       // true
console.log("false" == false);// false
console.log("false" == true); // false

if ("false")
  console.log("Hello false!"); // non-empty strings are truthy


// Task 4.2 - Strict Comparison
// Using === to avoid type coercion


console.log('1' === 1);      // false
console.log(1 === true);     // false
console.log("true" === true);// false


// Task 4.3 - FizzBuzz
// Print numbers 1–50


for (let i = 1; i <= 50; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz"); // divisible by both
  } 
  
  else if (i % 3 === 0) {
    console.log("fizz"); // divisible by 3
  } 
  
  else if (i % 5 === 0) {
    console.log("buzz"); // divisible by 5
  } 
  
  else {
    console.log(i); // otherwise print number
  }

}

// 6. Functions
// Basic function example


function hello() {
  console.log("hello");
}

hello(); // call the function


// Functions with Parameters and Return Values


function addExample(a, b) {
  return a + b; // if a and b are missing -> undefined + undefined = NaN
}

let ans = addExample(5, 1);
console.log(ans); // 6

let ans2 = addExample();
console.log(ans2); // NaN


function addDefault(a, b = 10) {
  return a + b;
}

console.log(addDefault(5, 11)); // 16
console.log(addDefault(2));     // 12


// First-Class Functions
// Functions can be treated like variables


function greet(name) {
  return `Hello ${name}`;
}

let message = greet("Bob");
console.log(message);


// Task 5 - Callback Functions
// Execute and observe the output


function happyPrint(string) {
  console.log("😀: " + string);
}

function sadPrint(string) {
  console.log("😢: " + string);
}

// High-order function: takes a callback function as a parameter
function add(a, b, callback) {
  let ans = a + b;
  callback(ans); // call the callback and pass the answer
}

// Call add and pass callback functions
add(5, 10, happyPrint);
add(11, 12, sadPrint);

// 7. setInterval() & setTimeout()
// Task 6 - Timing Functions

// Function that prints the current time
function printDate() {
  console.log(new Date().toLocaleTimeString());
}


// setInterval()
// Runs the function repeatedly every 1000 milliseconds (1 second)

setInterval(printDate, 1000);

// setTimeout()
// Runs the function only once after the delay


setTimeout(function() {
  console.log("This message appears after 5 seconds");
}, 5000);


// Arrays - Basic Examples

let arr = []; // empty array

let arr2 = [1, 2, 3, 4, 5, 6, 7]; // array with elements

let arr3 = [1, 12.9, "Hi", '🎈']; // heterogeneous array

console.log(arr2[0]); // 1
console.log(arr3[3]); // 🎈


// Iterating Through Arrays

let numbers = [1,2,3,4,5,6,7,8,9,10];

// Using index loop
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// Using for-of loop
for(let item of numbers){
  console.log(item);
}

// Task 5.1 - Array Methods

let arr4 = [-5, 16, 33, 42, 103, 344];

console.log(arr4.includes(-5)); // true

// add item to end
arr4.push(11);
console.log(arr4);

// remove last item
let lastItem = arr4.pop();
console.log(lastItem, arr4);

// add item to front
arr4.unshift(22);
console.log(arr4);

// remove first item
let firstItem = arr4.shift();
console.log(firstItem, arr4);

// reverse array
let reversed = arr4.reverse();
console.log(reversed);

// join array with separator
console.log(arr4.join('-'));


// Task 5.2 - Callback-Based Array Methods

let arr5 = [12, 33, 4, 5, -4, 8, 19, 25];


// map() example
function double(num){
  return num * 2;
}

let doubledArr = arr5.map(double);
console.log(doubledArr);


// filter() example
function isOdd(num){
  return num % 2 !== 0;
}

let odds = arr5.filter(isOdd);
console.log(odds);


// some() example
function has5Factor(ele){
  return ele % 5 === 0;
}

let hasFiveFactor = arr5.some(has5Factor);
console.log(hasFiveFactor);


// sort() example
function intCompare(a, b){
  return a - b;
}

// ascending order sort
let ascending = arr5.sort(intCompare);
console.log(ascending);

// ======================================
// Object Literal Example
// Objects store data as key : value pairs
// ======================================

let person = {
  name: "John",
  age: 12
};

// Access values in two ways

console.log(person["age"]); // using bracket notation
console.log(person.name);   // using dot notation


// Add new properties to object
person["weight"] = 70;

// Add an array as a value
person.marks = [67, 34, 55, 89];

// Access array element inside object
let firstMark = person.marks[0];


// Mixing Arrays and Objects
let people = [
  person,
  {
    name: "Jane",
    age: 23,
    marks: [51, 78, 99, 76]
  }
];

// Clone object
let johnClone = {};

Object.assign(johnClone, person);

console.log(johnClone);


// Access nested object + array value
console.log(people[0].marks[0]); // prints 67

// Task 6 - Object Collection and BMI Calculation

// Constructor function to create a person object
function createPerson(name, height, weight) {
  return {
    name: name,
    height: height,
    weight: weight
  };
}


// Function to calculate BMI
function calcBMI(weight, height) {
  return weight / (height * height);
}


// Function to calculate average BMI of people
function avgBMI(people) {

  let sum = 0;

  for (let person of people) {
    // calculate BMI of each person
    sum += calcBMI(person.weight, person.height);
  }

  // return average BMI
  return sum / people.length;
}


// Create collection of people
let peopleCollection = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

// Print average BMI
console.log(avgBMI(peopleCollection));
