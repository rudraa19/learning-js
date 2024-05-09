//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// ==================================== MEMORY =====================================

/*
    Stack -> Primitive
    Heap -> Non Primitive
*/

// Stack
let myName1 = "rudra"
let myName2 = myName1
myName2 = "Rudra"

console.log(myName1);       // OUTPUT: rudra
console.log(myName2);       // OUTPUT: Rudra


// Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "user@gmail.com"
console.log(userOne.email);         // OUTPUT: user@gmail.com 
console.log(userTwo.email);         // OUTPUT: user@gmail.com