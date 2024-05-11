// for of


// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "Hello World!"
// for (const i of greeting) {
//     console.log(i);
// }


// MAPS

const map = new Map()
map.set('IND', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}