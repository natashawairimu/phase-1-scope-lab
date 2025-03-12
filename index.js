// Write your solution in this file!
let customerName = "bob"

function getCustomerName() {
    return customerName
}
console.log(getCustomerName())
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
upperCaseCustomerName()
console.log(customerName)

function setBestCustomer() {
    bestCustomer = "not bob"; 
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "some customer"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "another customer"
}