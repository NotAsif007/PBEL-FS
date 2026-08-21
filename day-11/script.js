const myFunc=(a,b,c)=>{
    return a+b+c;
}

function f() {
    let sum = 7
    console.log(sum)
}

f()

console.log(name)
var name = "Thala"

var myName = "Test"
console.log(myName)
myName = "Test2"
console.log(myName)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach((e, i)=>{

    console.log(e*4)
})

console.log("-------------------------")

arr.map((e, i)=>{

    console.log(e*4)
})

console.log("-------------------------")

let filterOut = arr.filter((e, i)=>{
    return e % 2 === 0
})
console.log(filterOut)

console.log("-------------------------")

let reduceOut = arr.reduce((e, i)=>{
    return acc = e*2
})

console.log(reduceOut)

console.log("-------------------------")

let arr1 = [2, 4, 6, 8, 10, 3, 5, 7, 9]

let out = arr.map((e, i)=>{
    return e*3
}).filter((e, i)=>{
    return e % 5 === 0
}).forEach((e, i)=>{
    console.log(e*200)
})

console.log("-------------------------")

let arr2 = [2, 3, 1, 6, 7]

let ans = arr.reduce((acc, e)=>{
    return acc + e
})
console.log(ans)
