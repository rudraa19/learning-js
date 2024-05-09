let score1 = "33"                        // <- Normal Number as string
let score2 = "33ab"                     // <- NaN

console.log(typeof(score1));

let valueInNumber1 = Number(score1)       // <- To convert into number
let valueInNumber2 = Number(score2)       // <- To convert into number

console.log(typeof(valueInNumber1));
console.log(typeof(valueInNumber2));        // OUTPUT: number

console.log(valueInNumber2);                // OUTPUT: NaN


/*
        "33" -> 33
        "33abc" -> NaN
        true -> 1; false -> 0
*/


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


/*
        1 -> true; 0 -> false
        "" -> false
        "rudra" -> true
*/




// ============================== OPERATIONS ========================================


let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)       // <- 2^2 (works as power)
console.log(2%2)


let str1 = "Hello"
let str2 = " Rudra"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


let num1, num2, num3
num1 = num2 = num3 = 3;

let gameCounter = 33
gameCounter++;              //  <- postfix
++gameCounter;              //  <- prefix
console.log(gameCounter)