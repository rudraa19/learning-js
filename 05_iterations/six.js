// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) => {
//     return item
// })                              // non of the value is getting return here in reality
// console.log(values);            // OUTPUT: undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

const newNums = []
myNums.forEach( (num) => {
    if (num > 4)
        newNums.push(num)    
})
console.log(newNums);