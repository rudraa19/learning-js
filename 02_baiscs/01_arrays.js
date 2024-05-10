const myArray = [0, 1, 2, 3, 4, 5]      // <- JS arrays are re-sizeable
const myHeros = ["Ironman", "Thor"]
const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArray.push(4)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));        // OUTPUT: -1 (value does not exist)

// const newArr = myArray.join()              // Converts into comma separated string

// console.log(myArray);   


// Slice and Splice 

console.log("A. ", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B. ", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log("C. ", myArray);

/*
    slice -> doesn't make changes in original array
    splice -> makes changes in original array
 */