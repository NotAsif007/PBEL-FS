
// Part 1: Variables and Data Type

// 1. Create two variables named firstName and lastName and print your full name.
let firstName = "Asif";
let lastName = "Raza";

console.log("Full Name:", firstName + " " + lastName);

// Output:
// Full Name: Asif Raza


// 2. Create a variable age and store your age in it. Print the value and its data type.
let age = 19;

console.log("Age:", age);
console.log("Data Type:", typeof age);

// Output:
// Age: 19
// Data Type: number


// 3. Create variables of different data types.
let str = "Hello";
let num = 100;
let bool = true;
let undef;
let empty = null;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof empty);

// Output:
// string
// number
// boolean
// undefined
// object


// 4. Create two numbers and print arithmetic operations.
let a = 20;
let b = 5;

console.log("Sum =", a + b);
console.log("Difference =", a - b);
console.log("Product =", a * b);
console.log("Division =", a / b);

// Output:
// Sum = 25
// Difference = 15
// Product = 100
// Division = 4


// 5. Create a variable price.
let price = 99.99;

console.log(price);
console.log(typeof price);

// Output:
// 99.99
// number


// 6. Predict the output
console.log(typeof null);
console.log(typeof undefined);

// Output:
// object
// undefined


// Part 2: Comparison Operators

// 1. Comparison operators
let x = 15;
let y = 20;

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Output:
// false
// false
// true
// true
// false
// true
// false
// true


// 2. Predict the output
console.log(10 == "10");
console.log(10 === "10");

// Output:
// true
// false


// 3. Predict the output
console.log(null == undefined);
console.log(null === undefined);

// Output:
// true
// false


// 4. Compare ages
let age1 = 19;
let age2 = 25;

if (age1 > age2) {
    console.log("Person 1 is older");
} else if (age2 > age1) {
    console.log("Person 2 is older");
} else {
    console.log("Both are the same age");
}

// Output:
// Person 2 is older


// Part 3: Conditional Statements

// 1. Positive or Negative
let number = -5;

if (number >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// Output:
// Negative


// 2. Pass or Fail
let marks = 65;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Pass


// 3. Larger between two numbers
let n1 = 10;
let n2 = 25;

if (n1 > n2) {
    console.log(n1);
} else {
    console.log(n2);
}

// Output:
// 25


// 4. Largest among three numbers
let p = 10;
let q = 30;
let r = 20;

if (p >= q && p >= r) {
    console.log(p);
} else if (q >= p && q >= r) {
    console.log(q);
} else {
    console.log(r);
}

// Output:
// 30


// 5. Even or Odd
let num1 = 14;

if (num1 % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Output:
// Even


// 6. Grade System
let score = 82;

if (score > 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Good");
} else if (score >= 50) {
    console.log("Average");
} else {
    console.log("Fail");
}

// Output:
// Good


// Part 4: Arrays

// 1. Mixed array
let arr = ["Hello", 100, true, null, undefined];

console.log(arr);

// Output:
// [ 'Hello', 100, true, null, undefined ]


// 2. First, Last and Length
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr.length);

// Output:
// Hello
// undefined
// 5


// 3. Add two elements
arr.push("JavaScript");
arr.push(200);

console.log(arr);

// Output:
// ['Hello',100,true,null,undefined,'JavaScript',200]


// 4. Remove last element
arr.pop();

console.log(arr);

// Output:
// ['Hello',100,true,null,undefined,'JavaScript']


// 5. Replace third element
arr[2] = "Nagaon";

console.log(arr);

// Output:
// ['Hello',100,'Nagaon',null,undefined,'JavaScript']


// 6. Perform operations
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);

numbers.push(60);

numbers.pop();

numbers[2] = 100;

console.log(numbers);

// Output:
// 5
// [10,20,100,40,50]


// 7. Nested array
let data = [1, 2, [3, 4, 5], 6];

console.log(data[2][0]);
console.log(data[2][2]);
console.log(data[2].length);

// Output:
// 3
// 5
// 3



// Part 5: Output Prediction

// 1.
let m = 10;
let n = "10";

console.log(m == n);
console.log(m === n);

// Output:
// true
// false


// 2.
let arr1 = [1, 2, 3];

arr1.push(4);
arr1.pop();

console.log(arr1);

// Output:
// [1,2,3]


// 3.
let arr2 = ["A", "B", "C"];

arr2[1] = "Z";

console.log(arr2);

// Output:
// ['A','Z','C']


// Challenge Questions

// 1. Replace every even index with "JavaScript"
let challenge = [];

for (let i = 0; i < 10; i++) {
    challenge.push(i + 1);
}

for (let i = 0; i < challenge.length; i += 2) {
    challenge[i] = "JavaScript";
}

console.log(challenge);

// Output:
// ['JavaScript',2,'JavaScript',4,'JavaScript',6,'JavaScript',8,'JavaScript',10]


// 2. Print sentence
let name = "Asif";
let userAge = 19;
let city = "Nagaon";

console.log(name + " is " + userAge + " years old and lives in " + city + ".");

// Output:
// Asif is 19 years old and lives in Nagaon.


// 3. Count elements without using length
let mixed = [1, "Hello", true, null, undefined, 5];

let count = 0;

for (let item of mixed) {
    count++;
}

console.log("No. of elements:", count);

// Output:
// No. of elements: 6