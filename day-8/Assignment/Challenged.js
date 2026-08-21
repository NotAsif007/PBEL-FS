let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < arr.length; i++){
    if(i%2 == 0){
        arr[i] = "JavaScript";
    }
}

console.log(arr)

console.log("\n");

let name = "Bikash";
let age = 22;
let city = "Guwahati";

console.log("Hello I am"+" "+name+" "+"and I'm"+" "+age+" "+"years old. I'm from"+" "+city+".");

console.log("\n");

let data = [ "Arrays", 10, true, false, null, undefined, "New", 2 ];

let count = 0;

for(let i = 0; i < data.length; i++){
    count++;
}

console.log("Length of the Array:",count)
