// for

// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`\nTable of ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


// let myArray = ["falsh", "batman", "superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index]
//     console.log(element);
// }


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${i}`)
// }
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${i}`)
}