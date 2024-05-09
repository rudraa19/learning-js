const accountId = 122335
let accountEmail = "rudra@google.com"
var accountPassword = "123123"
accountCity = "Balasinor"
let accountState;

// accountId = 2        <- Not allowed

accountEmail = "rs@rs.com"
accountPassword = "2121212"
accountCity = "Anand"

/*

    Always prefer using "let" over "var"
    because of issue in block scope and funciton i.e. -> {}

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])