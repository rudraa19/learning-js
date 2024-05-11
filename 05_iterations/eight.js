const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => {
    return acc+currval
}, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mob dev course",
        price: 5999
    },
    {
        itemName: "data sci course",
        price: 12999
    },
]

let total = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(total);