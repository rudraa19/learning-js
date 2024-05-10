// const tinderuser = new Object()      // <- singleton object
const tinderuser = {}                   // <- non singleton object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

console.log(tinderuser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rudra",
            lastname: "sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

