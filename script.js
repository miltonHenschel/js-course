// ==========================================
// 1. COMMENTS
// ==========================================

// This is a single-line comment

/*
This is a multi-line comment
It can span multiple lines
*/

// ==========================================
// 2. VARIABLES & DATA TYPES
// ==========================================

// Declaring variables (var - old way, avoid using)
var oldVariable = "I'm old";

// let - modern way for variables that can change
let myName = "John";
myName = "Jane"; // Can be reassigned

// const - for variables that should NOT change
const birthYear = 1990;
// birthYear = 2000; // ERROR! Cannot reassign const

// Data Types
let stringExample = "Hello World";
let numberExample = 42;
let booleanExample = true; // or false
let undefinedExample; // undefined
let nullExample = null; // intentional absence of value

// Case sensitivity
let myVariable = "camelCase";
let MyVariable = "PascalCase"; // Different variable!

// ==========================================
// 3. BASIC MATH OPERATIONS
// ==========================================

let sum = 10 + 5;        // 15
let difference = 10 - 5; // 5
let product = 10 * 5;    // 50
let quotient = 10 / 5;   // 2
let remainder = 10 % 3;  // 1 (modulo)

// Increment and Decrement
let counter = 5;
counter++; // counter is now 6
counter--; // counter is now 5

// Decimal numbers (floats)
let decimal = 5.7;
let anotherDecimal = 0.1;

// Augmented assignment operators
let x = 10;
x += 5;  // x = x + 5 (15)
x -= 3;  // x = x - 3 (12)
x *= 2;  // x = x * 2 (24)
x /= 4;  // x = x / 4 (6)

// ==========================================
// 4. STRINGS
// ==========================================

// String declaration
let firstName = "John";
let lastName = 'Doe';

// Escaping quotes
let withDoubleQuotes = "He said \"Hello\"";
let withSingleQuotes = 'She said \'Hi\'';
let mixedQuotes = "This 'works' too";

// Escape sequences
let escapeString = "Line 1\nLine 2\tTabbed\\Backslash";

// String concatenation
let fullName = firstName + " " + lastName; // "John Doe"

// String concatenation with +=
let greeting = "Hello";
greeting += " World"; // "Hello World"

// Constructing strings with variables
let age = 25;
let message = "My name is " + firstName + " and I am " + age + " years old.";

// String length
let text = "Hello";
console.log(text.length); // 5

// Bracket notation (accessing characters)
console.log(text[0]); // "H"
console.log(text[text.length - 1]); // "o" (last character)

// String immutability (strings cannot be changed directly)
let word = "Jello";
// word[0] = "H"; // WON'T WORK!
word = "Hello"; // Must reassign entire string

// ==========================================
// 5. ARRAYS
// ==========================================

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let mixedArray = ["string", 42, true, null];

// Nested arrays (multi-dimensional)
let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing array elements
console.log(fruits[0]); // "apple"
console.log(nestedArray[1][2]); // 6

// Modifying array elements
fruits[1] = "grape"; // ["apple", "grape", "orange"]

// Array methods
fruits.push("mango");     // Adds to end: ["apple", "grape", "orange", "mango"]
let lastFruit = fruits.pop(); // Removes from end and returns it: "mango"
let firstFruit = fruits.shift(); // Removes from beginning: "apple"
fruits.unshift("strawberry"); // Adds to beginning

// Shopping list example
let shoppingList = [
    ["cereal", 3],
    ["milk", 2],
    ["bread", 1]
];

// ==========================================
// 6. FUNCTIONS
// ==========================================

// Function declaration
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Call the function

// Function with parameters (arguments)
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // "Hello, Alice!"

// Function with return value
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(5, 3); // 8

// Function returning undefined
function doNothing() {
    // No return statement
}
let undefinedValue = doNothing(); // undefined

// Assignment with returned value
let sumResult = addNumbers(10, 20); // 30

// Stand in line (queue example)
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // [2, 3, 4, 5, 6]

// ==========================================
// 7. SCOPE
// ==========================================

