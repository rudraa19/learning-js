const name = "rudra"
const repoCount = 3

// console.log(name + repoCount + " value");        // <- outdated syntax


// String interpolation
console.log(`Hello! My name is ${name} and I have ${repoCount} repo.`);


// Declaring using obj
const gameName = new String('rudra-rs-com')    // <- use it in console to understand more how it's useful

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  rudra   "
console.log(newStringOne.trim());

const url = "https://rudra.com/rudra%20sharma"
console.log(url.replace('%20', '-')); 
console.log(url.includes("rudra"));

console.log(gameName.split("-"));