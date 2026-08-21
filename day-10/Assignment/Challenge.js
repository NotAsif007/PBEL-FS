let Positive_Arr = [10, 20, 15, 60, 49];
let largest = 0;
let Sec_Largest = 0;

for(let i in Positive_Arr){
    if(Positive_Arr[i] > largest){
        Sec_Largest = largest;
        largest = Positive_Arr[i];
    }else if(Positive_Arr[i] > Sec_Largest && Positive_Arr != largest){
        Sec_Largest = Positive_Arr[i];
    }
}
console.log(Sec_Largest)

console.log("\n")

let str = "Programming";
let vowels = 0;
let cons = 0;
for(let i of str){
    if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
        vowels+=1;
    }else{
        cons+=1;
    }
}
console.log("Numbers of vowels:", vowels);
console.log("Numbers of consonants:", cons);

console.log("\n")

let student = {
    name : "Dhiman",
    age : 20,
    university : "ADTU",
    subjects : ["Physics", "Chemistry", "Maths", "English"],
    hobies : ["Sleeping", "Game", "Coding"]
}

console.log(student);

console.log("\n")

function prime(num){
    let isPrime = true;

    if(num<=1){
        isPrime = false;
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
        }
    }

    if(isPrime){
        console.log("Prime")
    }else{
        console.log("Not Prime")
    }
}
prime(2)

console.log("\n")

let Reverse = (str) => {
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed+=str[i];
    }

    console.log(reversed)
}
Reverse("Hello")

console.log("\n")

let names = ["Ankur", "Dhiman", "Adarsh", "Rahul", "Jatin"];
let a = "";

for(let i = 0; i < names.length; i++){
    for(let j = 0; j < names[i].length; j++){
        if(names[i][0] == "A"){
            a+=names[i]
            break;
        }
    }
}

console.log(a)
