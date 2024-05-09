// Basic comparisions:
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);           // OUTPUT: true
console.log("02" > 1);          // OUTPUT: true

console.log(null > 0);             // OUTPUT: false
console.log(null == 0);            // OUTPUT: false
console.log(null >= 0);            // OUTPUT: true
/*
        The reason is that an equality check "==" and comparisions ">, <, <=, >=" works differently
        Comparision converts null to number, treating it as 0
        that's why "null >= 0" is trus and "null == 0" is false
 */


// ===
console.log("2" === 2);             // <- strict check (no type conversion)