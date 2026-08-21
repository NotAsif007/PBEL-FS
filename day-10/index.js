let str ="We are in full stack batch"
let vowels = "aeiou";
let foundVowels = "";

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        foundVowels += str[i];
    }
}

console.log(foundVowels);
