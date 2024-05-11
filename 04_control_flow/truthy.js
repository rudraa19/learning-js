const userEmail = "r@rudra.ai"

if (userEmail) {
    console.log("Got user email");  
} else {
    console.log("Don't have user email");
}


/*
    FALSY VALUES:   
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    TRUTHY VALUES:
    "0", 'false', " ", [], {}, function(){}
*/


/*
    Nullish Coalescing Operator (??): null, undefined
*/

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);