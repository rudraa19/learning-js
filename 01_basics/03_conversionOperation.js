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