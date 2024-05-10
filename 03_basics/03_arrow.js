const user = {
    username: "rudra",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!`);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


// function chai (){
//     let username = "rudra"
//     console.log(this.username);         // OUTPUT: undefined
// } 
// chai()


// ARROW FUNCTION -------------------------------------------------------------

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

const addtwo = (num1, num2) => ( num1 + num2 )
console.log(addtwo(1, 2))