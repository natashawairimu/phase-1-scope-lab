// Step 1: Declare customerName in global scope
var customerName = "bob"; // Use `var` to ensure it is globally available

// Step 2: Function to return customerName
function getCustomerName() {
    return customerName;
}

// Step 3: Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Step 4: Declare bestCustomer in global scope
var bestCustomer; // Declare it at the top

function setBestCustomer() {
    bestCustomer = "not bob"; 
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

// Step 5: Declare leastFavoriteCustomer as a constant (unchangeable)
const leastFavoriteCustomer = "some customer";

function changeLeastFavoriteCustomer() {
    // This should fail as expected
    leastFavoriteCustomer = "another customer"; 
}