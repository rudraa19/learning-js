function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("R");
    console.log("A");
}
sayMyName()


function addTwoNumber(number1, number2) {
    return number1 + number2
}
console.log(addTwoNumber(3, 4));

function loginUserMessage(username) {
    if(!username) {
        return "Please enter a username"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(20, 400, 500));


const user = {
    username: "rudra",
    price: 199
}

function handleObject (anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

handleObject(user)
handleObject({
    username: "RUDRA",
    price: 399
})


const newArr = [200, 400, 100, 600]
function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArr));