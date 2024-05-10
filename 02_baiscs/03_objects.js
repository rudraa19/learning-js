// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Rudra",
    [mySym]: "myKey1",                  // <- remeber
    "full name": "Rudra Sharma",
    age: 18,
    location: "Balasinor",
    email: "rudra@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Tuesday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rudra@chatgpt.com"
// Object.freeze(jsUser)               // <- does not allow any changes from now on in obj

jsUser.greeting = function() {
    console.log("Hello JS user");
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS uswer, ${this.name}`);
}

jsUser.greeting();
jsUser.greetingTwo();