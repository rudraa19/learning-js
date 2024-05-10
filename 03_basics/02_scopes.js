let a = 300             // <-- GLOBAL SCOPE

if (true) {
    let a = 10          // |
    const b = 20        // |<-- BLOCK SCOPE
    // var c = 30       // |

    console.log(a);     // OUTPUT: 10
}


console.log(a);      // OUTPUT: 300
// console.log(b);      // OUTPUT: ERROR
// console.log(c);         // OUTPUT: 30


function one(){
    const username = "rudra"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);        // <- CANNOT ACCESS
    two()
}
one()


// ========================== INTERESTING =================================


addone(5)                       // <- won't give error
function addone(num) {
    return num+1
}

// addtwo(3)                    // <- will give you error
const addtwo = function(num) {
    return num+2
}
addtwo(5)