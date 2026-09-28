const accountId = 1
let accountEmail = "prasad@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2

accountEmail = "hc@gmail.com"
accountPassword = "123456"
accountCity = "Hyderabad"

console.log(accountId);
console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
})

/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/