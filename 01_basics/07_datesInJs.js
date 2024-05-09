let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 0, 24)       // (YYYY, MM, DD)
// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
// let myCreatedDate = new Date("2024-05-10")
let myCreatedDate = new Date("10-05-2024")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})