// Global scope
let globalVariable = "I'm global";

function scopeTest() {
    // Local scope
    let localVariable = "I'm local";
    console.log(globalVariable); // Can access global
    // console.log(localVariable); // Only works inside function
}
scopeTest();
// console.log(localVariable); // ERROR! Not defined outside

// Global vs Local scope (local takes precedence)
let name = "Global";
function showName() {
    let name = "Local";
    console.log(name); // "Local" (local overrides global)
}
showName();
console.log(name); // "Global"

// ==========================================
// 8. CONDITIONALS (IF/ELSE)
// ==========================================

// Boolean values
let isTrue = true;
let isFalse = false;

// If statement
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}

// Equality operators
console.log(5 == "5");   // true (loose equality - type coercion)
console.log(5 === "5");  // false (strict equality - no type coercion)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Logical operators
let age2 = 18;
let hasLicense = true;
if (age2 >= 18 && hasLicense) {
    console.log("You can drive");
}
if (age2 < 18 || hasLicense) {
    console.log("Either under 18 OR has license");
}
if (!hasLicense) {
    console.log("No license!");
}

// Golf code example
function golfScore(par, strokes) {
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}
console.log(golfScore(4, 3)); // "Birdie"

// ==========================================
// 9. SWITCH STATEMENTS
// ==========================================

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day";
    }
    return dayName;
}
console.log(getDayName(3)); // "Wednesday"

// Returning boolean from functions
function isGreaterThan(a, b) {
    return a > b; // Returns true or false directly
}
console.log(isGreaterThan(5, 3)); // true

// Return early pattern
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined; // Return early if condition met
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(4, 9)); // 25
console.log(abTest(-4, 9)); // undefined

// ==========================================
// 10. OBJECTS
// ==========================================

// Creating objects
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing properties (dot notation)
console.log(person.name); // "John"

// Bracket notation
console.log(person["age"]); // 30

// Using variables with bracket notation
let propertyName = "city";
console.log(person[propertyName]); // "New York"

// Updating properties
person.age = 31;
person["city"] = "Los Angeles";

// Adding new properties
person.job = "Developer";
person["hobby"] = "Coding";

// Deleting properties
delete person.hobby;

// Objects for lookups (like switch but cleaner)
function phoneticLookup(val) {
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver"
    };
    return lookup[val] || "Not found";
}
console.log(phoneticLookup("alpha")); // "Adams"

// Testing objects for properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found";
}
console.log(checkObj(person, "name")); // "John"

// Complex nested objects
let complexObj = {
    name: "My Company",
    address: {
        street: "123 Main St",
        city: "Boston",
        zip: "02101"
    },
    employees: [
        { name: "Alice", role: "Engineer" },
        { name: "Bob", role: "Designer" }
    ]
};
console.log(complexObj.address.city); // "Boston"
console.log(complexObj.employees[0].name); // "Alice"

// Record collection example
let recordCollection = {
    "2548": {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    "2468": {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    }
};

function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    } else if (prop === "tracks") {
        if (!records[id].hasOwnProperty("tracks")) {
            records[id][prop] = [];
        }
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}
updateRecords(recordCollection, "2548", "artist", "Jon Bon Jovi");

// ==========================================
// 11. LOOPS
// ==========================================

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// For loop
for (let j = 0; j < 5; j++) {
    console.log(j);
}

// For loop - odd numbers
for (let k = 1; k < 10; k += 2) {
    console.log(k); // 1, 3, 5, 7, 9
}

// For loop - counting backwards
for (let l = 10; l > 0; l--) {
    console.log(l); // 10, 9, 8, ... 1
}

// Iterating through an array with for loop
let numbers = [10, 20, 30, 40];
let total = 0;
for (let m = 0; m < numbers.length; m++) {
    total += numbers[m];
}
console.log(total); // 100

// Nested for loops
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // 5040

// Do...while loop (runs at least once)
let n = 0;
do {
    console.log(n);
    n++;
} while (n < 3);

