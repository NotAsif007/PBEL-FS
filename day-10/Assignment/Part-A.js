let num_1 = 10;

if(num_1 % 2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
}

console.log("\n");

let num1 = 21;

if(num1 % 3 == 0 && num1 % 7 == 0){
    console.log("FizzBuzz");
}else if(num1 % 3 == 0){
    console.log("Fizz");
}else if(num1 % 7 == 0){
    console.log("Buzz");
}else{
    console.log("Neither a multiple of 3 nor 7.")
}

console.log("\n");

let a = 10;
let b = 30;
let c = 40;

if(a>b && a>c){
    console.log("a:", a, "is Largest")
}else if(b>a && b>c){
    console.log("b:", b, "is Largest")
}else{
    console.log("c:", c, "is Largest")
}

console.log("\n")

let marks = 50;

if(marks >= 40){
    console.log("Passed")
}else{
    console.log("Failed")
}

console.log("\n")

console.log(true&&true);
console.log(true&&false);
console.log(true||true);
console.log(true||false);
