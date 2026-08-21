let arr = ["Arrays", 10, true, false, null, undefined];
console.log("Array:", arr);

console.log("\n");

console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length]);
console.log("Length of the Array:", arr.length);

console.log("\n");

arr.push("New", 2);
console.log("After adding two more element using push():",arr);

console.log("\n");

arr.pop();
console.log("After removing the last element using pop():",arr);

console.log("\n");

arr[2] = "Guwahati";
console.log("After replace the third element:", arr);

console.log("\n");

let arr1 = [10, 20, 30, 40, 50];

console.log("Length of the Array:", arr.length);
arr1.push(60);
console.log(arr1,"\n");
arr1.pop();
console.log(arr1,"\n");
arr1[2] = 100;
console.log("Final Array:", arr1);

console.log("\n");

let data = [1, 2, [3, 4, 5], 6]
console.log(data[2][0]);
console.log(data[2][2]);
console.log("Length of the Array:", data.length)