// ==========================================
// 12. PROFILE LOOKUP
// ==========================================

let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"]
    }
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
console.log(lookUpProfile("Akira", "likes")); // ["Pizza", "Coding", "Brownie Points"]

// ==========================================
// 13. MATH & UTILITY FUNCTIONS
// ==========================================

// Random numbers
let randomFraction = Math.random(); // 0 to 1 (not including 1)
let randomWholeNumber = Math.floor(Math.random() * 10); // 0 to 9
let randomRange = Math.floor(Math.random() * (max - min + 1)) + min;

// parseInt function
let parsedInt = parseInt("56"); // 56
let parsedIntWithRadix = parseInt("101", 2); // 5 (binary)

// Ternary operator
let age3 = 20;
let canVote = age3 >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// Multiple ternary operators
function checkSign(num) {
    return num > 0 ? "positive" 
         : num < 0 ? "negative" 
         : "zero";
}
console.log(checkSign(10)); // "positive"

// ==========================================
// 14. ES6 FEATURES
// ==========================================

// let vs const (already covered)
// const with arrays/objects (mutation allowed, reassignment not)
const myArray = [1, 2, 3];
myArray.push(4); // WORKS!
// myArray = [1, 2, 3, 4]; // ERROR!

// Prevent object mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99; // Will throw error in strict mode
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
console.log(freezeObj()); // 3.14

// Arrow functions
// Traditional function
function greetTraditional(name) {
    return "Hello " + name;
}

// Arrow function (one parameter)
const greetArrow = name => "Hello " + name;

// Arrow function (multiple parameters)
const sumArrow = (a, b) => a + b;

// Arrow function with block body
const complexArrow = (a, b) => {
    let result = a + b;
    return result * 2;
};

// Default parameters
function greeting(name = "Guest") {
    return "Hello, " + name;
}
console.log(greeting()); // "Hello, Guest"
console.log(greeting("Alice")); // "Hello, Alice"

// Rest operator (...)
function sumRest(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log(sumRest(1, 2, 3)); // 6

// Spread operator (...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copy an array
let arrCopy = [...arr1];

// Destructuring assignment
// Object destructuring
const user = { name: "John", age: 30 };
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // "John", 30

// Array destructuring
const [first, second, third] = [1, 2, 3];
console.log(first, second, third); // 1, 2, 3

// Destructuring with rest
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); // 1, 2, [3, 4, 5]

// Template literals
let name2 = "Alice";
let age4 = 25;
let template = `My name is ${name2} and I am ${age4} years old.`;
console.log(template);

// Simple fields (object property shorthand)
let firstName2 = "Bob";
let lastName2 = "Smith";
let person2 = { firstName2, lastName2 };
console.log(person2); // { firstName2: "Bob", lastName2: "Smith" }

// Declarative functions (shorthand method syntax)
let person3 = {
    name: "John",
    // Old way
    sayHello: function() {
        console.log("Hello");
    },
    // New way (declarative)
    sayHi() {
        console.log("Hi!");
    }
};

// Class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, my name is ${this.name}`;
    }
    
    // Getter
    get birthYear() {
        return new Date().getFullYear() - this.age;
    }
    
    // Setter
    set birthYear(year) {
        this.age = new Date().getFullYear() - year;
    }
}

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John"
console.log(john.birthYear); // ~1994

// ==========================================
// 15. MODULES (import/export)
// ==========================================

// Exporting (in a separate file - module.js)
/*
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) { return a * b; }
*/

// Importing (in main file)
/*
import multiply, { add, subtract } from './module.js';
console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15
*/

// Import everything as an object
/*
import * as math from './module.js';
console.log(math.add(5, 3));
*/

// ==========================================
// 16. COUNTING CARDS (Blackjack Example)
// ==========================================

let count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    
    let holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

// Example usage
console.log(cc(2)); // 1 Bet
console.log(cc(3)); // 2 Bet
console.log(cc(7)); // 2 Bet
console.log(cc('K')); // 1 Bet
console.log(cc('A')); // 0 Hold
