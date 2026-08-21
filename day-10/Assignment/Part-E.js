let student = {
    name : "Dhiman",
    roll_no : 62,
    course : "BTECH",
    university : "ADTU"
}

for(let i in student){
    console.log(i);
}

console.log("\n")

for(let i in student){
    console.log(student[i]);
}

console.log("\n")

let marks = {
    maths : 100,
    english: 88,
    physics: 50,
    chemistry: 10
}

let min = 100;
let sub = "";

for(let i in marks){
    if(marks[i] < min){
        min = marks[i];
        sub = i;
    }
}
console.log(sub + ": " + min);

console.log("\n")

let count = 0;
for(let i in student){
    count+=1;
}
console.log(count);

console.log("\n")

for(let i in student){

    console.log(student[i]);

}
