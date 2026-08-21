function sum(a, b){
    console.log(a + b);
}

sum(4, 60);

console.log("\n");

function square(num){
    console.log(num**2);
}

square(5);

console.log("\n");

let average = (a, b, c) => {
    let sum = a + b + c;
    console.log(sum/3);
}

average(3,4,5);

console.log("\n");

let myFunction = (str) => {
    console.log(str.length)
}

myFunction("Hello");

console.log("\n");

function greater(a, b){
    if(a>b){
        console.log(`a: ${a} is greater`);
    }else if(a<b){
        console.log(`b: ${b} is greater`);
    }else{
    console.log(`Both a: ${a} & b: ${b} are equal`);
    }
}

greater(7, 4);
greater(2, 4);
greater(3, 3);
