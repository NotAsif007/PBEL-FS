let firstName = "Asif";
let lastName = "Raza";

console.log("Full Name:", firstName + " " + lastName);

let age = 19;

console.log("Age:", age);
console.log("Data Type:", typeof age);

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

let a = 20;
let b = 5;

console.log("Sum =", a + b);
console.log("Difference =", a - b);
console.log("Product =", a * b);
console.log("Division =", a / b);

let price = 99.99;

console.log(price);
console.log(typeof price);

console.log(typeof null);
console.log(typeof undefined);

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

console.log(10 == "10");
console.log(10 === "10");

console.log(null == undefined);
console.log(null === undefined);

let age1 = 19;
let age2 = 25;

if (age1 > age2) {
    console.log("Person 1 is older");
} else if (age2 > age1) {
    console.log("Person 2 is older");
} else {
    console.log("Both are the same age");
}

let number = -5;

if (number >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

let marks = 65;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let n1 = 10;
let n2 = 25;

if (n1 > n2) {
    console.log(n1);
} else {
    console.log(n2);
}

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

let num1 = 14;

if (num1 % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

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

let arr = ["Hello", 100, true, null, undefined];

console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr.length);

arr.push("JavaScript");
arr.push(200);

console.log(arr);

arr.pop();

console.log(arr);

arr[2] = "Nagaon";

console.log(arr);

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);

numbers.push(60);

numbers.pop();

numbers[2] = 100;

console.log(numbers);

let data = [1, 2, [3, 4, 5], 6];

console.log(data[2][0]);
console.log(data[2][2]);
console.log(data[2].length);

let m = 10;
let n = "10";

console.log(m == n);
console.log(m === n);

let arr1 = [1, 2, 3];

arr1.push(4);
arr1.pop();

console.log(arr1);

let arr2 = ["A", "B", "C"];

arr2[1] = "Z";

console.log(arr2);

let challenge = [];

for (let i = 0; i < 10; i++) {
    challenge.push(i + 1);
}

for (let i = 0; i < challenge.length; i += 2) {
    challenge[i] = "JavaScript";
}

console.log(challenge);

let name = "Asif";
let userAge = 19;
let city = "Nagaon";

console.log(name + " is " + userAge + " years old and lives in " + city + ".");

let mixed = [1, "Hello", true, null, undefined, 5];

let count = 0;

for (let item of mixed) {
    count++;
}

console.log("No. of elements:", count);
